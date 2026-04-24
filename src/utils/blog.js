// src/utils/blog.js

// Import all .md files from the blog directory using the updated Vite glob options
const posts = import.meta.glob('../content/blog/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
});

/**
 * Simple frontmatter parser that works in the browser.
 * Extracts YAML-style metadata between --- markers.
 */
function parseFrontmatter(rawContent) {
  const match = rawContent.match(/^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/);
  if (!match) {
    return { data: {}, content: rawContent };
  }
  const [, frontmatterStr, content] = match;
  const data = {};
  frontmatterStr.split('\n').forEach(line => {
    const colonIndex = line.indexOf(':');
    if (colonIndex > -1) {
      const key = line.slice(0, colonIndex).trim();
      let value = line.slice(colonIndex + 1).trim();
      // Remove surrounding quotes if present
      if ((value.startsWith("'") && value.endsWith("'")) ||
          (value.startsWith('"') && value.endsWith('"'))) {
        value = value.slice(1, -1);
      }
      data[key] = value;
    }
  });
  return { data, content };
}

export async function getAllPosts() {
  const allPosts = [];

  for (const path in posts) {
    try {
      const rawContent = posts[path];
      const { data, content } = parseFrontmatter(rawContent);

      // Create slug from filename (e.g., 'my-post' from 'my-post.md')
      const slug = path.split('/').pop().slice(0, -3);
      const excerpt = content.slice(0, 200).replace(/\n/g, ' ') + '...';

      allPosts.push({
        slug,
        title: data.title || 'Untitled',
        date: data.date || new Date().toISOString(),
        description: data.description || '',
        excerpt,
        content,
      });
    } catch (error) {
      console.error(`❌ Failed to parse ${path}:`, error);
    }
  }

  // Sort posts by date, newest first
  return allPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
}

export async function getPostBySlug(slug) {
  const posts = await getAllPosts();
  return posts.find(post => post.slug === slug);
}
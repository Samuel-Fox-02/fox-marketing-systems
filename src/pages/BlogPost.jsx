// src/pages/BlogPost.jsx
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import { getPostBySlug } from '../utils/blog';
import Button from '../components/ui/Button';
import SEO from '../components/ui/SEO'

// Import highlight.js styles for code blocks (you'll need to install 'highlight.js' or choose a theme)
import 'highlight.js/styles/github-dark.css';

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      const foundPost = await getPostBySlug(slug);
      setPost(foundPost);
      setLoading(false);
    };
    fetchPost();
  }, [slug]);

  if (loading) {
    return <div className="container mx-auto px-6 py-20 text-center">Loading post...</div>;
  }

  if (!post) {
    return (
      <div className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
        <p className="mb-8">Sorry, we couldn't find the blog post you were looking for.</p>
        <Link to="/blog"><Button variant="primary">Back to Blog</Button></Link>
      </div>
    );
  }

  return (
    <article className="container mx-auto px-6 py-12 max-w-4xl">
      <header className="mb-12">
        <Link to="/blog" className="text-fox-orange hover:underline mb-4 inline-block">← Back to all posts</Link>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
        <p className="text-espresso/60">
          {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
      </header>
      
      {/* Apply Tailwind Typography styles for beautiful rendering */}
      <div className="prose prose-lg prose-espresso max-w-none">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeHighlight]}
        >
          {post.content}
        </ReactMarkdown>
      </div>
    </article>
  );
};

export default BlogPost;
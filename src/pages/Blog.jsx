import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllPosts } from '../utils/blog';
import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      const allPosts = await getAllPosts();
      setPosts(allPosts);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto px-6 py-20 text-center">
        <p>Loading posts...</p>
      </div>
    );
  }

  // Group posts by month
  const groupedPosts = posts.reduce((acc, post) => {
    const date = new Date(post.date);
    const monthYear = date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
    if (!acc[monthYear]) {
      acc[monthYear] = [];
    }
    acc[monthYear].push(post);
    return acc;
  }, {});

  const groupKeys = Object.keys(groupedPosts).sort((a, b) => {
    const dateA = new Date(groupedPosts[a][0].date);
    const dateB = new Date(groupedPosts[b][0].date);
    return dateB - dateA; // newest first
  });

  // Current month name (e.g., "April 2026")
  const currentMonth = new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

  // Determine which group to show by default (current month if it has posts, else latest month)
  let defaultGroup = currentMonth;
  if (!groupedPosts[currentMonth] && groupKeys.length > 0) {
    defaultGroup = groupKeys[0];
  }

  return (
    <div className="container mx-auto px-6 py-20">
      <SectionTitle 
        eyebrow="Blog"
        title="Marketing Insights"
        description="Actionable strategies and case studies from the Fox Marketing Systems team."
      />

      {/* Show only current month (or latest) when not expanded */}
      {!showAll && (
        <div>
          <h2 className="text-2xl font-bold text-espresso mb-6">
            {defaultGroup === currentMonth ? 'This Month' : defaultGroup}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {groupedPosts[defaultGroup].map((post) => (
              <Card key={post.slug} className="p-8 hover:shadow-lg transition flex flex-col h-full">
                <span className="text-fox-orange text-sm font-semibold uppercase tracking-wider">
                  {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}
                </span>
                <h3 className="text-xl font-bold mt-2 mb-3">{post.title}</h3>
                <p className="text-espresso/70 mb-4 flex-grow">
                  {post.description || post.excerpt}
                </p>
                <Link
                  to={`/blog/${post.slug}`}
                  className="text-fox-orange font-medium hover:underline self-start mt-4"
                >
                  Read more →
                </Link>
              </Card>
            ))}
          </div>
          {groupKeys.length > 1 && (
            <div className="text-center mt-12">
              <Button variant="outline" onClick={() => setShowAll(true)}>
                View All Posts
              </Button>
            </div>
          )}
        </div>
      )}

      {/* Show all posts grouped by month when expanded */}
      {showAll && (
        <div>
          {groupKeys.map((month) => (
            <div key={month} className="mb-16">
              <h2 className="text-2xl font-bold text-espresso mb-6">{month}</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {groupedPosts[month].map((post) => (
                  <Card key={post.slug} className="p-8 hover:shadow-lg transition flex flex-col h-full">
                    <span className="text-fox-orange text-sm font-semibold uppercase tracking-wider">
                      {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}
                    </span>
                    <h3 className="text-xl font-bold mt-2 mb-3">{post.title}</h3>
                    <p className="text-espresso/70 mb-4 flex-grow">
                      {post.description || post.excerpt}
                    </p>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="text-fox-orange font-medium hover:underline self-start mt-4"
                    >
                      Read more →
                    </Link>
                  </Card>
                ))}
              </div>
            </div>
          ))}
          <div className="text-center mt-12">
            <Button variant="outline" onClick={() => setShowAll(false)}>
              Show Less
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;
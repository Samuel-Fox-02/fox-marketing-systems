import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import { Link } from 'react-router-dom';

const posts = [
  {
    title: "5 Email Subject Lines That Boost Open Rates",
    excerpt: "Learn the psychology behind high-performing subject lines.",
    date: "Mar 15, 2026",
    category: "Email Marketing"
  },
  {
    title: "SMS vs. Email: When to Use Each Channel",
    excerpt: "Maximize engagement by choosing the right channel at the right time.",
    date: "Mar 10, 2026",
    category: "Strategy"
  },
  {
    title: "How to Build a Lead Funnel in 30 Days",
    excerpt: "A step-by-step guide to creating a funnel that converts.",
    date: "Mar 5, 2026",
    category: "Funnels"
  }
];

const BlogPreview = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <SectionTitle 
          eyebrow="Resources"
          title="Insights & Strategies"
          description="Actionable advice to level up your marketing."
        />
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <Card key={idx} className="p-8 hover:shadow-lg transition">
              <span className="text-fox-orange text-sm font-semibold">{post.category}</span>
              <h3 className="text-xl font-bold mt-2 mb-3">{post.title}</h3>
              <p className="text-espresso/70 mb-4">{post.excerpt}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-espresso/50">{post.date}</span>
                <Link to="/blog" className="text-fox-orange font-medium hover:underline">Read more →</Link>
              </div>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/blog" className="inline-block border-2 border-espresso text-espresso font-semibold px-6 py-3 rounded-lg hover:bg-espresso hover:text-white transition">
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
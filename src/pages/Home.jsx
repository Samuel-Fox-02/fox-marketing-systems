import Hero from '../components/sections/Hero';
import ServicesPackages from '../components/sections/ServicesPackages';
import ProcessShowcase from '../components/sections/ProcessShowcase';
import BlogPreview from '../components/sections/BlogPreview';
// import LeadMagnet from '../components/sections/LeadMagnet'; // Removed for now

const Home = () => {
  return (
    <>
      <Hero />
      <ServicesPackages />
      <ProcessShowcase />
      {/* <LeadMagnet /> */} {/* Lead magnet removed */}
      <BlogPreview />
    </>
  );
};

export default Home;
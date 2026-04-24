const SectionTitle = ({ eyebrow, title, description }) => {
  return (
    <div className="text-center mb-16">
      {eyebrow && <span className="text-fox-orange font-semibold tracking-wider uppercase text-sm">{eyebrow}</span>}
      <h2 className="text-4xl md:text-5xl font-bold mt-2 text-espresso">{title}</h2>
      {description && <p className="text-lg text-espresso/70 max-w-2xl mx-auto mt-4">{description}</p>}
    </div>
  );
};

export default SectionTitle;
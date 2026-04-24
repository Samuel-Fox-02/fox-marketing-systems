const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const base = "px-6 py-3 rounded-lg font-semibold transition-all duration-200 inline-block text-center";
  const variants = {
    primary: "bg-fox-orange text-white hover:bg-fox-orange/90 shadow-md hover:shadow-lg",
    secondary: "bg-light-gold text-espresso hover:bg-light-gold/80",
    outline: "border-2 border-espresso text-espresso hover:bg-espresso hover:text-white"
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
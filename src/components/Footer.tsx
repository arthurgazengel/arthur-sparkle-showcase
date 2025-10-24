const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-accent rounded flex items-center justify-center text-accent-foreground font-bold">
              GA
            </div>
            <span className="font-semibold">manager</span>
          </div>
          
          <p className="text-sm text-background/70">
            © {new Date().getFullYear()} Arthur GAZENGEL - Freelance Marketing & Communication
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-accent rounded flex items-center justify-center text-accent-foreground font-bold text-lg">
              GA
            </div>
            <span className="text-lg font-semibold text-foreground">manager</span>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("accueil")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Accueil
            </button>
            <button
              onClick={() => scrollToSection("competences")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Mes compétences
            </button>
            <button
              onClick={() => scrollToSection("realisations")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Mes réalisations
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>
            <Button variant="outline" size="sm">
              Télécharger CV
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

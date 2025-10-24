import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-accent to-secondary">
      {/* Decorative elements */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-secondary rounded-full animate-float"></div>
        <div className="absolute top-1/4 right-20 w-24 h-24 bg-accent rounded-full animate-bounce-fun"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-primary rounded-full animate-wiggle"></div>
        <div className="absolute bottom-1/3 right-1/3 w-20 h-20 bg-secondary rounded-full animate-pulse-glow"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="mb-8 animate-bounce-fun">
          <span className="text-8xl md:text-9xl">🚀</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-primary-foreground mb-6 animate-fade-in transform hover:scale-105 transition-transform duration-300"
            style={{
              textShadow: "4px 4px 0 rgba(0,0,0,0.2), 8px 8px 0 rgba(0,0,0,0.1)",
              letterSpacing: "-0.02em"
            }}>
          BOOSTEZ VOTRE<br />
          <span className="text-secondary animate-pulse-glow">PROJET !</span>
        </h1>
        
        <p className="text-2xl md:text-3xl text-primary-foreground font-bold mb-10 max-w-3xl mx-auto transform hover:scale-105 transition-transform duration-300"
           style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.2)" }}>
          Marketing & Communication<br />avec une touche de <span className="text-secondary">FUN</span> 🎉
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button
            size="lg"
            variant="accent"
            onClick={() => scrollToSection("contact")}
            className="text-xl px-10 py-7 font-bold transform hover:scale-110 hover:-rotate-2 transition-all duration-300 shadow-2xl"
            style={{ boxShadow: "6px 6px 0 rgba(0,0,0,0.2)" }}
          >
            🎯 Let's Go !
          </Button>
          <Button
            size="lg"
            variant="heroOutline"
            onClick={() => scrollToSection("competences")}
            className="text-xl px-10 py-7 font-bold bg-white/20 backdrop-blur-sm border-4 border-white transform hover:scale-110 hover:rotate-2 transition-all duration-300"
          >
            ✨ Découvrir
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

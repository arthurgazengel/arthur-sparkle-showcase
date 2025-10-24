import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ClientLogos from "@/components/ClientLogos";
import Skills from "@/components/Skills";
import Tools from "@/components/Tools";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import CV from "@/components/CV";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <ClientLogos />
      <Skills />
      <Tools />
      <Portfolio />
      <Testimonials />
      <CV />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

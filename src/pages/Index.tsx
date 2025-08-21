import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Index = () => {
  const { elementRef: footerRef, isVisible: footerVisible } = useScrollAnimation();
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Pricing />
        <Contact />
      </main>
      <footer ref={footerRef} className={`bg-foreground text-background py-8 animate-fade-in ${footerVisible ? 'visible' : ''}`}>
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 BeeMind. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
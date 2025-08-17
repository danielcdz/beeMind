import { Button } from "@/components/ui/button";
import { BookOpen, Menu, X } from "lucide-react";
import { useState } from "react";
import BeeMindLogo from "@/assets/BeeMindLogo.png";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  return     <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={BeeMindLogo} 
              alt="BeeMind Logo" 
              className="h-8 md:h-20 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">
              Inicio
            </a>
            <a href="#courses" className="text-foreground hover:text-primary transition-colors">
              Cursos
            </a>
            <a href="#pricing" className="text-foreground hover:text-primary transition-colors">
              Precios
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              Información
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contacto
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button className="bg-gradient-primary hover:shadow-glow transition-all duration-300" onClick={() => window.open('https://wa.me/50672926155?text=¡Hola! Me interesa aprender inglés con BeeMind', '_blank')}>
              Iniciar
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden p-2 text-foreground hover:text-primary transition-colors">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && <div className="md:hidden mt-4 py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">
                Inicio
              </a>
              <a href="#courses" className="text-foreground hover:text-primary transition-colors">
                Cursos
              </a>
              <a href="#pricing" className="text-foreground hover:text-primary transition-colors">
                Precios
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">
                Información
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">
                Contacto
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button className="bg-gradient-primary hover:shadow-glow transition-all duration-300" onClick={() => window.open('https://wa.me/50672926155?text=¡Hola! Me interesa aprender inglés con BeeMind', '_blank')}>
                  Iniciar
                </Button>
              </div>
            </nav>
          </div>}
      </div>
    </header>;
};
export default Header;
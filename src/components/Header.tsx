
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          // Scrolling down
          setIsVisible(false);
        } else {
          // Scrolling up
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="bg-white/95 backdrop-blur-md border-b border-blue-100 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-blue-800">Dr. Marco Demange</h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('inicio')}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 py-2"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection('sobre')}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 py-2"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection('tratamentos')}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 py-2"
              >
                Tratamentos
              </button>
              <button
                onClick={() => scrollToSection('tecnologia')}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 py-2"
              >
                Tecnologia
              </button>
              <button
                onClick={() => scrollToSection('conteudos')}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 py-2"
              >
                Conteúdos
              </button>
              <button
                onClick={() => scrollToSection('depoimentos')}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 py-2"
              >
                Depoimentos
              </button>
              <button
                onClick={() => scrollToSection('contato')}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 py-2"
              >
                Contato
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors rounded-lg"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t border-blue-100">
              <nav className="py-4 space-y-1">
                <button
                  onClick={() => scrollToSection('inicio')}
                  className="block w-full text-left px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200 rounded-lg mx-2"
                >
                  Início
                </button>
                <button
                  onClick={() => scrollToSection('sobre')}
                  className="block w-full text-left px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200 rounded-lg mx-2"
                >
                  Sobre
                </button>
                <button
                  onClick={() => scrollToSection('tratamentos')}
                  className="block w-full text-left px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200 rounded-lg mx-2"
                >
                  Tratamentos
                </button>
                <button
                  onClick={() => scrollToSection('tecnologia')}
                  className="block w-full text-left px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200 rounded-lg mx-2"
                >
                  Tecnologia
                </button>
                <button
                  onClick={() => scrollToSection('conteudos')}
                  className="block w-full text-left px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200 rounded-lg mx-2"
                >
                  Conteúdos
                </button>
                <button
                  onClick={() => scrollToSection('depoimentos')}
                  className="block w-full text-left px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200 rounded-lg mx-2"
                >
                  Depoimentos
                </button>
                <button
                  onClick={() => scrollToSection('contato')}
                  className="block w-full text-left px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200 rounded-lg mx-2"
                >
                  Contato
                </button>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

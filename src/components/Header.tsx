
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
          setIsVisible(false);
        } else {
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-xl font-light text-gray-900 tracking-wide">
                Dr. Marco Demange
              </h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-12">
              <button
                onClick={() => scrollToSection('inicio')}
                className="text-gray-700 hover:text-gray-900 font-light text-sm uppercase tracking-wide transition-colors duration-200"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection('sobre')}
                className="text-gray-700 hover:text-gray-900 font-light text-sm uppercase tracking-wide transition-colors duration-200"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection('cirurgia-joelho')}
                className="text-gray-700 hover:text-gray-900 font-light text-sm uppercase tracking-wide transition-colors duration-200"
              >
                Cirurgia de Joelho
              </button>
              <button
                onClick={() => scrollToSection('tecnologia')}
                className="text-gray-700 hover:text-gray-900 font-light text-sm uppercase tracking-wide transition-colors duration-200"
              >
                Tecnologia
              </button>
              <button
                onClick={() => scrollToSection('conteudos')}
                className="text-gray-700 hover:text-gray-900 font-light text-sm uppercase tracking-wide transition-colors duration-200"
              >
                Conteúdos
              </button>
              <button
                onClick={() => scrollToSection('depoimentos')}
                className="text-gray-700 hover:text-gray-900 font-light text-sm uppercase tracking-wide transition-colors duration-200"
              >
                Depoimentos
              </button>
            </nav>

            {/* CTA Button Desktop */}
            <div className="hidden lg:block">
              <button
                onClick={() => scrollToSection('contato')}
                className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 text-sm font-light uppercase tracking-wide transition-all duration-200"
              >
                Contato
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-gray-700 hover:text-gray-900 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <nav className="py-6 space-y-1 border-t border-gray-100">
              <button
                onClick={() => scrollToSection('inicio')}
                className="block w-full text-left py-3 text-gray-700 hover:text-gray-900 font-light text-sm uppercase tracking-wide transition-colors duration-200"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection('sobre')}
                className="block w-full text-left py-3 text-gray-700 hover:text-gray-900 font-light text-sm uppercase tracking-wide transition-colors duration-200"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection('cirurgia-joelho')}
                className="block w-full text-left py-3 text-gray-700 hover:text-gray-900 font-light text-sm uppercase tracking-wide transition-colors duration-200"
              >
                Cirurgia de Joelho
              </button>
              <button
                onClick={() => scrollToSection('tecnologia')}
                className="block w-full text-left py-3 text-gray-700 hover:text-gray-900 font-light text-sm uppercase tracking-wide transition-colors duration-200"
              >
                Tecnologia
              </button>
              <button
                onClick={() => scrollToSection('conteudos')}
                className="block w-full text-left py-3 text-gray-700 hover:text-gray-900 font-light text-sm uppercase tracking-wide transition-colors duration-200"
              >
                Conteúdos
              </button>
              <button
                onClick={() => scrollToSection('depoimentos')}
                className="block w-full text-left py-3 text-gray-700 hover:text-gray-900 font-light text-sm uppercase tracking-wide transition-colors duration-200"
              >
                Depoimentos
              </button>
              <button
                onClick={() => scrollToSection('contato')}
                className="block w-full text-left py-3 bg-gray-900 text-white font-light text-sm uppercase tracking-wide transition-colors duration-200 mt-4"
              >
                Contato
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

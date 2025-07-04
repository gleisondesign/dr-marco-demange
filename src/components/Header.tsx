
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-sm' 
          : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-light text-gray-900 tracking-tight">
              Dr. Marco Demange
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-10">
            <button
              onClick={() => scrollToSection('inicio')}
              className="text-gray-700 hover:text-gray-900 font-light text-sm uppercase tracking-wider transition-all duration-300 hover:scale-105"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection('sobre')}
              className="text-gray-700 hover:text-gray-900 font-light text-sm uppercase tracking-wider transition-all duration-300 hover:scale-105"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection('cirurgia-joelho')}
              className="text-gray-700 hover:text-gray-900 font-light text-sm uppercase tracking-wider transition-all duration-300 hover:scale-105"
            >
              Cirurgia de Joelho
            </button>
            <button
              onClick={() => scrollToSection('tecnologia')}
              className="text-gray-700 hover:text-gray-900 font-light text-sm uppercase tracking-wider transition-all duration-300 hover:scale-105"
            >
              Tecnologia
            </button>
            <button
              onClick={() => scrollToSection('conteudos')}
              className="text-gray-700 hover:text-gray-900 font-light text-sm uppercase tracking-wider transition-all duration-300 hover:scale-105"
            >
              Conteúdos
            </button>
            <button
              onClick={() => scrollToSection('depoimentos')}
              className="text-gray-700 hover:text-gray-900 font-light text-sm uppercase tracking-wider transition-all duration-300 hover:scale-105"
            >
              Depoimentos
            </button>
          </nav>

          {/* CTA Button Desktop */}
          <div className="hidden lg:block">
            <button
              onClick={() => scrollToSection('contato')}
              className="bg-gray-900 hover:bg-gray-700 text-white px-8 py-3 text-sm font-light uppercase tracking-wider transition-all duration-300 transform hover:scale-105"
            >
              Contato
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-700 hover:text-gray-900 transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-out ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <nav className="py-8 space-y-2 border-t border-gray-100">
            <button
              onClick={() => scrollToSection('inicio')}
              className="block w-full text-left py-4 px-2 text-gray-700 hover:text-gray-900 font-light text-sm uppercase tracking-wider transition-all duration-300"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection('sobre')}
              className="block w-full text-left py-4 px-2 text-gray-700 hover:text-gray-900 font-light text-sm uppercase tracking-wider transition-all duration-300"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection('cirurgia-joelho')}
              className="block w-full text-left py-4 px-2 text-gray-700 hover:text-gray-900 font-light text-sm uppercase tracking-wider transition-all duration-300"
            >
              Cirurgia de Joelho
            </button>
            <button
              onClick={() => scrollToSection('tecnologia')}
              className="block w-full text-left py-4 px-2 text-gray-700 hover:text-gray-900 font-light text-sm uppercase tracking-wider transition-all duration-300"
            >
              Tecnologia
            </button>
            <button
              onClick={() => scrollToSection('conteudos')}
              className="block w-full text-left py-4 px-2 text-gray-700 hover:text-gray-900 font-light text-sm uppercase tracking-wider transition-all duration-300"
            >
              Conteúdos
            </button>
            <button
              onClick={() => scrollToSection('depoimentos')}
              className="block w-full text-left py-4 px-2 text-gray-700 hover:text-gray-900 font-light text-sm uppercase tracking-wider transition-all duration-300"
            >
              Depoimentos
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="block w-full text-left py-4 px-2 mt-6 bg-gray-900 text-white font-light text-sm uppercase tracking-wider transition-all duration-300"
            >
              Contato
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

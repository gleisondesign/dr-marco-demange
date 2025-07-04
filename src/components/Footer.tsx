
import React from 'react';
import { Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-24">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-16">
            <h3 className="text-3xl font-light mb-8 tracking-wide">Dr. Marco Demange</h3>
            <p className="text-gray-400 max-w-md mx-auto font-light leading-relaxed text-lg">
              Especialista em cirurgia do joelho, cirurgia robótica e preservação articular
            </p>
          </div>

          <div className="flex justify-center space-x-12 mb-16">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
            >
              <Instagram className="w-8 h-8" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
            >
              <Facebook className="w-8 h-8" />
            </a>
          </div>

          <div className="border-t border-gray-800 pt-12">
            <p className="text-sm text-gray-400 font-light">
              © 2024 Dr. Marco Demange. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

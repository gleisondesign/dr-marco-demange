
import React from 'react';
import { Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-12">
            <h3 className="text-2xl font-light mb-6 tracking-wide">Dr. Marco Demange</h3>
            <p className="text-gray-400 max-w-md mx-auto font-light leading-relaxed">
              Especialista em cirurgia do joelho, cirurgia robótica e preservação articular
            </p>
          </div>

          <div className="flex justify-center space-x-8 mb-12">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <Facebook className="w-6 h-6" />
            </a>
          </div>

          <div className="border-t border-gray-800 pt-8">
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

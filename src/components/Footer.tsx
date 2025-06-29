
import React from 'react';
import { Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Dr. Marco Demange</h3>
            <p className="text-slate-300 max-w-md mx-auto">
              Especialista em cirurgia do joelho, cirurgia robótica e preservação articular
            </p>
          </div>

          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800 hover:bg-slate-700 p-3 rounded-full transition-colors duration-200"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800 hover:bg-slate-700 p-3 rounded-full transition-colors duration-200"
            >
              <Facebook className="w-6 h-6" />
            </a>
          </div>

          <div className="border-t border-slate-800 pt-8">
            <div className="flex flex-col md:flex-row justify-center items-center text-sm text-slate-400">
              <p>
                © 2024 Dr. Marco Demange. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

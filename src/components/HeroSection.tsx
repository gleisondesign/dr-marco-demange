
import React from 'react';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://raw.githubusercontent.com/gleisondesign/dr-marco-demange/refs/heads/main/src/foto.jpg)',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/80 to-teal-700/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="flex justify-center text-center">
          <div className="max-w-4xl text-white">
            <p className="text-2xl md:text-3xl lg:text-4xl mb-4 font-light leading-relaxed">
              Cuidando do seu joelho com excelência e precisão
            </p>
            <p className="text-lg md:text-xl lg:text-2xl mb-12 opacity-90 font-light">
              Especialista em cirurgia robótica e preservação articular
            </p>
            <button
              onClick={scrollToContact}
              className="bg-teal-600 hover:bg-teal-700 text-white px-10 py-4 rounded-xl text-lg md:text-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-teal-500/25"
            >
              Agende sua consulta
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

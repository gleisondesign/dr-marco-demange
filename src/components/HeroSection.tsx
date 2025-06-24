
import React from 'react';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-left-center"
        style={{
          backgroundImage: 'url(/hero-dr-marco.jpg)',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto text-white">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            Dr. Marco Demange
          </h1>
          <p className="text-2xl md:text-3xl lg:text-4xl mb-4 font-light leading-relaxed">
            Cuidando do seu joelho com excelência e precisão
          </p>
          <p className="text-lg md:text-xl lg:text-2xl mb-12 opacity-90 font-light">
            Especialista em cirurgia robótica e preservação articular
          </p>
          <button
            onClick={scrollToContact}
            className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-xl text-lg md:text-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25"
          >
            Agende sua consulta
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

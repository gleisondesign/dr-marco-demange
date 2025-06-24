
import React from 'react';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-left-center"
        style={{
          backgroundImage: 'url(/hero-dr-marco.jpg)',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="flex justify-end">
          <div className="max-w-xl text-right text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Dr. Marco Demange
            </h1>
            <p className="text-xl md:text-2xl mb-4 font-light">
              "Cuidando do seu joelho com excelência e precisão"
            </p>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Especialista em cirurgia robótica e preservação articular
            </p>
            <button
              onClick={scrollToContact}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
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

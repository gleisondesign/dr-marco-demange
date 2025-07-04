
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
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://gleisondesign.github.io/dr-marco-demange/src/imagem-home.jpg)',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="text-white space-y-10 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
              Excelência em cirurgia do joelho com precisão, tecnologia e cuidado personalizado
            </h1>
            <p className="text-lg md:text-xl font-light opacity-95 leading-relaxed max-w-2xl">
              Mais de 20 anos de experiência, formação internacional e atuação nos principais centros médicos do país. Precisão cirúrgica, recuperação mais rápida e resultados personalizados.
            </p>
            <button
              onClick={scrollToContact}
              className="inline-block bg-white hover:bg-gray-100 text-gray-900 px-10 py-4 text-sm font-light uppercase tracking-wider transition-all duration-300 transform hover:scale-105"
            >
              Agendar Consulta
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

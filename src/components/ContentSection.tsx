
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ContentSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const contents = [
    {
      id: 1,
      title: "Reels: Técnicas Cirúrgicas Avançadas",
      description: "Vídeos curtos mostrando técnicas inovadoras em cirurgia do joelho e os avanços da medicina ortopédica.",
      image: "https://raw.githubusercontent.com/gleisondesign/dr-marco-demange/refs/heads/main/src/foto.jpg",
      link: "https://example.com/reels1"
    },
    {
      id: 2,
      title: "Podcast: Conversas sobre Ortopedia",
      description: "Discussões aprofundadas sobre os últimos avanços em cirurgia ortopédica e casos clínicos interessantes.",
      image: "https://raw.githubusercontent.com/gleisondesign/dr-marco-demange/refs/heads/main/src/foto.jpg",
      link: "https://example.com/podcast1"
    },
    {
      id: 3,
      title: "Entrevista: Futuro da Cirurgia Robótica",
      description: "Entrevista exclusiva sobre as perspectivas e inovações da cirurgia robótica no tratamento do joelho.",
      image: "https://raw.githubusercontent.com/gleisondesign/dr-marco-demange/refs/heads/main/src/foto.jpg",
      link: "https://example.com/entrevista1"
    },
    {
      id: 4,
      title: "Depoimento: Recuperação com Prótese Robótica",
      description: "Relato inspirador de paciente que recuperou sua mobilidade através da cirurgia de prótese robótica.",
      image: "https://raw.githubusercontent.com/gleisondesign/dr-marco-demange/refs/heads/main/src/foto.jpg",
      link: "https://example.com/depoimento1"
    },
    {
      id: 5,
      title: "Reels: Reabilitação Pós-Cirúrgica",
      description: "Série de vídeos mostrando exercícios e cuidados essenciais durante a recuperação pós-operatória.",
      image: "https://raw.githubusercontent.com/gleisondesign/dr-marco-demange/refs/heads/main/src/foto.jpg",
      link: "https://example.com/reels2"
    },
    {
      id: 6,
      title: "Podcast: Mitos e Verdades sobre Artrose",
      description: "Esclarecimentos sobre conceitos equivocados e informações corretas sobre o tratamento da artrose.",
      image: "https://raw.githubusercontent.com/gleisondesign/dr-marco-demange/refs/heads/main/src/foto.jpg",
      link: "https://example.com/podcast2"
    },
    {
      id: 7,
      title: "Entrevista: Preservação Articular",
      description: "Discussão sobre técnicas inovadoras para preservar a articulação natural e evitar próteses.",
      image: "https://raw.githubusercontent.com/gleisondesign/dr-marco-demange/refs/heads/main/src/foto.jpg",
      link: "https://example.com/entrevista2"
    },
    {
      id: 8,
      title: "Depoimento: Volta ao Esporte após Lesão",
      description: "História de atleta que retornou às competições após cirurgia de reconstrução ligamentar.",
      image: "https://raw.githubusercontent.com/gleisondesign/dr-marco-demange/refs/heads/main/src/foto.jpg",
      link: "https://example.com/depoimento2"
    }
  ];

  const nextSlide = () => {
    if (window.innerWidth < 768) {
      // Mobile: um card por vez
      setCurrentIndex(prev => (prev >= contents.length - 1 ? 0 : prev + 1));
    } else {
      // Desktop: 4 cards por vez
      const maxIndex = Math.max(0, contents.length - 4);
      setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
    }
  };

  const prevSlide = () => {
    if (window.innerWidth < 768) {
      // Mobile: um card por vez
      setCurrentIndex(prev => (prev <= 0 ? contents.length - 1 : prev - 1));
    } else {
      // Desktop: 4 cards por vez
      const maxIndex = Math.max(0, contents.length - 4);
      setCurrentIndex(prev => (prev <= 0 ? maxIndex : prev - 1));
    }
  };

  const handleCardClick = (link: string) => {
    window.open(link, '_blank');
  };

  return (
    <section id="conteudos" className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Conteúdos
          </h2>
          <div className="w-24 h-px bg-gray-900 mx-auto mb-10"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            Reels, podcasts, entrevistas e depoimentos sobre cirurgia do joelho e ortopedia
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Desktop Carousel */}
          <div className="hidden md:flex items-center">
            <button
              onClick={prevSlide}
              className="absolute left-0 z-10 p-3 text-gray-400 hover:text-gray-900 transition-colors duration-200 -ml-12"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <div className="overflow-hidden w-full">
              <div
                className="flex gap-8 transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentIndex * 25}%)` }}
              >
                {contents.map((content) => (
                  <div
                    key={content.id}
                    onClick={() => handleCardClick(content.link)}
                    className="min-w-[calc(25%-1.5rem)] bg-white border border-gray-100 hover:border-gray-200 transition-all duration-300 cursor-pointer group"
                  >
                    <div className="aspect-video bg-gray-100 overflow-hidden">
                      <img
                        src={content.image}
                        alt={content.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-light text-gray-900 mb-3 leading-tight">
                        {content.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4 font-light leading-relaxed">
                        {content.description}
                      </p>
                      <button className="text-xs uppercase tracking-wide text-gray-900 hover:text-gray-700 font-light transition-colors">
                        Acessar
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={nextSlide}
              className="absolute right-0 z-10 p-3 text-gray-400 hover:text-gray-900 transition-colors duration-200 -mr-12"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>

          {/* Mobile Carousel */}
          <div className="md:hidden flex items-center">
            <button
              onClick={prevSlide}
              className="absolute left-0 z-10 p-2 text-gray-400 hover:text-gray-900 transition-colors duration-200 -ml-8"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="overflow-hidden w-full px-8">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {contents.map((content) => (
                  <div
                    key={content.id}
                    onClick={() => handleCardClick(content.link)}
                    className="min-w-full px-2"
                  >
                    <div className="bg-white border border-gray-100 hover:border-gray-200 transition-all duration-300 cursor-pointer group">
                      <div className="aspect-video bg-gray-100 overflow-hidden">
                        <img
                          src={content.image}
                          alt={content.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-light text-gray-900 mb-3 leading-tight">
                          {content.title}
                        </h3>
                        <p className="text-sm text-gray-600 mb-4 font-light leading-relaxed">
                          {content.description}
                        </p>
                        <button className="text-xs uppercase tracking-wide text-gray-900 hover:text-gray-700 font-light transition-colors">
                          Acessar
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={nextSlide}
              className="absolute right-0 z-10 p-2 text-gray-400 hover:text-gray-900 transition-colors duration-200 -mr-8"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;


import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ContentSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const contents = [
    {
      id: 1,
      title: "Inovações em Cirurgia do Joelho",
      image: "https://raw.githubusercontent.com/gleisondesign/dr-marco-demange/refs/heads/main/src/foto.jpg",
      link: "https://example.com/artigo1"
    },
    {
      id: 2,
      title: "Recuperação Pós-Operatória",
      image: "https://raw.githubusercontent.com/gleisondesign/dr-marco-demange/refs/heads/main/src/foto.jpg",
      link: "https://example.com/artigo2"
    },
    {
      id: 3,
      title: "Tecnologia Robótica em Ortopedia",
      image: "https://raw.githubusercontent.com/gleisondesign/dr-marco-demange/refs/heads/main/src/foto.jpg",
      link: "https://example.com/artigo3"
    },
    {
      id: 4,
      title: "Preservação Articular Avançada",
      image: "https://raw.githubusercontent.com/gleisondesign/dr-marco-demange/refs/heads/main/src/foto.jpg",
      link: "https://example.com/artigo4"
    },
    {
      id: 5,
      title: "Artroscopia do Joelho",
      image: "https://raw.githubusercontent.com/gleisondesign/dr-marco-demange/refs/heads/main/src/foto.jpg",
      link: "https://example.com/artigo5"
    },
    {
      id: 6,
      title: "Lesões Esportivas",
      image: "https://raw.githubusercontent.com/gleisondesign/dr-marco-demange/refs/heads/main/src/foto.jpg",
      link: "https://example.com/artigo6"
    },
    {
      id: 7,
      title: "Próteses de Joelho",
      image: "https://raw.githubusercontent.com/gleisondesign/dr-marco-demange/refs/heads/main/src/foto.jpg",
      link: "https://example.com/artigo7"
    },
    {
      id: 8,
      title: "Medicina Regenerativa",
      image: "https://raw.githubusercontent.com/gleisondesign/dr-marco-demange/refs/heads/main/src/foto.jpg",
      link: "https://example.com/artigo8"
    },
    {
      id: 9,
      title: "Diagnóstico por Imagem",
      image: "https://raw.githubusercontent.com/gleisondesign/dr-marco-demange/refs/heads/main/src/foto.jpg",
      link: "https://example.com/artigo9"
    },
    {
      id: 10,
      title: "Fisioterapia Especializada",
      image: "https://raw.githubusercontent.com/gleisondesign/dr-marco-demange/refs/heads/main/src/foto.jpg",
      link: "https://example.com/artigo10"
    },
    {
      id: 11,
      title: "Cirurgia Minimamente Invasiva",
      image: "https://raw.githubusercontent.com/gleisondesign/dr-marco-demange/refs/heads/main/src/foto.jpg",
      link: "https://example.com/artigo11"
    },
    {
      id: 12,
      title: "Cuidados Pós-Cirúrgicos",
      image: "https://raw.githubusercontent.com/gleisondesign/dr-marco-demange/refs/heads/main/src/foto.jpg",
      link: "https://example.com/artigo12"
    }
  ];

  const nextSlide = () => {
    const maxIndex = window.innerWidth >= 768 ? contents.length - 4 : contents.length - 1;
    setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    const maxIndex = window.innerWidth >= 768 ? contents.length - 4 : contents.length - 1;
    setCurrentIndex(prev => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleCardClick = (link: string) => {
    window.open(link, '_blank');
  };

  return (
    <section id="conteudos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Conteúdos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Artigos, vídeos e conteúdos educativos sobre cirurgia do joelho e ortopedia
          </p>
        </div>

        <div className="relative">
          {/* Desktop Carousel */}
          <div className="hidden md:flex items-center justify-center">
            <button
              onClick={prevSlide}
              className="absolute left-0 z-10 p-3 rounded-full bg-white shadow-lg hover:shadow-xl text-blue-600 hover:text-blue-700 transition-all duration-200 border border-gray-200"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="overflow-hidden px-16">
              <div
                className="flex gap-6 transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 25}%)` }}
              >
                {contents.map((content) => (
                  <div
                    key={content.id}
                    onClick={() => handleCardClick(content.link)}
                    className="min-w-[calc(25%-1.125rem)] bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer border border-gray-100"
                  >
                    <div className="aspect-video bg-gray-200 rounded-t-2xl overflow-hidden">
                      <img
                        src={content.image}
                        alt={content.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">
                        {content.title}
                      </h3>
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                        Acessar
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={nextSlide}
              className="absolute right-0 z-10 p-3 rounded-full bg-white shadow-lg hover:shadow-xl text-blue-600 hover:text-blue-700 transition-all duration-200 border border-gray-200"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Carousel */}
          <div className="md:hidden flex items-center justify-center">
            <button
              onClick={prevSlide}
              className="absolute left-4 z-10 p-3 rounded-full bg-white shadow-lg hover:shadow-xl text-blue-600 hover:text-blue-700 transition-all duration-200 border border-gray-200"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="overflow-hidden px-16">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {contents.map((content) => (
                  <div
                    key={content.id}
                    onClick={() => handleCardClick(content.link)}
                    className="min-w-full px-2"
                  >
                    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer border border-gray-100">
                      <div className="aspect-video bg-gray-200 rounded-t-2xl overflow-hidden">
                        <img
                          src={content.image}
                          alt={content.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">
                          {content.title}
                        </h3>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
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
              className="absolute right-4 z-10 p-3 rounded-full bg-white shadow-lg hover:shadow-xl text-blue-600 hover:text-blue-700 transition-all duration-200 border border-gray-200"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;

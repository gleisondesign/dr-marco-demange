
import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Maria S.',
      text: 'Dr. Marco Demange mudou minha vida. Após anos sofrendo com dores no joelho, a cirurgia robótica que ele realizou me devolveu a mobilidade. Profissional excepcional e muito humano.',
      rating: 5
    },
    {
      name: 'Carlos R.',
      text: 'Excelente médico! A precisão da cirurgia robótica superou todas as minhas expectativas. Recuperação rápida e resultado perfeito. Recomendo sem hesitar.',
      rating: 5
    },
    {
      name: 'Ana L.',
      text: 'Profissional de altíssimo nível. Dr. Marco explicou todo o procedimento com clareza e cuidou de mim com muita atenção. Hoje posso voltar a praticar esportes sem dor.',
      rating: 5
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="depoimentos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Depoimentos
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Veja o que nossos pacientes dizem sobre os tratamentos e resultados
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <Quote className="w-8 h-8 text-blue-600 mr-3" />
                <div className="flex space-x-1">
                  {renderStars(testimonial.rating)}
                </div>
              </div>
              
              <p className="text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>
              
              <div className="border-t border-gray-200 pt-4">
                <p className="font-semibold text-gray-900">
                  {testimonial.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;


import React from 'react';
import { GraduationCap, Award, BookOpen, Users } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: 'Pós-doutorado em Harvard e HSS – EUA',
      description: 'Formação internacional de excelência'
    },
    {
      icon: Users,
      title: 'Chefe do Grupo de Joelho na USP',
      description: 'Liderança em ensino e pesquisa'
    },
    {
      icon: BookOpen,
      title: 'Mais de 60 publicações científicas',
      description: 'Contribuição para o avanço da medicina'
    },
    {
      icon: Award,
      title: 'Membro SBOT, SBCJ, ICRS, AAOS',
      description: 'Reconhecimento em sociedades médicas'
    }
  ];

  return (
    <section id="sobre" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Sobre o Médico
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-10 rounded-full"></div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-10 md:p-16 mb-16">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center">
              Dr. Marco Demange é especialista em cirurgia do joelho, graduado pela Unicamp, 
              professor da USP e pós-doutorado por Harvard e pelo Hospital for Special Surgery (EUA). 
              Atua com foco em cirurgia robótica e preservação articular, sendo referência nacional 
              e internacional.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {highlights.map((highlight, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start space-x-6">
                  <div className="bg-blue-100 p-4 rounded-xl">
                    <highlight.icon className="w-7 h-7 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3 text-lg">
                      {highlight.title}
                    </h3>
                    <p className="text-gray-600">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

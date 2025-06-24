
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
    <section id="sobre" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Sobre o Médico
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Dr. Marco Demange é especialista em cirurgia do joelho, graduado pela Unicamp, 
              professor da USP e pós-doutorado por Harvard e pelo Hospital for Special Surgery (EUA). 
              Atua com foco em cirurgia robótica e preservação articular, sendo referência nacional 
              e internacional.
            </p>
            
            <div className="text-center">
              <a 
                href="http://lattes.cnpq.br" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
              >
                Ver Currículo Lattes
                <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {highlights.map((highlight, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <highlight.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
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

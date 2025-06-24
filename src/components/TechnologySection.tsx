
import React from 'react';
import { Cpu, Zap, Target, TrendingUp } from 'lucide-react';

const TechnologySection = () => {
  const features = [
    {
      icon: Target,
      title: 'Precisão Cirúrgica',
      description: 'Tecnologia robótica que oferece precisão milimétrica em cada procedimento'
    },
    {
      icon: Zap,
      title: 'Recuperação Rápida',
      description: 'Técnicas minimamente invasivas que reduzem o tempo de recuperação'
    },
    {
      icon: TrendingUp,
      title: 'Futuro da Medicina',
      description: 'Abordagens regenerativas e tecnologias de ponta em constante evolução'
    }
  ];

  return (
    <section id="tecnologia" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Tecnologia Avançada
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Utilizamos as mais modernas tecnologias em cirurgia robótica e técnicas minimamente invasivas
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-12">
            <div className="text-center mb-8">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Cpu className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Cirurgia Robótica
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                A cirurgia robótica representa o futuro da medicina ortopédica. Com esta tecnologia 
                de ponta, conseguimos realizar procedimentos com precisão milimétrica, reduzindo 
                significativamente o tempo de recuperação e melhorando os resultados para nossos pacientes.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h4>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Explorando também abordagens regenerativas e tecnologias emergentes
            </p>
            <a 
              href="https://regenerativa.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
            >
              Saiba mais sobre medicina regenerativa
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;

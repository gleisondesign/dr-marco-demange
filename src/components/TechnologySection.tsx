
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
    <section id="tecnologia" className="py-24 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Tecnologia Avançada
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-10 rounded-full"></div>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Utilizamos as mais modernas tecnologias em cirurgia robótica e técnicas minimamente invasivas
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-10 md:p-16 mb-16">
            <div className="text-center mb-8">
              <div className="bg-blue-100 w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-8">
                <Cpu className="w-12 h-12 text-blue-600" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Cirurgia Robótica
              </h3>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                A cirurgia robótica representa o futuro da medicina ortopédica. Com esta tecnologia 
                de ponta, conseguimos realizar procedimentos com precisão milimétrica, reduzindo 
                significativamente o tempo de recuperação e melhorando os resultados para nossos pacientes.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="bg-blue-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-10 h-10 text-blue-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;

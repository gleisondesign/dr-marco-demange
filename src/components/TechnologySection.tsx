
import React from 'react';
import { Bot, Target, Timer, Stethoscope } from 'lucide-react';

const TechnologySection = () => {
  const technologies = [
    {
      icon: <Bot className="w-12 h-12 text-blue-600" />,
      title: "Cirurgia Robótica",
      description: "A cirurgia robótica representa o futuro da medicina ortopédica. Com esta tecnologia de ponta, conseguimos realizar procedimentos com precisão milimétrica, reduzindo significativamente o tempo de recuperação e melhorando os resultados."
    },
    {
      icon: <Target className="w-12 h-12 text-blue-600" />,
      title: "Precisão Cirúrgica",
      description: "Nossa abordagem utiliza as mais avançadas técnicas de navegação e planejamento pré-operatório. Isso nos permite alcançar níveis excepcionais de precisão, garantindo os melhores resultados possíveis para cada paciente."
    },
    {
      icon: <Timer className="w-12 h-12 text-blue-600" />,
      title: "Recuperação Rápida",
      description: "Através de técnicas minimamente invasivas e protocolos de recuperação acelerada, nossos pacientes experimentam menos dor pós-operatória e retornam às suas atividades normais de forma mais rápida e segura."
    },
    {
      icon: <Stethoscope className="w-12 h-12 text-blue-600" />,
      title: "Futuro da Medicina",
      description: "Estamos constantemente inovando e incorporando as mais recentes descobertas científicas em nossa prática. Nosso compromisso é oferecer aos pacientes acesso às tecnologias mais avançadas disponíveis na medicina ortopédica."
    }
  ];

  return (
    <section id="tecnologia" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tecnologia Avançada
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Utilizamos as mais modernas tecnologias para proporcionar tratamentos de excelência
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="flex justify-center mb-6">
                {tech.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                {tech.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {tech.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;

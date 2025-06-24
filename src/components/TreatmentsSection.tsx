
import React from 'react';

const TreatmentsSection = () => {
  const treatments = [
    {
      title: 'Artrose do Joelho',
      description: 'Desgaste da cartilagem que causa dor e limitação. Tratamento clínico ou cirúrgico, conforme o grau da lesão.'
    },
    {
      title: 'Lesões Ligamentares',
      description: 'Como LCA, que afetam a estabilidade. Tratamento moderno com foco no retorno funcional.'
    },
    {
      title: 'Prótese de Joelho',
      description: 'Indicado em artrose avançada. Restaura mobilidade e alivia a dor com alta precisão.'
    },
    {
      title: 'Cirurgia Robótica',
      description: 'Técnica de ponta para colocação de prótese com máxima precisão e recuperação rápida.'
    },
    {
      title: 'Técnicas de Preservação',
      description: 'Alternativas à prótese como realinhamento, transplante de cartilagem e outras técnicas biológicas.'
    },
    {
      title: 'Condromalácia Patelar',
      description: 'Desgaste da cartilagem atrás da patela. Tratamento clínico e/ou cirúrgico com foco na função e dor.'
    }
  ];

  return (
    <section id="tratamentos" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Tratamentos
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-10 rounded-full"></div>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Soluções avançadas e personalizadas para cada tipo de lesão ou problema no joelho
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {treatments.map((treatment, index) => (
            <div key={index} className="bg-gray-50 rounded-3xl p-8 hover:shadow-xl hover:bg-white transition-all duration-300 hover:-translate-y-2 group">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                {treatment.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {treatment.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TreatmentsSection;

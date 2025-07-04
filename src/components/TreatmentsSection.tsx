import React from 'react';

const TreatmentsSection = () => {
  const treatments = [
    {
      title: 'Artrose',
      description: 'Desgaste progressivo da cartilagem articular que causa dor, rigidez e limitação funcional. Oferecemos tratamentos desde conservadores até cirúrgicos avançados, sempre priorizando a preservação da função e alívio da dor.',
      featured: false
    },
    {
      title: 'Lesões Ligamentares',
      description: 'Lesões do ligamento cruzado anterior (LCA) e outros ligamentos do joelho que comprometem a estabilidade articular. Utilizamos técnicas modernas de reconstrução para restaurar a função e permitir retorno seguro às atividades.',
      featured: false
    },
    {
      title: 'Preservação Articular',
      description: 'Tratamentos focados na preservação da cartilagem e menisco através de técnicas biológicas, transplantes e procedimentos minimamente invasivos que adiam ou evitam a necessidade de próteses.',
      featured: false
    }
  ];

  const featuredTreatment = {
    title: 'Prótese Robótica',
    description: 'Revolucionária técnica de implante de prótese de joelho assistida por robô, oferecendo precisão milimétrica no posicionamento dos componentes. Esta tecnologia de ponta proporciona melhor alinhamento, maior durabilidade da prótese, recuperação mais rápida e resultados funcionais superiores. O sistema robótico permite planejamento pré-operatório personalizado e execução cirúrgica com precisão incomparável.'
  };

  return (
    <section id="cirurgia-joelho" className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Cirurgia de Joelho
          </h2>
          <div className="w-24 h-px bg-gray-900 mx-auto mb-10"></div>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            Soluções avançadas e personalizadas para cada tipo de lesão ou problema no joelho
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Featured Treatment - Prótese Robótica */}
          <div className="mb-16">
            <div className="bg-gray-50 p-12 lg:p-16">
              <div className="max-w-4xl mx-auto text-center">
                <h3 className="text-3xl md:text-4xl font-light text-gray-900 mb-8">
                  {featuredTreatment.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed font-light">
                  {featuredTreatment.description}
                </p>
              </div>
            </div>
          </div>

          {/* Other Treatments */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {treatments.map((treatment, index) => (
              <div key={index} className="text-center">
                <h3 className="text-xl font-light text-gray-900 mb-6">
                  {treatment.title}
                </h3>
                <p className="text-gray-600 leading-relaxed font-light">
                  {treatment.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreatmentsSection;

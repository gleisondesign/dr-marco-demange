
import React, { useState } from 'react';
import { MapPin, MessageCircle, Mail, Building } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulário enviado:', formData);
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    setFormData({ name: '', email: '', message: '' });
  };

  const hospitals = [
    'Hospital Vila Nova Star',
    'Hospital São Luiz',
    'Hospital Albert Einstein',
    'Hospital Moriah'
  ];

  return (
    <section id="contato" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Contato
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-10 rounded-full"></div>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Entre em contato conosco para agendar sua consulta ou esclarecer dúvidas
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 mb-16">
            {/* Informações de Contato */}
            <div className="space-y-8">
              <div className="bg-white rounded-3xl shadow-xl p-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">
                  Informações de Contato
                </h3>
                
                <div className="space-y-8">
                  <div className="flex items-start space-x-6">
                    <div className="bg-blue-100 p-3 rounded-xl">
                      <MapPin className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 text-lg">Endereço</h4>
                      <p className="text-gray-600 leading-relaxed">
                        Rua Mato Grosso, 306 – 12º andar<br />
                        Higienópolis – São Paulo – SP<br />
                        CEP 01239‑040
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6">
                    <div className="bg-blue-100 p-3 rounded-xl">
                      <MessageCircle className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 text-lg">WhatsApp</h4>
                      <p className="text-gray-600">(11) 95055-5000</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6">
                    <div className="bg-blue-100 p-3 rounded-xl">
                      <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 text-lg">E-mail</h4>
                      <a 
                        href="mailto:contato@joelho.com"
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        contato@joelho.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hospitais */}
              <div className="bg-white rounded-3xl shadow-xl p-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                  <div className="bg-blue-100 p-3 rounded-xl mr-4">
                    <Building className="w-6 h-6 text-blue-600" />
                  </div>
                  Hospitais Credenciados
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  {hospitals.map((hospital, index) => (
                    <div key={index} className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                      <p className="text-gray-700 font-medium">{hospital}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Formulário */}
            <div className="bg-white rounded-3xl shadow-xl p-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Envie sua Mensagem
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-3">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-3">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-3">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Descreva sua dúvida ou necessidade..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 px-8 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
                >
                  Enviar
                </button>
              </form>
            </div>
          </div>

          {/* Google Maps */}
          <div className="bg-white rounded-3xl shadow-xl p-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Localização
            </h3>
            <div className="bg-gray-100 rounded-2xl h-80 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 text-lg">
                  Rua Mato Grosso, 306 – 12º andar<br />
                  Higienópolis – São Paulo – SP
                </p>
                <p className="text-gray-500 text-sm mt-2">
                  [Mapa interativo será integrado]
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

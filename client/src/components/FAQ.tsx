import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'ingressos' | 'ingressos-solidario' | 'estacionamento' | 'seguranca';
}

const faqItems: FAQItem[] = [
  {
    id: 'ingresso-1',
    category: 'ingressos',
    question: 'Como comprar ingressos?',
    answer: 'Os ingressos para o Festival Cristófoli 2026 estarão disponíveis em breve através de nossa plataforma online. Fique atento às nossas redes sociais para o anúncio oficial de abertura das vendas.'
  },
  {
    id: 'ingresso-2',
    category: 'ingressos',
    question: 'Qual é o valor do ingresso?',
    answer: 'Os valores dos ingressos serão divulgados em breve. Acompanhe nossas redes sociais para não perder essa informação importante!'
  },
  {
    id: 'ingresso-3',
    category: 'ingressos',
    question: 'Há desconto para menores de idade?',
    answer: 'Sim! Menores de 18 anos acompanhados de um responsável legal têm direito a meia-entrada. Será necessário apresentar documento de identidade e do responsável no acesso ao evento.'
  },
  {
    id: 'ingresso-4',
    category: 'ingressos',
    question: 'Posso devolver o ingresso?',
    answer: 'A política de reembolso será informada no momento da compra. Recomendamos ler atentamente os termos e condições antes de adquirir seu ingresso.'
  },
  {
    id: 'solidario-1',
    category: 'ingressos-solidario',
    question: 'O que é um ingresso solidário?',
    answer: 'O ingresso solidário é uma iniciativa social do Festival Cristófoli 2026 que permite que pessoas em situação de vulnerabilidade social participem do evento. Uma parte da renda é revertida para projetos sociais da comunidade.'
  },
  {
    id: 'solidario-2',
    category: 'ingressos-solidario',
    question: 'Qual é o valor do ingresso solidário?',
    answer: 'O ingresso solidário tem um valor reduzido em relação ao ingresso regular, tornando o evento mais acessível. Os valores específicos serão divulgados em breve nas nossas redes sociais.'
  },
  {
    id: 'solidario-3',
    category: 'ingressos-solidario',
    question: 'Como solicitar um ingresso solidário?',
    answer: 'Para solicitar um ingresso solidário, você precisará preencher um formulário de inscrição e comprovar sua situação através de documentos específicos. As instruções detalhadas estarão disponíveis no momento da abertura das vendas.'
  },
  {
    id: 'solidario-4',
    category: 'ingressos-solidario',
    question: 'Quantos ingressos solidários estão disponíveis?',
    answer: 'Temos um número limitado de ingressos solidários disponíveis. Recomendamos fazer sua inscrição assim que as vendas forem abertas para garantir sua participação no festival.'
  },
  {
    id: 'estacionamento-1',
    category: 'estacionamento',
    question: 'Há estacionamento disponível no local?',
    answer: 'Sim! O Mourão Garden possui estacionamento amplo e gratuito para os visitantes. Recomendamos chegar com antecedência para garantir uma vaga próxima à entrada.'
  },
  {
    id: 'estacionamento-2',
    category: 'estacionamento',
    question: 'O estacionamento é seguro?',
    answer: 'Sim, o estacionamento é monitorado por câmeras de segurança 24 horas. Recomendamos não deixar objetos de valor visíveis no veículo.'
  },
  {
    id: 'estacionamento-3',
    category: 'estacionamento',
    question: 'Há transporte público próximo ao local?',
    answer: 'O Mourão Garden está localizado em Campo Mourão, PR. Recomendamos verificar as opções de transporte público local ou organizar caronas com amigos para melhor comodidade.'
  },
  {
    id: 'seguranca-1',
    category: 'seguranca',
    question: 'Quais são as medidas de segurança do evento?',
    answer: 'O Festival Cristófoli 2026 conta com equipe de segurança profissional, monitoramento por câmeras, primeiros socorros disponíveis e policiamento no local para garantir a segurança de todos os visitantes.'
  },
  {
    id: 'seguranca-2',
    category: 'seguranca',
    question: 'Posso levar mochilas ou bolsas grandes?',
    answer: 'Sim, você pode levar mochilas e bolsas. No entanto, recomendamos não levar objetos de valor e manter seus pertences sempre próximos. Haverá revista de segurança na entrada do evento.'
  },
  {
    id: 'seguranca-3',
    category: 'seguranca',
    question: 'Há atendimento médico disponível?',
    answer: 'Sim! Contamos com equipes de primeiros socorros e ambulâncias posicionadas estrategicamente no local do evento para atender qualquer emergência médica.'
  },
  {
    id: 'seguranca-4',
    category: 'seguranca',
    question: 'Qual é a idade mínima para entrar no evento?',
    answer: 'Menores de 18 anos precisam estar acompanhados de um responsável legal. Recomendamos trazer documentos de identificação para facilitar o acesso.'
  }
];

export default function FAQ() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<'ingressos' | 'ingressos-solidario' | 'estacionamento' | 'seguranca'>('ingressos');

  const filteredItems = faqItems.filter(item => item.category === activeCategory);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-festival-purple mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            PERGUNTAS FREQUENTES
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Encontre respostas para as dúvidas mais comuns sobre o Festival Cristófoli 2026
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {['ingressos', 'ingressos-solidario', 'estacionamento', 'seguranca'].map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category as 'ingressos' | 'ingressos-solidario' | 'estacionamento' | 'seguranca');
                setExpandedId(null);
              }}
              className={`px-6 py-3 rounded-lg font-bold transition-all ${
                activeCategory === category
                  ? 'bg-festival-purple text-white shadow-lg'
                  : 'bg-gray-100 text-festival-purple hover:bg-gray-200'
              }`}
            >
              {category === 'ingressos' && '🎫 INGRESSOS'}
              {category === 'ingressos-solidario' && '❤️ SOLIDÁRIO'}
              {category === 'estacionamento' && '🚗 ESTACIONAMENTO'}
              {category === 'seguranca' && '🛡️ SEGURANÇA'}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto space-y-4">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="border-2 border-festival-purple rounded-lg overflow-hidden transition-all"
            >
              <button
                onClick={() => toggleExpand(item.id)}
                className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-bold text-festival-purple text-left">
                  {item.question}
                </h3>
                <ChevronDown
                  className={`w-6 h-6 text-festival-pink transition-transform flex-shrink-0 ml-4 ${
                    expandedId === item.id ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {expandedId === item.id && (
                <div className="px-6 py-4 bg-gray-50 border-t-2 border-festival-purple">
                  <p className="text-gray-700 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-festival-purple to-festival-pink rounded-lg p-8">
          <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            NÃO ENCONTROU SUA DÚVIDA?
          </h3>
          <p className="text-white mb-6">
            Entre em contato conosco através das nossas redes sociais ou envie um email
          </p>
          <a
            href="https://www.instagram.com/festivalcristofoli"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-festival-purple font-bold px-8 py-3 rounded-lg hover:shadow-lg transition-all"
          >
            FALE CONOSCO
          </a>
        </div>
      </div>
    </section>
  );
}

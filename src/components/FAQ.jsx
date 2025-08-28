import React, { useState } from 'react'

const FAQ = () => {
  const [openItems, setOpenItems] = useState(new Set())

  const faqData = [
    {
      id: 1,
      question: 'Quais formas de pagamento vocês aceitam?',
      answer: 'Aceitamos dinheiro, cartão de débito, cartão de crédito (até 12x), PIX e transferência bancária. Para compras acima de R$ 500, oferecemos condições especiais de parcelamento.'
    },
    {
      id: 2,
      question: 'Vocês fazem entrega? Qual é o prazo?',
      answer: 'Sim! Fazemos entrega em toda Camaçari e região metropolitana de Salvador. O prazo varia de 24h a 48h úteis, dependendo da localização e disponibilidade do produto.'
    },
    {
      id: 3,
      question: 'Posso retirar o produto na loja?',
      answer: 'Claro! Nossa loja está localizada na Av. Rio Bandeira, 150, Gleba A, Camaçari-BA. Funcionamos de segunda a sexta das 8h às 17h e sábados das 8h às 12h.'
    },
    {
      id: 4,
      question: 'Vocês oferecem garantia nos produtos?',
      answer: 'Todos os nossos produtos possuem garantia do fabricante. Além disso, oferecemos suporte pós-venda e trocas em caso de defeitos de fabricação.'
    },
    {
      id: 5,
      question: 'Como solicitar um orçamento?',
      answer: 'Você pode solicitar orçamento pelo WhatsApp (71) 98282-6739, por e-mail ou visitando nossa loja. Enviamos orçamentos detalhados em até 24 horas.'
    },
    {
      id: 6,
      question: 'Vocês atendem obras grandes?',
      answer: 'Sim! Atendemos desde pequenos reparos até grandes obras. Oferecemos condições especiais para construtoras e profissionais da área.'
    },
    {
      id: 7,
      question: 'Têm estoque disponível dos produtos?',
      answer: 'Mantemos um estoque amplo dos principais materiais de construção. Para produtos específicos, consulte disponibilidade pelo WhatsApp ou telefone.'
    },
    {
      id: 8,
      question: 'Oferecem desconto para compras em quantidade?',
      answer: 'Sim! Oferecemos descontos progressivos para compras em quantidade. Entre em contato para negociar as melhores condições para sua obra.'
    }
  ]

  const toggleItem = (itemId) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(itemId)) {
      newOpenItems.delete(itemId)
    } else {
      newOpenItems.add(itemId)
    }
    setOpenItems(newOpenItems)
  }

  const handleWhatsApp = () => {
    const phoneNumber = '5571982826739'
    const message = 'Olá! Tenho uma dúvida que não encontrei no FAQ. Podem me ajudar?'
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank')
  }

  return (
    <section className="py-16 px-4 bg-pearl-white">
      <div className="container mx-auto max-w-4xl">
        {/* Título da seção */}
        <h2 className="section-title animate-fadeInUp">
          Perguntas Frequentes
        </h2>
        
        <p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto animate-fadeInUp">
          Tire suas dúvidas sobre nossos produtos, serviços e condições de pagamento.
        </p>

        {/* Lista de FAQs */}
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div 
              key={item.id} 
              className="bg-white rounded-xl shadow-lg overflow-hidden card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-inset"
              >
                <h3 className="text-lg font-semibold text-dark-blue pr-4">
                  {item.question}
                </h3>
                <div className={`flex-shrink-0 transform transition-transform duration-300 ${
                  openItems.has(item.id) ? 'rotate-180' : 'rotate-0'
                }`}>
                  <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openItems.has(item.id) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-6 pb-5">
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-gray-700 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-dark-blue mb-4">
              Não encontrou sua resposta?
            </h3>
            <p className="text-gray-600 mb-6">
              Nossa equipe está pronta para esclarecer todas as suas dúvidas!
            </p>
            <button
              onClick={handleWhatsApp}
              className="btn-gradient inline-flex items-center space-x-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787"/>
              </svg>
              <span>Falar no WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
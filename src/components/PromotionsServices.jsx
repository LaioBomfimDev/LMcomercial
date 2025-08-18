import React from 'react'

const PromotionsServices = () => {
  // Dados das promoções e serviços - SUBSTITUA AS IMAGENS E TEXTOS CONFORME NECESSÁRIO
  const promotions = [
    {
      id: 1,
      image: '/promocao1.png', // Formato 1080x1350 (estilo Instagram)
      title: 'Promoção Cimento Portland',
      description: 'Desconto especial em compras acima de 10 sacos',
      price: 'A partir de R$ 25,90',
      alt: 'Promoção Cimento'
    },
    {
      id: 2,
      image: '/promocao2.png', // Formato 1080x1350 (estilo Instagram)
      title: 'Kit Ferramentas Básicas',
      description: 'Conjunto completo para pequenos reparos',
      price: 'R$ 89,90',
      alt: 'Kit Ferramentas'
    },
    {
      id: 3,
      image: '/promocao3.png', // Formato 1080x1350 (estilo Instagram)
      title: 'Serviço de Entrega',
      description: 'Entrega rápida em toda Camaçari-BA',
      price: 'Consulte condições',
      alt: 'Serviço de Entrega'
    }
  ]

  const handleWhatsApp = (productName) => {
    // Substitua pelo número real da empresa
    const phoneNumber = '557198282673'
    const message = `Olá! Tenho interesse em: ${productName}. Gostaria de mais informações e preços.`
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank')
  }

  return (
    <section id="servicos" className="py-16 px-4 bg-pearl-white">
      <div className="container mx-auto max-w-7xl">
        {/* Título da seção */}
        <h2 className="section-title">
          Nossas Promoções e Serviços
        </h2>
        
        <p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          Confira nossas ofertas especiais e serviços personalizados para sua obra. 
          Qualidade garantida com os melhores preços de Camaçari-BA.
        </p>

        {/* Grid de promoções */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {promotions.map((promo) => (
            <div key={promo.id} className="card group">
              {/* Imagem */}
              <div className="relative overflow-hidden">
                <img
                  src={promo.image}
                  alt={promo.alt}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    // Fallback para quando a imagem não existir
                    e.target.src = `data:image/svg+xml;base64,${btoa(`
                      <svg width="1080" height="1350" xmlns="http://www.w3.org/2000/svg">
                        <rect width="100%" height="100%" fill="#0A2342"/>
                        <text x="50%" y="50%" font-family="Arial" font-size="48" fill="white" text-anchor="middle" dy=".3em">
                          ${promo.title}
                        </text>
                      </svg>
                    `)}`
                  }}
                />
                
                {/* Badge de promoção */}
                <div className="absolute top-4 right-4 bg-dark-red text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Oferta
                </div>
              </div>

              {/* Conteúdo do card */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-dark-blue mb-3">
                  {promo.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {promo.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-dark-red">
                    {promo.price}
                  </span>
                </div>
                
                <button
                  onClick={() => handleWhatsApp(promo.title)}
                  className="w-full btn-primary flex items-center justify-center space-x-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.382"/>
                  </svg>
                  <span>WhatsApp</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action adicional */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Não encontrou o que procura? Entre em contato conosco!
          </p>
          <button
            onClick={() => handleWhatsApp('Consulta geral sobre produtos e serviços')}
            className="btn-secondary text-xl px-8 py-4"
          >
            Falar com Consultor
          </button>
        </div>
      </div>
    </section>
  )
}

export default PromotionsServices
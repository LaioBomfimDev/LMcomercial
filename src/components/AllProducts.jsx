import React, { useState } from 'react'

const AllProducts = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsPerPage = 3 // Número de produtos visíveis por vez

  const products = [
    { id: 1, name: 'Argamassa AC1 Brasil', image: '/argamassa-ac1-topo-produto-brasil.webp', category: 'Argamassas' },
    { id: 2, name: 'Argamassa AC2', image: '/argamassa-ac2-topo-produto.webp', category: 'Argamassas' },
    { id: 3, name: 'Argamassa AC3 Grandes Formatos', image: '/topo-argamassa-ac-3-grandes-formatos.webp', category: 'Argamassas' },
    { id: 4, name: 'Carrinho de Mão Extraforte 65L Tramontina', image: '/Carrinho-de-Mao-Extraforte-Cinza-65L-Tramontina.webp', category: 'Ferramentas' },
    { id: 5, name: 'Carrinho de Mão', image: '/carrinho de mão.webp', category: 'Ferramentas' },
    { id: 6, name: 'Laje Treliçada com EPS', image: '/laje-trelicada-com-eps.webp', category: 'Estruturas' },
    { id: 7, name: 'Tubo de Esgoto', image: '/tuboesgoto.webp', category: 'Hidráulica' },
    { id: 8, name: 'Cimento Poty', image: '/Cimento-Poty.webp', category: 'Cimentos' },
    { id: 9, name: 'Telha Brasilit', image: '/telha brasilit.png', category: 'Telhas' },
    { id: 10, name: 'Vedacit Impermeabilizante', image: '/vedacit.webp', category: 'Impermeabilizantes' }
  ]

  const handleWhatsApp = (productName) => {
    const phoneNumber = '557198282673'
    const message = `Olá! Gostaria de solicitar um orçamento para: ${productName}. Aguardo retorno!`
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank')
  }

  const maxIndex = Math.max(0, products.length - itemsPerPage)

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0))
  }

  const goToSlide = (index) => {
    setCurrentIndex(Math.min(index, maxIndex))
  }

  return (
    <section id="produtos" className="py-16 px-4 bg-pearl-white">
      <div className="container mx-auto max-w-7xl">
        {/* Título da seção */}
        <h2 className="section-title">
          Todos os Nossos Produtos
        </h2>
        
        <p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          Explore nossa linha completa de materiais de construção. 
          Temos tudo que você precisa para sua obra com a qualidade que você merece.
        </p>

        {/* Container do slider */}
        <div className="relative">
          {/* Produtos */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
            >
              {products.map((product) => (
                <div 
                  key={product.id} 
                  className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4"
                >
                  <div className="card-hover group h-full bg-white rounded-xl shadow-lg overflow-hidden">
                    {/* Imagem do produto */}
                    <div className="relative overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-all duration-500 group-hover:brightness-110"
                        onError={(e) => {
                          e.target.src = `data:image/svg+xml;base64,${btoa(`
                            <svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
                              <rect width="100%" height="100%" fill="#0A2342"/>
                              <text x="50%" y="40%" font-family="Arial" font-size="16" fill="white" text-anchor="middle" dy=".3em">
                                ${product.name}
                              </text>
                              <text x="50%" y="60%" font-family="Arial" font-size="12" fill="white" text-anchor="middle" dy=".3em">
                                ${product.category}
                              </text>
                            </svg>
                          `)}`
                        }}
                      />
                      
                      {/* Badge da categoria */}
                      <div className="absolute top-3 left-3 bg-dark-blue text-white px-3 py-1 rounded-full text-sm font-medium transform group-hover:scale-110 transition-transform duration-300">
                        {product.category}
                      </div>
                      
                      {/* Overlay hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    {/* Conteúdo do card */}
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold text-dark-blue mb-4 flex-grow">
                        {product.name}
                      </h3>
                      
                      <button
                        onClick={() => handleWhatsApp(product.name)}
                        className="btn-gradient w-full flex items-center justify-center space-x-2 group-hover:animate-pulse"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                        </svg>
                        <span>Solicitar Orçamento</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Botões de navegação */}
          {currentIndex > 0 && (
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white shadow-lg hover:shadow-xl text-dark-blue p-3 rounded-full transition-all duration-300 z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}
          
          {currentIndex < maxIndex && (
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white shadow-lg hover:shadow-xl text-dark-blue p-3 rounded-full transition-all duration-300 z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
        </div>

        {/* Indicadores */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: maxIndex + 1 }, (_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-dark-blue scale-125'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Call to action adicional */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Precisa de um produto específico que não está na lista?
          </p>
          <button
            onClick={() => handleWhatsApp('Consulta sobre produto específico')}
            className="btn-secondary text-xl px-8 py-4"
          >
            Consultar Disponibilidade
          </button>
        </div>
      </div>
    </section>
  )
}

export default AllProducts
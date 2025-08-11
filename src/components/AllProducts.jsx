import React, { useState } from 'react'

const AllProducts = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsPerPage = 3 // Número de produtos visíveis por vez

  // Dados dos produtos - SUBSTITUA AS IMAGENS E NOMES CONFORME NECESSÁRIO
  const products = [
    { id: 1, name: 'Cimento Portland CP-II', image: '/src/assets/images/IMGproduto1.png', category: 'Cimentos' },
    { id: 2, name: 'Tijolo Cerâmico 6 Furos', image: '/src/assets/images/IMGproduto2.png', category: 'Tijolos' },
    { id: 3, name: 'Areia Lavada Fina', image: '/src/assets/images/IMGproduto3.png', category: 'Areias' },
    { id: 4, name: 'Brita Graduada 19mm', image: '/src/assets/images/IMGproduto4.png', category: 'Britas' },
    { id: 5, name: 'Ferro 10mm CA-50', image: '/src/assets/images/IMGproduto5.png', category: 'Ferragens' },
    { id: 6, name: 'Telha Cerâmica Portuguesa', image: '/src/assets/images/IMGproduto6.png', category: 'Telhas' },
    { id: 7, name: 'Tinta Acrílica Branca 18L', image: '/src/assets/images/IMGproduto7.png', category: 'Tintas' },
    { id: 8, name: 'Piso Cerâmico 45x45', image: '/src/assets/images/IMGproduto8.png', category: 'Pisos' },
    { id: 9, name: 'Porta de Madeira 80x210', image: '/src/assets/images/IMGproduto9.png', category: 'Portas' },
    { id: 10, name: 'Kit Ferramentas Básicas', image: '/src/assets/images/IMGproduto10.png', category: 'Ferramentas' }
  ]

  const handleWhatsApp = (productName) => {
    // Substitua pelo número real da empresa
    const phoneNumber = '5571999999999'
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
                  <div className="card group h-full">
                    {/* Imagem do produto */}
                    <div className="relative overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          // Fallback para quando a imagem não existir
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
                      <div className="absolute top-3 left-3 bg-dark-blue text-white px-3 py-1 rounded-full text-sm font-medium">
                        {product.category}
                      </div>
                    </div>

                    {/* Conteúdo do card */}
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold text-dark-blue mb-4 flex-grow">
                        {product.name}
                      </h3>
                      
                      <button
                        onClick={() => handleWhatsApp(product.name)}
                        className="btn-primary w-full flex items-center justify-center space-x-2"
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
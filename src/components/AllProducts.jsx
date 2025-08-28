import React, { useState, useEffect } from 'react'
import { useBreakpoints } from '../hooks/useMediaQuery'

const AllProducts = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [itemsPerPage, setItemsPerPage] = useState(1)

  const { isMobile, isTablet, isDesktop } = useBreakpoints()

  // Atualizar itemsPerPage baseado nos breakpoints
  useEffect(() => {
    if (isDesktop) {
      setItemsPerPage(3) // Desktop: 3 produtos
    } else if (isTablet) {
      setItemsPerPage(2) // Tablet: 2 produtos
    } else {
      setItemsPerPage(1) // Mobile: 1 produto
    }
  }, [isDesktop, isTablet, isMobile])

  // Reset slide quando itemsPerPage muda
  React.useEffect(() => {
    setCurrentSlide(0)
  }, [itemsPerPage])

  const products = [
    { id: 1, name: 'Argamassa AC1 Brasil', image: 'products/argamassa-ac1-topo-produto-brasil.png', category: 'Argamassas' },
    { id: 2, name: 'Argamassa AC2', image: 'products/argamassa-ac2-topo-produto.png', category: 'Argamassas' },
    { id: 3, name: 'Argamassa AC3 Grandes Formatos', image: 'products/topo-argamassa-ac-3-grandes-formatos.png', category: 'Argamassas' },
    { id: 4, name: 'Carrinho de Mão Extraforte 65L Tramontina', image: 'products/Carrinho-de-Mao-Extraforte-Cinza-65L-Tramontina.png', category: 'Ferramentas' },
    { id: 5, name: 'Carrinho de Mão', image: 'products/carrinho-de-mao.png', category: 'Ferramentas' },
    { id: 6, name: 'Laje Treliçada com EPS', image: 'products/laje-trelicada-com-eps.png', category: 'Estruturas' },
    { id: 7, name: 'Tubo de Esgoto', image: 'products/tuboesgoto.png', category: 'Hidráulica' },
    { id: 8, name: 'Cimento Poty', image: 'products/Cimento-Poty.png', category: 'Cimentos' },
    { id: 9, name: 'Telha Brasilit', image: 'products/telha-brasilit.png', category: 'Telhas' },
    { id: 10, name: 'Vedacit Impermeabilizante', image: 'products/vedacit.png', category: 'Impermeabilizantes' }
  ]

  const handleWhatsApp = (productName) => {
    const phoneNumber = '5571982826739'
    const message = `Olá! Gostaria de solicitar um orçamento para: ${productName}. Aguardo retorno!`
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank')
  }

  // Calcular total de slides baseado nos produtos e itens por página
  const totalSlides = Math.ceil(products.length / itemsPerPage)
  const maxSlide = totalSlides - 1

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev <= 0 ? maxSlide : prev - 1))
  }

  const goToSlide = (slideIndex) => {
    setCurrentSlide(Math.min(Math.max(slideIndex, 0), maxSlide))
  }

  // Função para obter produtos do slide atual
  const getCurrentSlideProducts = () => {
    const startIndex = currentSlide * itemsPerPage
    return products.slice(startIndex, startIndex + itemsPerPage)
  }

  return (
    <section id="produtos" className="py-16 px-4 bg-pearl-white">
      <div className="container mx-auto max-w-7xl">
        {/* Título da seção */}
        <h2 className="section-title">
          Alguns de Nossos Produtos
        </h2>
        
        <p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          Explore nossa linha completa de materiais de construção. 
          Temos tudo que você precisa para sua obra com a qualidade que você merece.
        </p>

        {/* CONTAINER MÃE DO CARROSSEL */}
        <div className="relative">
          {/* Container com overflow hidden para esconder slides fora da view */}
          <div className="overflow-hidden">
            {/* CONTAINER DOS SLIDES - se move horizontalmente */}
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {/* CADA SLIDE É UM CONTAINER COMPLETO */}
              {Array.from({ length: totalSlides }, (_, slideIndex) => {
                const slideProducts = products.slice(
                  slideIndex * itemsPerPage,
                  slideIndex * itemsPerPage + itemsPerPage
                )
                
                return (
                  <div 
                    key={slideIndex}
                    className="w-full flex-shrink-0 flex gap-4 px-2"
                  >
                    {/* CONTAINER INDIVIDUAL PARA CADA PRODUTO */}
                    {slideProducts.map((product) => (
                      <div 
                        key={product.id} 
                        className={`flex-1 ${
                          itemsPerPage === 1 ? 'max-w-full' : 
                          itemsPerPage === 2 ? 'max-w-[calc(50%-0.5rem)]' : 
                          'max-w-[calc(33.333%-0.75rem)]'
                        }`}
                      >
                        <div className="card-hover group h-full bg-white rounded-xl shadow-lg overflow-hidden">
                          {/* Imagem do produto */}
                          <div className="relative overflow-hidden">
                            <img
                              src={`/src/assets/images/${product.image}`}
                              alt={product.name}
                              loading="lazy"
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
                )
              })}
            </div>
          </div>

          {/* Botões de navegação - sempre visíveis se houver mais de 1 slide */}
          {totalSlides > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl text-dark-blue p-2 sm:p-3 rounded-full transition-all duration-300 z-10 hover:bg-white"
                aria-label="Slide anterior"
              >
                <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl text-dark-blue p-2 sm:p-3 rounded-full transition-all duration-300 z-10 hover:bg-white"
                aria-label="Próximo slide"
              >
                <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}
        </div>

        {/* Indicadores - só mostrar se houver mais de 1 slide */}
        {totalSlides > 1 && (
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalSlides }, (_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-dark-blue scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>
        )}

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
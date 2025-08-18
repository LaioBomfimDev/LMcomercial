import React, { useState, useEffect } from 'react'

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Slides com as novas imagens (removidos slides repetidos)
  const slides = [
    {
      id: 1,
      image: '/hero1.png',
      title: 'LM Comercial - Sua Obra Nossa Prioridade',
      description: 'Materiais de construção de qualidade com os melhores preços de Camaçari-BA',
      alt: 'LM Comercial - Materiais de Construção'
    },
    {
      id: 2,
      image: '/hero2.png',
      title: 'Atendimento Especializado e Entrega Rápida',
      description: 'Equipe qualificada para orientar sua compra e entrega no prazo certo',
      alt: 'Atendimento e Entrega LM Comercial'
    }
  ]

  const handleWhatsApp = (productName) => {
    // Substitua pelo número real da empresa
    const phoneNumber = '557198282673'
    const message = `Olá! Tenho interesse no produto: ${productName}. Gostaria de mais informações e preços.`
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank')
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  // Auto-play do slider
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000) // Muda a cada 5 segundos
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="inicio" className="relative w-full h-[500px] md:h-[600px] mt-20 overflow-hidden">
      {/* Slides */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Imagem de fundo */}
            <div className="relative w-full h-full">
              <img
                src={slide.image}
                alt={slide.alt}
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback para quando a imagem não existir
                  e.target.src = `data:image/svg+xml;base64,${btoa(`
                    <svg width="1200" height="600" xmlns="http://www.w3.org/2000/svg">
                      <rect width="100%" height="100%" fill="#0A2342"/>
                      <text x="50%" y="50%" font-family="Arial" font-size="24" fill="white" text-anchor="middle" dy=".3em">
                        ${slide.title}
                      </text>
                    </svg>
                  `)}`
                }}
              />
              
              {/* Overlay escuro para legibilidade */}
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              
              {/* Conteúdo do slide */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white px-4 max-w-4xl">
                  <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                    {slide.title}
                  </h2>
                  <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                    {slide.description}
                  </p>
                  <button
                    onClick={() => handleWhatsApp(slide.title)}
                    className="bg-dark-blue text-white px-8 py-4 rounded-lg font-semibold text-xl hover:bg-opacity-90 transition-all duration-300 shadow-lg transform hover:scale-105"
                  >
                    Chamar no WhatsApp
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Botões de navegação */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-dark-blue p-3 rounded-full shadow-lg transition-all duration-300"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-dark-blue p-3 rounded-full shadow-lg transition-all duration-300"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white scale-125'
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
          />
        ))}
      </div>
    </section>
  )
}

export default HeroSlider
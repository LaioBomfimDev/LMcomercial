import React, { useState, useEffect } from 'react'

const WhyChooseUs = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [imageLoaded, setImageLoaded] = useState(false)

  // Array com as novas imagens do slider
  const slides = [
    {
      id: 1,
      src: 'heroes/pass1.png',
      alt: 'Qualidade e Confiança'
    },
    {
      id: 2,
      src: 'heroes/pass2.png',
      alt: 'Materiais de Qualidade'
    },
    {
      id: 3,
      src: 'heroes/pass3.png',
      alt: 'Atendimento Especializado'
    }
  ]

  // Função para avançar automaticamente os slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
      setImageLoaded(false) // Reset loading state for smooth transition
    }, 6000) // 6 segundos

    return () => clearInterval(interval)
  }, [])

  // Funções de navegação manual
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setImageLoaded(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setImageLoaded(false)
  }

  const handleConsultorWhatsApp = () => {
    const phoneNumber = '5571982826739'
    const message = 'Olá! Gostaria de falar com um consultor especializado da LM Comercial.'
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank')
  }

  const benefits = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Qualidade Garantida',
      description: 'Produtos de marcas reconhecidas no mercado'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      title: 'Preços Competitivos',
      description: 'Os melhores preços de Camaçari-BA'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Entrega Rápida',
      description: 'Entregamos em toda Camaçari-BA com agilidade'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Atendimento Especializado',
      description: 'Equipe experiente para orientar sua compra'
    }
  ]

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Lado esquerdo - Slider de Imagens */}
          <div className="order-2 lg:order-1">
            <div className="relative overflow-hidden">
              {/* Container do slider */}
              <div className="relative w-full h-96 lg:h-[500px] rounded-2xl shadow-2xl overflow-hidden">
                {/* Imagem atual */}
                <img
                  src={`/src/assets/images/${slides[currentSlide].src}`}
                  alt={slides[currentSlide].alt}
                  className={`w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                    imageLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                  onLoad={() => setImageLoaded(true)}
                />
                
                {/* Loading skeleton */}
                {!imageLoaded && (
                  <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                    <div className="text-gray-400 text-lg">Carregando...</div>
                  </div>
                )}
                
                {/* Botões de navegação com animações */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-500 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-dark-blue animate-fade-in-left opacity-0 animation-delay-300"
                  style={{
                    animation: 'fadeInLeft 0.8s ease-out 0.5s forwards'
                  }}
                  aria-label="Slide anterior"
                >
                  <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-500 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-dark-blue animate-fade-in-right opacity-0 animation-delay-500"
                  style={{
                    animation: 'fadeInRight 0.8s ease-out 0.7s forwards'
                  }}
                  aria-label="Próximo slide"
                >
                  <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                
                {/* Indicadores de slide */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentSlide 
                          ? 'bg-white scale-110' 
                          : 'bg-white/50 hover:bg-white/75'
                      }`}
                      onClick={() => {
                        setCurrentSlide(index)
                        setImageLoaded(false)
                      }}
                      aria-label={`Ir para slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
              
              {/* Elementos decorativos */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-dark-blue rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-dark-red rounded-full opacity-20"></div>
            </div>
          </div>

          {/* Lado direito - Conteúdo */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-blue mb-6">
              Por que nos escolher?
            </h2>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Atendemos com qualidade, preços competitivos e entrega rápida em toda Camaçari-BA. 
              Trabalhamos com marcas de confiança para garantir o sucesso da sua obra.
            </p>

            {/* Lista de benefícios */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-dark-blue text-white rounded-lg flex items-center justify-center">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark-blue mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to action */}
            <div className="space-y-4">
              <button
                onClick={handleConsultorWhatsApp}
                className="btn-secondary text-xl px-8 py-4 w-full md:w-auto"
              >
                Falar com um Consultor
              </button>
              
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <span>Atendimento personalizado</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <span>Orçamento gratuito</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
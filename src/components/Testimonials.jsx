import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: 'Weverton de Jesus Pinto',
      role: 'Construtor Civil',
      content: 'Descobri a LM Comercial recentemente e já virou minha primeira opção! Produtos de qualidade e atendimento excepcional.',
      rating: 5,
      location: 'Camaçari-BA',
      image: 'avatars/persona1.png'
    },
    {
      id: 2,
      name: 'Maria José Constatino',
      role: 'Engenheira Civil',
      content: 'Uma nova loja que chegou para fazer a diferença! Preços competitivos e variedade de produtos impressionante.',
      rating: 5,
      location: 'Lauro de Freitas-BA',
      image: 'avatars/persona2.png'
    },
    {
      id: 3,
      name: 'Carlos Oliveira',
      role: 'Pedreiro',
      content: 'Fiquei surpreso com a qualidade dos materiais da LM Comercial. Uma loja nova que já conquistou minha confiança!',
      rating: 5,
      location: 'Simões Filho-BA',
      image: 'avatars/persona3.png'
    },
    {
      id: 4,
      name: 'Jorge Aragão da silva',
      role: 'Arquiteta',
      content: 'Excelente atendimento e produtos de primeira linha! A LM Comercial tem tudo que preciso para meus projetos. Recomendo de olhos fechados!',
      rating: 5,
      location: 'Salvador-BA',
      image: 'avatars/persona4.png'
    },
    {
      id: 5,
      name: 'Antonio César Pereira Junior',
      role: 'Proprietário de Casa',
      content: 'Reforma da minha casa ficou perfeita graças aos materiais da LM Comercial. Preço justo, qualidade garantida e entrega no prazo!',
      rating: 5,
      location: 'Dias d\'Ávila-BA',
      image: 'avatars/persona5.png'
    }
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 6000)
    return () => clearInterval(interval)
  }, [currentTestimonial])

  const renderStars = (rating) => {
    return (
      <div className="flex justify-center mb-4">
        {Array.from({ length: 5 }, (_, index) => (
          <svg
            key={index}
            className={`w-6 h-6 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    )
  }

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-pearl-white to-gray-50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="section-title animate-fadeInUp">
          O Que Nossos Clientes Dizem
        </h2>
        
        <p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto animate-fadeInUp">
          Veja os depoimentos de quem já confia na qualidade e no atendimento da LM Comercial.
        </p>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center card-hover">
                    <div className="mb-8">
                      <img
                        src={`/src/assets/images/${testimonial.image}`}
                        alt={testimonial.name}
                        className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-green-100 shadow-lg"
                        loading="lazy"
                      />
                    </div>
                    
                    {renderStars(testimonial.rating)}
                    
                    <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                      {testimonial.content}
                    </p>
                    
                    <div className="border-t border-gray-100 pt-6">
                      <h4 className="text-xl font-bold text-dark-blue mb-1">
                        {testimonial.name}
                      </h4>
                      <p className="text-green-600 font-medium mb-1">
                        {testimonial.role}
                      </p>
                      <p className="text-gray-500 text-sm">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial 
                  ? 'bg-green-500 scale-125' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
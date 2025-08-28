import React, { useState, useEffect } from 'react'
import { rafThrottle } from '../utils/performance'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const menuItems = [
    { name: 'Início', href: '#inicio' },
    { name: 'Produtos', href: '#produtos' },
    { name: 'Contato', href: '#contato' }
  ]

  const handleWhatsApp = () => {
    const phoneNumber = '5571982826739'
    const message = 'Olá! Gostaria de mais informações sobre os produtos da LM Comercial.'
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank')
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    const handleScroll = rafThrottle(() => {
      setIsScrolled(window.scrollY > 50)
    })

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-xl' 
        : 'bg-white/20 backdrop-blur-2xl'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={scrollToTop}>
            <img 
              src="/src/assets/images/logo2lm.png" 
              alt="LM Comercial Logo" 
              className="h-16 w-auto md:h-20 transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Menu Desktop */}
          <nav className="hidden md:flex items-center space-x-6">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-lg font-bold transition-all duration-300 px-4 py-2 rounded-xl relative group ${
                  isScrolled 
                    ? 'text-dark-blue hover:text-dark-red hover:bg-gray-50/80' 
                    : 'text-white hover:text-yellow-300 hover:bg-white/20 text-shadow-lg'
                }`}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-dark-red transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <button
              onClick={handleWhatsApp}
              className="btn-primary ml-6 font-bold text-white bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
               WhatsApp
            </button>
          </nav>

          {/* Menu Mobile Button */}
          <button
            className="md:hidden flex flex-col space-y-1 p-3 rounded-lg bg-white/20 backdrop-blur-md hover:bg-white/30 transition-all duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className={`block w-7 h-1 transition-all duration-300 ${
              isScrolled ? 'bg-dark-blue' : 'bg-white shadow-md'
            } ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-7 h-1 transition-all duration-300 ${
              isScrolled ? 'bg-dark-blue' : 'bg-white shadow-md'
            } ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-7 h-1 transition-all duration-300 ${
              isScrolled ? 'bg-dark-blue' : 'bg-white shadow-md'
            } ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {/* Menu Mobile */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <nav className="mt-4 pb-4 border-t border-white/30 backdrop-blur-md">
            <div className="flex flex-col space-y-2 pt-4">
              {menuItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`text-lg font-bold transition-all duration-300 px-4 py-3 rounded-xl transform ${
                    isScrolled 
                      ? 'text-dark-blue hover:text-dark-red hover:bg-gray-50/80' 
                      : 'text-white hover:text-yellow-300 hover:bg-white/20 text-shadow-lg'
                  } hover:translate-x-2 hover:scale-105`}
                  onClick={() => setIsMenuOpen(false)}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item.name}
                </a>
              ))}
              <button
                onClick={() => {
                  handleWhatsApp()
                  setIsMenuOpen(false)
                }}
                className="btn-primary mt-4 w-full font-bold text-white bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 px-6 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                 WhatsApp
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
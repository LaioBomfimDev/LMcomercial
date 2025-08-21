import React, { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { name: 'Início', href: '#inicio' },
    { name: 'Produtos', href: '#produtos' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Contato', href: '#contato' }
  ]

  const handleWhatsApp = () => {
    // Substitua pelo número real da empresa
    const phoneNumber = '557198282673'
    const message = 'Olá! Gostaria de mais informações sobre os produtos da LM Comercial.'
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank')
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-pearl-white bg-opacity-10 backdrop-blur-md shadow-lg border-b-2 border-dark-blue border-opacity-10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={scrollToTop}>
            <img 
              src="/logo2lm.png" 
              alt="LM Comercial Logo" 
              className="h-12 w-auto"
              onError={(e) => {
                e.target.style.display = 'none'
              }}
            />
          </div>

          {/* Menu Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-lg font-medium text-dark-blue hover:text-dark-red transition-colors duration-300 px-3 py-2 rounded-lg hover:bg-white"
              >
                {item.name}
              </a>
            ))}
            <button
              onClick={handleWhatsApp}
              className="btn-primary ml-4"
            >
              WhatsApp
            </button>
          </nav>

          {/* Menu Mobile Button */}
          <button
            className="md:hidden flex flex-col space-y-1 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className={`block w-6 h-0.5 bg-dark-blue transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-dark-blue transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-dark-blue transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3 pt-4">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-lg font-medium text-dark-blue hover:text-dark-red transition-colors duration-300 px-3 py-2 rounded-lg hover:bg-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <button
                onClick={handleWhatsApp}
                className="btn-primary mt-3 w-full"
              >
                WhatsApp
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
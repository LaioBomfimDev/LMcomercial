import React from 'react'
import Header from './components/Header'
import HeroSlider from './components/HeroSlider'
import PromotionsServices from './components/PromotionsServices'
import WhyChooseUs from './components/WhyChooseUs'
import AllProducts from './components/AllProducts'
import LocationMap from './components/LocationMap'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-pearl-white">
      {/* Header fixo no topo */}
      <Header />
      
      {/* Conteúdo principal */}
      <main>
        {/* Slidebar promocional */}
        <HeroSlider />
        
        {/* Promoções e Serviços Personalizados */}
        <PromotionsServices />
        
        {/* Por que nos escolher? */}
        <WhyChooseUs />
        
        {/* Todos os produtos */}
        <AllProducts />
        
        {/* Mapa estático */}
        <LocationMap />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
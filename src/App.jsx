import React from 'react'
import Header from './components/Header'
import HeroSlider from './components/HeroSlider'
import PromotionsServices from './components/PromotionsServices'
import WhyChooseUs from './components/WhyChooseUs'
import AllProducts from './components/AllProducts'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
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
        <section id="inicio">
          <HeroSlider />
        </section>
        
        {/* Promoções e Serviços Personalizados */}
        <section id="promocoes">
          <PromotionsServices />
        </section>
        
        {/* Por que nos escolher? */}
        <section id="sobre">
          <WhyChooseUs />
        </section>
        
        {/* Todos os produtos */}
        <section id="produtos">
          <AllProducts />
        </section>
        
        {/* Depoimentos de clientes */}
        <section id="depoimentos">
          <Testimonials />
        </section>
        
        {/* Mapa e contato */}
        <section id="contato">
          <LocationMap />
        </section>
        
        {/* Perguntas frequentes */}
        <section id="faq">
          <FAQ />
        </section>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
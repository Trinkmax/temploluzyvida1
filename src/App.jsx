import { useEffect } from 'react'
import SEOHead from './components/SEOHead'
import SEOContent from './components/SEOContent'
import WhatsAppFloatNew from './components/WhatsAppFloatNew'
import ScrollProgress from './components/animations/ScrollProgress'
import Hero from './components/Hero'
import UrgencyBar from './components/UrgencyBar'
import PainPoints from './components/PainPoints'
import About from './components/About'
import TestimonialsCarousel from './components/TestimonialsCarousel'
import Services from './components/Services'
import Timeline from './components/Timeline'
import Testimonials from './components/Testimonials'
import WhyChoose from './components/WhyChoose'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    console.log('Maestro Abraham Ocampo - React App Loaded')
  }, [])

  return (
    <>
      <ScrollProgress />
      <SEOHead />
      <SEOContent />
      <WhatsAppFloatNew />
      <Hero />
      <UrgencyBar />
      <PainPoints />
      <About />
      <TestimonialsCarousel />
      <Services />
      <Timeline />
      <Testimonials />
      <WhyChoose />
      <FAQ />
      <FinalCTA />
      <Footer />
    </>
  )
}

export default App


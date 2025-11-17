import { Icon } from '@iconify/react'
import { motion } from 'framer-motion'
import GradientText from './animations/GradientText'

const Hero = () => {
  return (
    <header className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-particles"></div>
      <div className="hero-content">
        <motion.h1 
          className="hero-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          ¿Perdiste al <GradientText delay={300}>Amor de Tu Vida</GradientText>?
        </motion.h1>
        
        <motion.p 
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          El Maestro Abraham Ocampo puede ayudarte a recuperar lo que más amas
        </motion.p>
        
        <motion.p 
          className="hero-description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Más de <strong>40 años</strong> de experiencia en amarres de amor efectivos y trabajos espirituales. 
          Miles de parejas reunidas y testimonios reales.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <motion.a 
            href="https://wa.me/5493516798793?text=Hola%20Maestro%20Isa%C3%ADas,%20necesito%20recuperar%20a%20mi%20pareja" 
            className="cta-button" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Icon icon="bi:whatsapp" width="24" height="24" style={{ marginRight: '10px' }} />
            CONSULTA GRATIS POR WHATSAPP
          </motion.a>
        </motion.div>
        
               <motion.p
                 className="urgency-text"
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ duration: 0.5, delay: 0.9 }}
               >
                 <motion.span
                   style={{ display: 'inline-flex', marginRight: '8px', verticalAlign: 'middle' }}
                   animate={{
                     rotate: [0, -10, 10, -10, 0],
                     transition: {
                       duration: 2,
                       repeat: Infinity,
                       repeatDelay: 3
                     }
                   }}
                   whileHover={{
                     scale: 1.2,
                     rotate: [0, 360],
                     transition: { duration: 0.5 }
                   }}
                 >
                   <Icon icon="ph:clock-bold" width="22" height="22" />
                 </motion.span>
                 Atención inmediata 24/7 - Respuesta en minutos
               </motion.p>
      </div>
    </header>
  )
}

export default Hero


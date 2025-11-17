import { Icon } from '@iconify/react'
import { motion } from 'framer-motion'
import FadeIn from './animations/FadeIn'
import BounceIn from './animations/BounceIn'
import TextReveal from './animations/TextReveal'

const painPoints = [
  {
    icon: "ph:heart-break-bold",
    title: "Tu pareja te dejó sin explicación",
    description: "Y no puedes dejar de pensar en ella/él día y noche",
    delay: 0,
    animation: "heartbreak"
  },
  {
    icon: "ph:user-circle-minus-bold",
    title: "Hay otra persona en su vida",
    description: "Y sientes que perdiste la batalla por su amor",
    delay: 100,
    animation: "fadeOut"
  },
  {
    icon: "ph:moon-stars-bold",
    title: "No puedes dormir pensando en él/ella",
    description: "El dolor es tan fuerte que afecta tu vida diaria",
    delay: 200,
    animation: "pulse"
  },
  {
    icon: "ph:phone-disconnect-bold",
    title: "Ya no te contesta los mensajes",
    description: "Y sientes que te está olvidando para siempre",
    delay: 0,
    animation: "ring"
  },
  {
    icon: "ph:lightning-bold",
    title: "Sientes que hay energías negativas",
    description: "Bloqueos o brujería que alejan el amor de tu vida",
    delay: 100,
    animation: "zap"
  },
  {
    icon: "ph:hand-palm-bold",
    title: "Has intentado todo sin resultados",
    description: "Y necesitas una solución real y efectiva ya",
    delay: 200,
    animation: "stop"
  }
]

const PainPoints = () => {
  return (
    <section className="pain-section">
      <div className="container">
        <FadeIn>
          <h2 className="section-title">
            <TextReveal>¿Te Sientes Identificado con Alguna de Estas Situaciones?</TextReveal>
          </h2>
        </FadeIn>
        
        <div className="pain-grid">
          {painPoints.map((point, index) => (
            <BounceIn key={index} delay={point.delay} direction="up">
              <motion.div 
                className="pain-card hover-lift"
                whileHover={{ 
                  scale: 1.05,
                  rotate: [0, -2, 2, 0],
                  transition: { duration: 0.3 }
                }}
              >
              <motion.div 
                className="pain-icon"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                whileHover={
                  point.animation === "heartbreak" ? {
                    scale: [1, 1.2, 1.1],
                    x: [0, -3, 3, -2, 2, 0],
                    filter: ["hue-rotate(0deg)", "hue-rotate(20deg)", "hue-rotate(0deg)"],
                    transition: { duration: 0.6 }
                  } :
                  point.animation === "ring" ? {
                    rotate: [0, -15, 15, -15, 15, -10, 10, 0],
                    scale: [1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1],
                    transition: { duration: 0.8 }
                  } :
                  point.animation === "fadeOut" ? {
                    scale: [1, 1.2, 0.9, 1.2],
                    opacity: [1, 0.6, 1, 0.6, 1],
                    transition: { duration: 0.8 }
                  } :
                  point.animation === "pulse" ? {
                    scale: [1, 1.15, 1, 1.15, 1],
                    opacity: [1, 0.7, 1, 0.7, 1],
                    transition: { duration: 1 }
                  } :
                  point.animation === "zap" ? {
                    scale: [1, 1.3, 1, 1.3, 1],
                    rotate: [0, -10, 10, -10, 10, 0],
                    y: [0, -5, 0, -5, 0],
                    filter: ["brightness(1)", "brightness(1.5)", "brightness(1)"],
                    transition: { duration: 0.5 }
                  } :
                  point.animation === "stop" ? {
                    scale: [1, 0.9, 1.2, 0.9, 1.2, 1],
                    rotate: [0, -5, 5, -5, 5, 0],
                    transition: { duration: 0.6 }
                  } : {
                    scale: 1.2,
                    rotate: [0, -10, 10, -10, 0],
                    transition: { duration: 0.5 }
                  }
                }
              >
                <Icon icon={point.icon} width="64" height="64" />
              </motion.div>
                <h3>{point.title}</h3>
                <p>{point.description}</p>
              </motion.div>
            </BounceIn>
          ))}
        </div>
        
        <div className="cta-center">
          <motion.a 
            href="https://wa.me/5493516798793?text=Maestro%20Isa%C3%ADas,%20me%20siento%20identificado.%20Necesito%20ayuda" 
            className="cta-button secondary" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Icon icon="ph:sparkle-bold" width="24" height="24" style={{ marginRight: '10px' }} />
            SÍ, NECESITO AYUDA URGENTE
          </motion.a>
        </div>
      </div>
    </section>
  )
}

export default PainPoints


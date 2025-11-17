import { Icon } from '@iconify/react'
import { motion } from 'framer-motion'
import FadeIn from './animations/FadeIn'
import RotateIn from './animations/RotateIn'
import TextReveal from './animations/TextReveal'

const reasons = [
  {
    icon: "ph:trophy-bold",
    iconColor: "#DAA520",
    title: "Experiencia Comprobada",
    description: "Más de 40 años dedicados exclusivamente a las artes esotéricas. Miles de casos exitosos documentados.",
    delay: 100
  },
  {
    icon: "ph:lock-key-bold",
    iconColor: "#8B0000",
    title: "Confidencialidad Total",
    description: "Tu caso se maneja con absoluta discreción. Nadie sabrá que me consultaste.",
    delay: 0
  },
  {
    icon: "ph:lightning-bold",
    iconColor: "#FF4500",
    title: "Resultados Rápidos",
    description: "Trabajos efectivos con resultados visibles entre 7 y 21 días. Sin largas esperas.",
    delay: 0
  },
  {
    icon: "ph:diamond-bold",
    iconColor: "#DAA520",
    title: "Materiales Consagrados",
    description: "Uso solo elementos de alta calidad, hierbas naturales y materiales especialmente preparados.",
    delay: 0
  },
  {
    icon: "ph:phone-call-bold",
    iconColor: "#25D366",
    title: "Atención 24/7",
    description: "Disponible cuando me necesites. Respuesta inmediata por WhatsApp todos los días.",
    delay: 0
  },
  {
    icon: "ph:check-circle-bold",
    iconColor: "#25D366",
    title: "Primera Consulta Gratis",
    description: "Primero consultas gratis, conoces tu caso, y decides. Sin compromisos ocultos.",
    delay: 0
  },
  {
    icon: "ph:globe-hemisphere-west-bold",
    iconColor: "#8B0000",
    title: "Trabajo a Distancia",
    description: "No importa dónde estés, mis rituales son efectivos en cualquier parte del mundo.",
    delay: 0
  },
  {
    icon: "ph:handshake-bold",
    iconColor: "#8B0000",
    title: "Seguimiento Personalizado",
    description: "Te acompaño en todo el proceso, respondiendo dudas y guiándote paso a paso.",
    delay: 0
  }
]

const WhyChoose = () => {
  return (
    <section className="why-choose-section">
      <div className="container">
        <FadeIn>
          <h2 className="section-title">
            <TextReveal>¿Por Qué Elegir al Maestro Abraham Ocampo?</TextReveal>
          </h2>
        </FadeIn>
        
        <div className="why-grid">
          {reasons.map((reason, index) => (
            <RotateIn 
              key={index} 
              delay={index * 100} 
              direction={index % 2 === 0 ? 'left' : 'right'}
            >
              <motion.div 
                className="why-card hover-lift"
                whileHover={{ 
                  scale: 1.08,
                  y: -8,
                  boxShadow: '0 15px 30px rgba(0,0,0,0.15)',
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div 
                  className="why-icon"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                    delay: 0.1
                  }}
                  whileHover={{
                    scale: 1.2,
                    rotate: [0, 360],
                    transition: {
                      rotate: { duration: 0.6, ease: "easeInOut" },
                      scale: { duration: 0.2 }
                    }
                  }}
                >
                  <Icon icon={reason.icon} width="60" height="60" style={{ color: reason.iconColor }} />
                </motion.div>
                <h3>{reason.title}</h3>
                <p>{reason.description}</p>
              </motion.div>
            </RotateIn>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChoose


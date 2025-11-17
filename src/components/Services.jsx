import { Icon } from '@iconify/react'
import { motion } from 'framer-motion'
import { memo } from 'react'
import FadeIn from './animations/FadeIn'
import ScaleIn from './animations/ScaleIn'
import FadeInStagger from './animations/FadeInStagger'

const services = [
  {
    icon: "noto:red-heart",
    title: "Amarres de Amor",
    description: "El trabajo más solicitado y efectivo. Une a dos personas con lazos inquebrantables de amor verdadero.",
    features: [
      "Amarre con foto y nombre",
      "Amarre con fluidos personales",
      "Amarre con ritual de luna llena",
      "Amarre dominante (para casos difíciles)",
      "Resultados en 7 a 21 días"
    ],
    link: "https://wa.me/5493516798793?text=Quiero%20informaci%C3%B3n%20sobre%20amarres%20de%20amor",
    featured: true,
    delay: 0,
    animation: "heartbeat"
  },
  {
    icon: "noto:couple-with-heart",
    title: "Retorno de Pareja",
    description: "¿Tu pareja te dejó? Con mis rituales especiales, volverá arrepentido/a y más enamorado/a que antes.",
    features: [
      "Ritual de retorno urgente",
      "Alejamiento de terceras personas",
      "Reconciliación definitiva",
      "Seguimiento personalizado"
    ],
    link: "https://wa.me/5493516798793?text=Necesito%20que%20mi%20pareja%20regrese",
    featured: false,
    delay: 100,
    animation: "running"
  },
  {
    icon: "noto:candle",
    title: "Endulzamientos",
    description: "Suaviza el carácter de tu pareja, elimina peleas y restaura la armonía en la relación.",
    features: [
      "Endulzamiento con miel y canela",
      "Ritual de dulzura permanente",
      "Paz en el hogar",
      "Efectos inmediatos"
    ],
    link: "https://wa.me/5493516798793?text=Quiero%20un%20endulzamiento",
    featured: false,
    delay: 200,
    animation: "flicker"
  },
  {
    icon: "noto:shield",
    title: "Limpiezas Espirituales",
    description: "Elimina trabajos de magia negra, mal de ojo, envidias y toda energía negativa que te afecta.",
    features: [
      "Diagnóstico espiritual completo",
      "Limpieza profunda con hierbas",
      "Protección permanente",
      "Baños de florecimiento"
    ],
    link: "https://wa.me/5493516798793?text=Necesito%20una%20limpieza%20espiritual",
    featured: false,
    delay: 0,
    animation: "shine"
  },
  {
    icon: "noto:sparkles",
    title: "Desbloqueos",
    description: "Abre caminos en amor, dinero y trabajo. Rompe obstáculos y atrae la prosperidad.",
    features: [
      "Desbloqueo de caminos",
      "Atracción de prosperidad",
      "Apertura de oportunidades",
      "Éxito en proyectos"
    ],
    link: "https://wa.me/5493516798793?text=Necesito%20un%20desbloqueo",
    featured: false,
    delay: 100,
    animation: "shine"
  },
  {
    icon: "noto:crystal-ball",
    title: "Consultas de Videncia",
    description: "Lee tu futuro con precisión absoluta. Respuestas claras sobre amor, trabajo y vida.",
    features: [
      "Lectura de tarot",
      "Lectura de caracoles",
      "Videncia natural",
      "Consejos espirituales"
    ],
    link: "https://wa.me/5493516798793?text=Quiero%20una%20consulta%20de%20videncia",
    featured: false,
    delay: 200,
    animation: "mystical"
  }
]

const Services = memo(() => {
  return (
    <section className="services-section" id="servicios">
      <div className="container">
        <FadeIn>
          <h2 className="section-title">Servicios Especializados</h2>
          <p className="section-subtitle">Trabajos espirituales con resultados reales y garantizados</p>
        </FadeIn>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <ScaleIn key={index} delay={service.delay}>
              <motion.div 
                className={`service-card hover-lift ${service.featured ? 'featured' : ''}`}
                whileHover={{ 
                  y: -10,
                  boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div 
                  className="service-icon"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 260, 
                    damping: 20,
                    delay: 0.1
                  }}
                  whileHover={
                    service.animation === "heartbeat" ? {
                      scale: [1, 1.2, 1.1, 1.25, 1],
                      transition: { duration: 0.8, ease: "easeInOut" }
                    } :
                    service.animation === "running" ? {
                      x: [0, -10, 10, -10, 10, 0],
                      scale: [1, 1.1, 1.1, 1.1, 1.1, 1],
                      transition: { duration: 0.7 }
                    } :
                    service.animation === "shine" ? {
                      scale: [1, 1.15, 1, 1.15, 1],
                      filter: ["brightness(1)", "brightness(1.5)", "brightness(1)", "brightness(1.5)", "brightness(1)"],
                      rotate: [0, 5, -5, 5, 0],
                      transition: { duration: 0.8 }
                    } :
                    service.animation === "flicker" ? {
                      scale: [1, 1.1, 1.05, 1.15, 1.05, 1.1, 1],
                      opacity: [1, 0.9, 1, 0.85, 1, 0.9, 1],
                      y: [-2, 0, -2, 0, -2, 0],
                      transition: { duration: 1 }
                    } :
                    service.animation === "mystical" ? {
                      scale: [1, 1.2, 1],
                      rotate: [0, 180, 360],
                      filter: ["brightness(1) hue-rotate(0deg)", "brightness(1.3) hue-rotate(45deg)", "brightness(1) hue-rotate(0deg)"],
                      transition: { duration: 1.2 }
                    } :
                    service.animation === "shuffle" ? {
                      rotate: [0, -15, 15, -10, 10, 0],
                      scale: [1, 1.1, 1.15, 1.1, 1.15, 1],
                      y: [0, -5, 5, -5, 5, 0],
                      transition: { duration: 0.8 }
                    } : {
                      scale: 1.15,
                      rotate: [0, -5, 5, -5, 0],
                      y: [-5, 0, -5, 0],
                      transition: { duration: 0.6 }
                    }
                  }
                >
                  <Icon icon={service.icon} width="80" height="80" />
                </motion.div>
                <h3>{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <FadeInStagger delay={0} staggerDelay={0.06}>
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="service-feature-item">
                      <Icon icon="ph:check-bold" width="20" height="20" style={{ color: '#25D366' }} />
                      {feature}
                    </li>
                  ))}
                </FadeInStagger>
                <motion.a 
                  href={service.link} 
                  className="service-cta" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  SOLICITAR INFORMACIÓN
                </motion.a>
              </motion.div>
            </ScaleIn>
          ))}
        </div>
      </div>
    </section>
  )
})

Services.displayName = 'Services'

export default Services


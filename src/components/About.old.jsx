import { Icon } from '@iconify/react'
import { motion } from 'framer-motion'
import { memo } from 'react'
import FadeIn from './animations/FadeIn'
import FadeInStagger from './animations/FadeInStagger'

// Memoizar el componente para evitar re-renders
const About = memo(() => {
  const trayectoriaItems = [
    {
      title: "Iniciación Temprana:",
      text: "Desde los 17 años, fui iniciado en las artes esotéricas por maestros de México y el Caribe, aprendiendo los secretos ancestrales de la magia blanca y la santería."
    },
    {
      title: "Especialización Internacional:",
      text: "Estudié con chamanes en Perú, brujos en Colombia y santeros en Cuba, fusionando las técnicas más poderosas de cada tradición."
    },
    {
      title: "Maestro Reconocido:",
      text: "Licenciado en Parapsicología y Ciencias Ocultas, avalado por instituciones esotéricas de América Latina."
    },
    {
      title: "Miles de Casos Exitosos:",
      text: "Más de 8,000 trabajos realizados con resultados comprobados y testimonios verificables."
    }
  ]

  const especializacionItems = [
    { icon: "ph:heart-bold", title: "Amarres de Amor Definitivos:", text: "Con rituales de alta magia que unen parejas para siempre" },
    { icon: "ph:users-three-bold", title: "Retorno de Pareja Inmediato:", text: "Métodos efectivos para traer de vuelta a quien amas" },
    { icon: "ph:shield-check-bold", title: "Limpiezas Espirituales Profundas:", text: "Eliminación de trabajos negativos y energías oscuras" },
    { icon: "ph:path-bold", title: "Desbloqueos y Protección:", text: "Apertura de caminos en amor, dinero y salud" },
    { icon: "ph:eye-bold", title: "Videncia Clara:", text: "Consultas precisas sobre tu futuro sentimental" }
  ]

  return (
    <section className="about-section" id="sobre-mi">
      <div className="container">
        <div className="about-content">
          <FadeIn delay={100}>
            <div className="about-image">
              <img 
                src="/images/maestro-isaias.jpg" 
                alt="Maestro Isaías Campos - Experto en Amarres Para Recuperar Ex" 
                loading="eager"
                onError={(e) => {
                  console.error('Error loading image:', e.target.src);
                  e.target.onerror = null;
                  e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect fill="%23ddd" width="400" height="400"/%3E%3Ctext fill="%23999" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3EImagen no disponible%3C/text%3E%3C/svg%3E';
                }}
              />
              <motion.div 
                className="experience-badge"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 0.4 }}
              >
                <span className="badge-number">+40</span>
                <span className="badge-text">Años de Experiencia</span>
              </motion.div>
            </div>
          </FadeIn>
          
          <FadeIn delay={200}>
            <div className="about-text">
              <h2 className="section-title">Maestro Isaías Campos</h2>
              <h3 className="subtitle">Brujo, Vidente y Sanador Espiritual</h3>
            
              <p className="lead">
                Con más de 40 años dedicados a las artes místicas y espirituales, he ayudado a miles 
                de personas en Argentina y el mundo a recuperar el amor, la paz y la prosperidad en sus vidas.
              </p>
              
              <div className="credentials">
                <h4>
                  <motion.span
                    style={{ display: 'inline-flex', marginRight: '10px', verticalAlign: 'middle' }}
                    whileHover={{
                      scale: 1.2,
                      rotate: [0, 10, -10, 10, 0],
                      transition: { duration: 0.5 }
                    }}
                  >
                    <Icon icon="ph:scroll-bold" width="28" height="28" />
                  </motion.span>
                  Mi Trayectoria:
                </h4>
                <FadeInStagger delay={100} staggerDelay={0.08}>
                  {trayectoriaItems.map((item, idx) => (
                    <li key={idx}>
                      <strong>{item.title}</strong> {item.text}
                    </li>
                  ))}
                </FadeInStagger>
              </div>

              <div className="specialties">
                <h4>
                  <motion.span
                    style={{ display: 'inline-flex', marginRight: '10px', verticalAlign: 'middle' }}
                    whileHover={{
                      scale: 1.2,
                      rotate: [0, 90, 180, 270, 360],
                      transition: { duration: 0.6 }
                    }}
                  >
                    <Icon icon="ph:star-four-bold" width="28" height="28" />
                  </motion.span>
                  Mi Especialización:
                </h4>
                <FadeInStagger delay={100} staggerDelay={0.08}>
                  {especializacionItems.map((item, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'center' }}>
                      <motion.span
                        style={{ display: 'inline-flex', marginRight: '8px' }}
                        whileHover={{
                          scale: 1.3,
                          rotate: [0, -10, 10, -10, 0],
                          transition: { duration: 0.5 }
                        }}
                      >
                        <Icon icon={item.icon} width="24" height="24" style={{ color: '#8B0000' }} />
                      </motion.span>
                      <span><strong>{item.title}</strong> {item.text}</span>
                    </li>
                  ))}
                </FadeInStagger>
              </div>

              <blockquote className="maestro-quote">
                "No hay amor imposible, ni situación sin solución. Con fe, dedicación y los rituales correctos, 
                todo se puede lograr. He visto los milagros más increíbles, y sé que tú también mereces ser feliz."
                <cite>- Maestro Isaías Campos</cite>
              </blockquote>

              <div className="cta-center">
                <motion.a 
                  href="https://wa.me/5493516798793?text=Maestro,%20quiero%20conocer%20m%C3%A1s%20sobre%20sus%20trabajos" 
                  className="cta-button" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon icon="bi:whatsapp" width="24" height="24" style={{ marginRight: '10px' }} />
                  CONTACTAR AL MAESTRO AHORA
                </motion.a>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
})

About.displayName = 'About'

export default About


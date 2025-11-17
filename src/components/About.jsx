import { Icon } from '@iconify/react'
import { motion, useInView } from 'framer-motion'
import { memo, useRef, useState } from 'react'
import ScrollReveal from './animations/ScrollReveal'
import SlideIn from './animations/SlideIn'
import ScaleIn from './animations/ScaleIn'
import Parallax from './animations/Parallax'
import BlurIn from './animations/BlurIn'
import RotateIn from './animations/RotateIn'

const About = memo(() => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const [hoveredCard, setHoveredCard] = useState(null)

  const stats = [
    { icon: "ph:trophy-fill", value: "+40", label: "Años de Experiencia", color: "#DAA520" },
    { icon: "ph:users-three-fill", value: "+8000", label: "Casos Exitosos", color: "#8B0000" },
    { icon: "ph:globe-hemisphere-west-fill", value: "5", label: "Países Atendidos", color: "#FF4500" },
    { icon: "ph:star-fill", value: "100%", label: "Satisfacción", color: "#DAA520" }
  ]

  const journey = [
    {
      icon: "ph:compass-bold",
      title: "Iniciación Temprana",
      description: "Desde los 17 años, iniciado en artes esotéricas por maestros de México y el Caribe.",
      gradient: "linear-gradient(135deg, #8B0000 0%, #660000 100%)"
    },
    {
      icon: "ph:airplane-tilt-bold",
      title: "Especialización Internacional",
      description: "Estudié con chamanes en Perú, brujos en Colombia y santeros en Cuba.",
      gradient: "linear-gradient(135deg, #DAA520 0%, #B8860B 100%)"
    },
    {
      icon: "ph:certificate-bold",
      title: "Maestro Reconocido",
      description: "Licenciado en Parapsicología y Ciencias Ocultas avalado en América Latina.",
      gradient: "linear-gradient(135deg, #FF4500 0%, #CC3700 100%)"
    },
    {
      icon: "ph:heart-straight-fill",
      title: "Miles de Casos Exitosos",
      description: "Más de 8,000 trabajos con resultados comprobados y testimonios verificables.",
      gradient: "linear-gradient(135deg, #8B0000 0%, #4a0000 100%)"
    }
  ]

  const specialties = [
    { icon: "ph:heart-bold", title: "Amarres de Amor", desc: "Rituales de alta magia", color: "#FF4500" },
    { icon: "ph:arrow-u-up-left-bold", title: "Retorno de Pareja", desc: "Métodos efectivos", color: "#8B0000" },
    { icon: "ph:shield-check-bold", title: "Limpiezas Profundas", desc: "Eliminación de negatividad", color: "#DAA520" },
    { icon: "ph:path-bold", title: "Desbloqueos", desc: "Apertura de caminos", color: "#FF4500" },
    { icon: "ph:eye-bold", title: "Videncia Clara", desc: "Consultas precisas", color: "#8B0000" }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 12 }
    }
  }

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0, rotateY: -15 },
    visible: {
      scale: 1,
      opacity: 1,
      rotateY: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  }

  return (
    <section className="about-section-modern" id="sobre-mi" ref={sectionRef}>
      <div className="container">
        {/* Hero Header */}
        <motion.div 
          className="about-hero"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="about-image-wrapper"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div 
              className="about-image-modern"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="image-glow"
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(218, 165, 32, 0.3)",
                    "0 0 40px rgba(218, 165, 32, 0.5)",
                    "0 0 20px rgba(218, 165, 32, 0.3)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <img 
                src="/images/maestro-abraham.jpg" 
                alt="Maestro Abraham Ocampo" 
                loading="eager"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect fill="%23ddd" width="400" height="400"/%3E%3Ctext fill="%23999" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3EImagen no disponible%3C/text%3E%3C/svg%3E';
                }}
              />
            </motion.div>

            <motion.div
              className="floating-badge"
              initial={{ opacity: 0, x: 50, rotate: -10 }}
              animate={isInView ? { opacity: 1, x: 0, rotate: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="badge-icon"
                animate={{ 
                  filter: [
                    "brightness(1) drop-shadow(0 0 0px rgba(56, 151, 240, 0))",
                    "brightness(1.15) drop-shadow(0 0 4px rgba(56, 151, 240, 0.4))",
                    "brightness(1) drop-shadow(0 0 0px rgba(56, 151, 240, 0))"
                  ],
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Icon icon="ph:seal-check-fill" width="30" height="30" style={{ color: '#3897f0' }} />
              </motion.div>
              <div className="badge-content">
                <span className="badge-number">+40</span>
                <span className="badge-label">Años</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="about-intro"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Parallax speed={-0.3}>
              <BlurIn delay={400} duration={0.8}>
                <h2 className="about-title">
                  Maestro <span className="gradient-text">Abraham Ocampo</span>
                </h2>
              </BlurIn>
            </Parallax>
            
            <motion.div 
              className="about-subtitle-container"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <span>Brujo, Vidente y Sanador Espiritual</span>
            </motion.div>

            <motion.p 
              className="about-lead"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Con más de 40 años dedicados a las artes místicas y espirituales, he ayudado a miles 
              de personas en Argentina y el mundo a recuperar el amor, la paz y la prosperidad.
            </motion.p>

            {/* Stats Cards Mobile-First */}
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <ScaleIn 
                  key={index} 
                  delay={700 + (index * 100)} 
                  duration={0.5}
                  scale={0.8}
                >
                  <motion.div
                    className="stat-card"
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.div
                      animate={{ 
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.2
                      }}
                    >
                      <Icon icon={stat.icon} width="32" height="32" style={{ color: stat.color }} />
                    </motion.div>
                    <div className="stat-value">{stat.value}</div>
                    <div className="stat-label">{stat.label}</div>
                  </motion.div>
                </ScaleIn>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Journey Cards */}
        <ScrollReveal direction="up" delay={100}>
          <div className="journey-section">
            <BlurIn delay={200} duration={0.8}>
              <h3 className="journey-title">
                <RotateIn delay={300} direction="left">
                  <Icon icon="ph:path-bold" width="28" height="28" style={{ marginRight: '10px', color: '#DAA520' }} />
                </RotateIn>
                Mi Trayectoria
              </h3>
            </BlurIn>

            <div className="journey-grid">
              {journey.map((item, index) => (
                <SlideIn 
                  key={index} 
                  direction={index % 2 === 0 ? 'left' : 'right'} 
                  delay={300 + (index * 150)}
                  duration={0.6}
                >
                  <motion.div
                    className="journey-card"
                    onHoverStart={() => setHoveredCard(index)}
                    onHoverEnd={() => setHoveredCard(null)}
                    whileHover={{ y: -10, scale: 1.02 }}
                  >
                    <motion.div 
                      className="journey-card-inner"
                      style={{ background: item.gradient }}
                      animate={hoveredCard === index ? { scale: 1.02 } : { scale: 1 }}
                    >
                      <motion.div
                        className="journey-icon"
                        animate={hoveredCard === index ? { 
                          rotate: 360,
                          scale: [1, 1.2, 1]
                        } : {}}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon icon={item.icon} width="40" height="40" />
                      </motion.div>
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                    </motion.div>
                  </motion.div>
                </SlideIn>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Specialties Pills */}
        <ScrollReveal direction="up" delay={100}>
          <div className="specialties-section">
            <BlurIn delay={200} duration={0.8}>
              <h3 className="specialties-title">
                <RotateIn delay={300} direction="right">
                  <Icon icon="ph:star-four-fill" width="28" height="28" style={{ marginRight: '10px', color: '#DAA520' }} />
                </RotateIn>
                Mis Especialidades
              </h3>
            </BlurIn>

            <div className="specialties-pills">
              {specialties.map((spec, index) => (
                <ScaleIn 
                  key={index} 
                  delay={300 + (index * 100)} 
                  duration={0.5}
                  scale={0.8}
                >
                  <motion.div
                    className="specialty-pill"
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 8px 25px rgba(0,0,0,0.15)"
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon icon={spec.icon} width="24" height="24" style={{ color: spec.color }} />
                    </motion.div>
                    <div className="pill-content">
                      <span className="pill-title">{spec.title}</span>
                      <span className="pill-desc">{spec.desc}</span>
                    </div>
                  </motion.div>
                </ScaleIn>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Quote Card */}
        <ScaleIn delay={100} duration={0.8} scale={0.9}>
          <motion.div
            className="quote-card-modern"
            whileHover={{ scale: 1.02 }}
          >
            <motion.div
              className="quote-icon"
              animate={{ 
                y: [0, -10, 0],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Icon icon="ph:quotes-fill" width="60" height="60" style={{ color: 'rgba(218, 165, 32, 0.2)' }} />
            </motion.div>
            <p className="quote-text">
              "No hay amor imposible, ni situación sin solución. Con fe, dedicación y los rituales correctos, 
              todo se puede lograr. He visto los milagros más increíbles, y sé que tú también mereces ser feliz."
            </p>
            <cite className="quote-author">— Maestro Abraham Ocampo</cite>
          </motion.div>
        </ScaleIn>

        {/* CTA Button */}
        <ScrollReveal direction="up" delay={100}>
          <div className="about-cta">
            <motion.a 
              href="https://wa.me/5493516798793?text=Maestro,%20quiero%20conocer%20m%C3%A1s%20sobre%20sus%20trabajos" 
              className="cta-button-modern" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: "0 15px 40px rgba(37, 211, 102, 0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Icon icon="bi:whatsapp" width="24" height="24" />
              </motion.div>
              <span>CONTACTAR AL MAESTRO AHORA</span>
              <Icon icon="ph:arrow-right-bold" width="20" height="20" />
            </motion.a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
})

About.displayName = 'About'

export default About


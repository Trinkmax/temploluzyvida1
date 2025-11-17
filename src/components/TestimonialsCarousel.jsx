import { useState, useEffect } from 'react'
import { Icon } from '@iconify/react'
import { motion, AnimatePresence } from 'framer-motion'
import ScrollReveal from './animations/ScrollReveal'
import SplitText from './animations/SplitText'

const testimonials = [
  {
    image: "/images/testimonio-1.jpg",
    alt: "Testimonio WhatsApp - Pareja reunida",
    caption: "Caso real - Pareja regresó en 12 días"
  },
  {
    image: "/images/testimonio-2.jpg",
    alt: "Testimonio WhatsApp - Amarre efectivo",
    caption: "Caso real - Resultados sorprendentes"
  },
  {
    image: "/images/testimonio-3.jpg",
    alt: "Testimonio WhatsApp - Amor recuperado",
    caption: "Caso real - Amor verdadero unido"
  }
]

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [direction, setDirection] = useState(0)

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
  }

  const nextSlide = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!isAutoPlaying) return
    
    const interval = setInterval(() => {
      nextSlide()
    }, 7000)

    return () => clearInterval(interval)
  }, [currentIndex, isAutoPlaying])

  const handleMouseEnter = () => setIsAutoPlaying(false)
  const handleMouseLeave = () => setIsAutoPlaying(true)

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0
    })
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity
  }

  return (
    <section className="testimonials-whatsapp-section" id="testimonios-reales">
      <div className="container">
        <ScrollReveal>
          <h2 className="section-title">
            <SplitText text="Testimonios Reales de WhatsApp" />
          </h2>
          <p className="section-subtitle">Conversaciones reales de personas que han encontrado solución con mi ayuda</p>
        </ScrollReveal>
        
        <div 
          className="carousel-container"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="carousel-wrapper-modern">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
                  opacity: { duration: 0.3 }
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.5}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x)

                  if (swipe < -swipeConfidenceThreshold) {
                    nextSlide()
                  } else if (swipe > swipeConfidenceThreshold) {
                    prevSlide()
                  }
                }}
                className="carousel-item-modern"
              >
                <div className="whatsapp-screenshot">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].alt} 
                    loading="lazy"
                    draggable="false"
                  />
                         <div className="screenshot-caption">
                           <motion.span
                             style={{ display: 'inline-flex', marginRight: '6px', verticalAlign: 'middle' }}
                             whileHover={{
                               scale: 1.3,
                               rotate: [0, 360],
                               transition: { duration: 0.5 }
                             }}
                           >
                             <Icon icon="ph:check-circle-bold" width="18" height="18" style={{ color: '#25D366' }} />
                           </motion.span>
                           {testimonials[currentIndex].caption}
                         </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <motion.button 
            className="carousel-btn prev" 
            onClick={prevSlide}
            aria-label="Anterior"
            whileHover={{ scale: 1.1, x: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
          </motion.button>
          
          <motion.button 
            className="carousel-btn next" 
            onClick={nextSlide}
            aria-label="Siguiente"
            whileHover={{ scale: 1.1, x: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </motion.button>
          
          <div className="carousel-dots">
            {testimonials.map((_, index) => (
              <motion.span 
                key={index}
                className={`dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                animate={{
                  scale: index === currentIndex ? 1.3 : 1,
                  backgroundColor: index === currentIndex ? '#8B0000' : '#ccc'
                }}
                transition={{ duration: 0.3 }}
              />
            ))}
          </div>
          
          <motion.div 
            className="carousel-progress"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 7, ease: 'linear' }}
            key={currentIndex}
          />
        </div>

        <ScrollReveal delay={200}>
          <div className="cta-center">
            <motion.a 
              href="https://wa.me/5493516798793?text=Vi%20los%20testimonios%20y%20quiero%20recuperar%20mi%20amor" 
              className="cta-button" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 10px 30px rgba(139, 0, 0, 0.3)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon icon="ph:heart-bold" width="24" height="24" style={{ marginRight: '10px', color: '#fff' }} />
              YO TAMBIÉN QUIERO RECUPERAR MI AMOR
            </motion.a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default TestimonialsCarousel


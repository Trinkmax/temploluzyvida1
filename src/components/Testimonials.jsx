import { Icon } from '@iconify/react'
import { motion } from 'framer-motion'
import FadeIn from './animations/FadeIn'
import ScaleIn from './animations/ScaleIn'
import TextReveal from './animations/TextReveal'

const testimonials = [
  {
    rating: 5,
    text: "Estaba desesperada, mi ex me había dejado por otra mujer después de 5 años juntos. El Maestro Abraham me dio esperanza cuando ya no tenía ninguna. En solo 12 días, mi ex volvió a casa, terminó con la otra y ahora estamos mejor que nunca. Gracias eternas Maestro.",
    author: "Valentina R.",
    location: "Córdoba, Argentina",
    delay: 0
  },
  {
    rating: 5,
    text: "Pensé que había perdido a la mujer de mi vida para siempre. Ella se había ido con otro y no me contestaba nada. El trabajo del Maestro fue increíble, a los 8 días me escribió llorando diciendo que me extrañaba. Hoy vivimos juntos y vamos a casarnos. Es un verdadero maestro.",
    author: "Marcelo G.",
    location: "Buenos Aires, Argentina",
    delay: 100
  },
  {
    rating: 5,
    text: "Mi caso era muy complicado, había mucha brujería de por medio para separarnos. Otros brujos no pudieron ayudarme. El Maestro Abraham hizo una limpieza profunda y un amarre, y en 15 días ya estaba todo resuelto. Mi ex volvió y la otra persona desapareció. 100% recomendado.",
    author: "Carolina M.",
    location: "Rosario, Argentina",
    delay: 200
  },
  {
    rating: 5,
    text: "Llevaba 6 meses sin hablar con mi ex, me había bloqueado de todo. El Maestro me aseguró que volvería y así fue. A los 10 días me desbloqueó, me pidió perdón y me dijo que no podía dejar de pensar en mí. Ahora somos más felices que antes. Gracias Maestro por devolverme la vida.",
    author: "Javier L.",
    location: "Mendoza, Argentina",
    delay: 0
  },
  {
    rating: 5,
    text: "Estaba embarazada y mi ex me abandonó. Desesperada contacté al Maestro y él me dio fuerzas y trabajó para mí. En 2 semanas mi ex volvió arrepentido, me pidió matrimonio y ahora somos una familia feliz con nuestro bebé. Es un ángel en mi vida.",
    author: "Sofía P.",
    location: "Tucumán, Argentina",
    delay: 100
  },
  {
    rating: 5,
    text: "Me habían hecho trabajos de magia negra para separarme de mi ex. Todo iba mal, peleábamos sin razón. El Maestro Abraham lo detectó en la primera consulta, hizo limpieza y protección. El cambio fue inmediato. Hoy estamos en paz y más enamorados. Su don es real.",
    author: "Roberto S.",
    location: "Salta, Argentina",
    delay: 200
  }
]

const Testimonials = () => {
  return (
    <section className="testimonials-section" id="testimonios">
      <div className="container">
        <FadeIn>
          <h2 className="section-title">
            <TextReveal>Lo Que Dicen Quienes Ya Recuperaron Su Amor</TextReveal>
          </h2>
          <p className="section-subtitle">Miles de casos exitosos respaldan mi trabajo</p>
        </FadeIn>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <ScaleIn key={index} delay={testimonial.delay}>
              <motion.div 
                className="testimonial-card hover-lift"
                whileHover={{ 
                  y: -10,
                  boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div 
                  className="rating"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Icon icon="ph:star-fill" width="18" height="18" style={{ color: '#DAA520' }} />
                    </motion.span>
                  ))}
                </motion.div>
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="testimonial-author">
                  <strong>{testimonial.author}</strong>
                  <span>{testimonial.location}</span>
                </div>
              </motion.div>
            </ScaleIn>
          ))}
        </div>

        <FadeIn delay={300}>
          <div className="cta-center">
            <motion.a 
              href="https://wa.me/5493516798793?text=Quiero%20ser%20el%20pr%C3%B3ximo%20testimonio%20de%20%C3%A9xito" 
              className="cta-button" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon icon="ph:heart-bold" width="24" height="24" style={{ marginRight: '10px', color: '#fff' }} />
              YO TAMBIÉN QUIERO RECUPERAR MI AMOR
            </motion.a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

export default Testimonials


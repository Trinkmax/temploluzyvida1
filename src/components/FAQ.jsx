import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FadeIn from './animations/FadeIn'
import TextReveal from './animations/TextReveal'

const faqs = [
  {
    question: "¿Realmente funcionan los amarres de amor?",
    answer: "Sí, cuando son realizados por un verdadero maestro con experiencia y los materiales correctos. Tengo más de 40 años de práctica y miles de casos exitosos que lo demuestran. La clave está en el conocimiento, la fe y los rituales ancestrales correctamente ejecutados."
  },
  {
    question: "¿Cuánto tiempo tardan en hacer efecto?",
    answer: "Los primeros resultados suelen verse entre 7 y 21 días. Cada caso es diferente dependiendo de la situación específica. En casos más complicados puede tomar hasta 30 días, pero siempre hay señales desde el inicio."
  },
  {
    question: "¿Es seguro? ¿Es magia blanca o negra?",
    answer: "Trabajo exclusivamente con magia blanca y rituales de luz. Mis trabajos no dañan a nadie, solo fortalecen el amor que ya existió entre tú y tu ex. No uso magia negra bajo ninguna circunstancia."
  },
  {
    question: "¿Qué necesitas para hacer un trabajo?",
    answer: "Depende del trabajo específico. Generalmente necesito: nombres completos, fechas de nacimiento, una foto reciente de la persona (si la tienes), y detalles de la situación. En algunos casos, elementos personales ayudan pero no son obligatorios."
  },
  {
    question: "¿Funciona aunque haya otra persona involucrada?",
    answer: "Sí, incluso si hay terceras personas involucradas, los rituales son efectivos. Tengo casos donde la tercera persona se aleja naturalmente. El trabajo incluye alejamiento de terceras personas cuando es necesario."
  },
  {
    question: "¿Trabajas a distancia?",
    answer: "Sí, absolutamente. Mis trabajos son efectivos sin importar dónde te encuentres. He ayudado a personas en toda Argentina, Latinoamérica, Europa y Estados Unidos. La distancia no es un obstáculo para la energía espiritual."
  },
  {
    question: "¿Cuánto cuestan tus servicios?",
    answer: "Los costos varían según el tipo de trabajo y la complejidad del caso. La primera consulta es completamente GRATIS. Ahí evaluamos tu situación y te doy un presupuesto claro sin sorpresas. Tengo opciones para diferentes presupuestos."
  },
  {
    question: "¿Qué pasa si mi caso es muy difícil?",
    answer: "He trabajado con los casos más complejos imaginables: separaciones de años, terceras personas, familias opuestas, brujería hecha por otros. No existe caso imposible. Con paciencia, los rituales correctos y tu fe, todo tiene solución."
  },
  {
    question: "¿Es confidencial?",
    answer: "Totalmente. Tu privacidad es sagrada. Nadie sabrá que me consultaste ni que hice un trabajo para ti. Manejo todos los casos con absoluta discreción profesional."
  }
]

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null)

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="faq-section" id="preguntas">
      <div className="container">
        <FadeIn>
          <h2 className="section-title">
            <TextReveal>Preguntas Frecuentes</TextReveal>
          </h2>
        </FadeIn>
        
        <div className="faq-container">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index} 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <motion.div 
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                whileHover={{ backgroundColor: 'rgba(139, 0, 0, 0.03)' }}
                transition={{ duration: 0.2 }}
              >
                <h3>{faq.question}</h3>
                <motion.span 
                  className="faq-toggle"
                  animate={{ rotate: activeIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  +
                </motion.span>
              </motion.div>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div 
                    className="faq-answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      {faq.answer}
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ


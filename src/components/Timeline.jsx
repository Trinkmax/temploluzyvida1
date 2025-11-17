import { Icon } from '@iconify/react'
import FadeIn from './animations/FadeIn'
import SlideIn from './animations/SlideIn'

const timelineSteps = [
  {
    number: "1",
    title: "Primeras 24-48 horas",
    description: "Sientes un cambio energético. La persona empieza a pensar en ti sin saber por qué.",
    delay: 200
  },
  {
    number: "2",
    title: "Días 2-3",
    description: "Comienzan las señales: mensajes, llamadas, o te busca por redes sociales. El ritual está trabajando.",
    delay: 300
  },
  {
    number: "3",
    title: "Días 3-5",
    description: "La persona muestra interés activo, busca conversar, quiere verte. El amor renace intensamente.",
    delay: 400
  },
  {
    number: "4",
    title: "Días 5-7",
    description: "Resultado completo: la pareja vuelve o el amor se consolida definitivamente. Inicio de nueva etapa juntos.",
    delay: 500
  }
]

const Timeline = () => {
  return (
    <section className="timeline-section">
      <div className="container">
        <FadeIn>
          <h2 className="section-title">¿Cuándo Veré Resultados?</h2>
          <p className="section-subtitle">Cada caso es único, pero estos son los tiempos promedio</p>
        </FadeIn>
        
        <div className="timeline">
          {timelineSteps.map((step, index) => (
            <SlideIn key={index} delay={step.delay} direction="right">
              <div className="timeline-item">
                <div className="timeline-marker">{step.number}</div>
                <div className="timeline-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            </SlideIn>
          ))}
        </div>

        <FadeIn delay={600}>
          <div className="guarantee-box">
            <h3>
              <Icon icon="ph:seal-check-bold" width="36" height="36" style={{ color: '#DAA520' }} />
              Mi Garantía Personal
            </h3>
            <p>
              Si no ves resultados en el tiempo estimado, continúo trabajando sin costo adicional 
              hasta que los logres. Tu satisfacción es mi prioridad.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

export default Timeline


import { Icon } from '@iconify/react'
import { motion } from 'framer-motion'
import FadeIn from './animations/FadeIn'
import ScaleIn from './animations/ScaleIn'
import TextReveal from './animations/TextReveal'
import FloatingElement from './animations/FloatingElement'
import PulseGlow from './animations/PulseGlow'

const FinalCTA = () => {
  return (
    <section className="final-cta-section">
      <div className="container">
        <FadeIn>
          <h2 className="cta-title">
            <TextReveal>No Dejes Que El Amor de Tu Vida Se Escape Para Siempre</TextReveal>
          </h2>
          <p className="cta-subtitle">
            Cada día que pasa, la distancia se hace más grande. Actúa ahora antes de que sea demasiado tarde.
          </p>
        </FadeIn>
        
        <ScaleIn delay={200}>
          <div className="cta-benefits">
            {[
              'Primera consulta 100% GRATIS',
              'Diagnóstico espiritual sin compromiso',
              'Respuesta inmediata por WhatsApp',
              'Confidencialidad absoluta garantizada'
            ].map((benefit, idx) => (
              <motion.div
                key={idx}
                className="benefit-item"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ x: 5, transition: { duration: 0.2 } }}
              >
                <Icon icon="ph:check-circle-bold" width="24" height="24" style={{ marginRight: '10px', color: '#25D366' }} />
                {benefit}
              </motion.div>
            ))}
          </div>
        </ScaleIn>

        <FadeIn delay={300}>
          <FloatingElement duration={3} distance={10}>
            <PulseGlow color="rgba(37, 211, 102, 0.6)">
              <motion.a 
                href="https://wa.me/5493516798793?text=Maestro%20Isa%C3%ADas,%20necesito%20su%20ayuda%20urgente%20para%20recuperar%20mi%20amor" 
                className="cta-button large pulse" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon icon="bi:whatsapp" width="28" height="28" style={{ marginRight: '12px' }} />
                CONTACTAR AHORA POR WHATSAPP
              </motion.a>
            </PulseGlow>
          </FloatingElement>
        </FadeIn>

        <FadeIn delay={400}>
          <p className="cta-phone">
            <Icon icon="ph:phone-bold" width="24" height="24" style={{ marginRight: '10px' }} />
            También puedes llamar/escribir al: <strong>+54 351 679-8793</strong>
          </p>
        </FadeIn>
        
        <ScaleIn delay={500}>
          <div className="trust-badges">
            {[
              { icon: 'ph:star-fill', color: '#DAA520', text: '+8,000 trabajos realizados' },
              { icon: 'ph:heart-fill', color: '#8B0000', text: '98% de casos exitosos' },
              { icon: 'ph:trophy-fill', color: '#DAA520', text: '+40 años de experiencia' }
            ].map((badge, idx) => (
              <motion.div
                key={idx}
                className="badge-item"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, type: 'spring' }}
                whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
              >
                <Icon icon={badge.icon} width="22" height="22" style={{ marginRight: '8px', color: badge.color }} />
                {badge.text}
              </motion.div>
            ))}
          </div>
        </ScaleIn>
      </div>
    </section>
  )
}

export default FinalCTA


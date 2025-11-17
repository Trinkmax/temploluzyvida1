import { Icon } from '@iconify/react'
import { motion } from 'framer-motion'

const UrgencyBar = () => {
  const tickerText = (
    <>
      <motion.span
        className="urgency-icon"
        animate={{ 
          rotate: [0, 15, -15, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Icon icon="ph:fire-bold" width="22" height="22" />
      </motion.span>
      <span className="urgency-label">OFERTA ESPECIAL:</span>
      <span className="urgency-offer">Primera consulta GRATIS + Diagnóstico espiritual completo</span>
      <span className="urgency-separator">|</span>
      <Icon icon="ph:clock-bold" width="18" height="18" />
      <span className="urgency-timer-text">Solo por tiempo limitado</span>
      <span className="urgency-separator">•</span>
    </>
  )

  return (
    <motion.div 
      className="urgency-bar"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ 
        duration: 0.6,
        delay: 0.5,
        type: "spring",
        stiffness: 100
      }}
    >
      <div className="urgency-ticker-wrapper">
        <motion.div 
          className="urgency-ticker"
          animate={{ 
            x: [0, -1500],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {tickerText}
          {tickerText}
          {tickerText}
          {tickerText}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default UrgencyBar


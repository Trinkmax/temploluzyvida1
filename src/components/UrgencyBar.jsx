import { Icon } from '@iconify/react'
import { motion } from 'framer-motion'

const UrgencyBar = () => {
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
      <motion.p
        animate={{ 
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <motion.span
          animate={{ 
            rotate: [0, 15, -15, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ display: 'inline-block' }}
        >
          <Icon icon="ph:fire-bold" width="20" height="20" style={{ marginRight: '8px' }} />
        </motion.span>
        <strong>OFERTA ESPECIAL:</strong> Primera consulta GRATIS + Diagnóstico espiritual completo | 
        <Icon icon="ph:clock-bold" width="18" height="18" style={{ margin: '0 8px' }} />
        Solo por tiempo limitado
      </motion.p>
    </motion.div>
  )
}

export default UrgencyBar


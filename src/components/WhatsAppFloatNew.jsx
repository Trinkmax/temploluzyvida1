import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'

const WhatsAppFloatNew = () => {
  const whatsappLink = "https://wa.me/5493516798793?text=Hola%20Maestro%20Isa%C3%ADas,%20necesito%20su%20ayuda%20urgente"

  return (
    <motion.a 
      href={whatsappLink}
      className="whatsapp-float-new" 
      target="_blank" 
      rel="noopener noreferrer" 
      aria-label="Contactar por WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ 
        scale: 1, 
        opacity: 1
      }}
      transition={{ 
        delay: 0.5,
        type: "spring",
        stiffness: 260,
        damping: 20
      }}
      whileHover={{ 
        scale: 1.1,
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.9 }}
    >
      <motion.div
        className="whatsapp-icon-wrapper"
        animate={{ 
          rotate: [0, 8, -8, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Icon icon="bi:whatsapp" width="38" height="38" />
      </motion.div>
      <span className="whatsapp-tooltip">¡Escríbeme!</span>
      <motion.div 
        className="whatsapp-pulse-ring"
        animate={{
          scale: [1, 1.8],
          opacity: [0.6, 0]
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: [0.4, 0, 0.6, 1],
          repeatDelay: 0.5
        }}
      />
    </motion.a>
  )
}

export default WhatsAppFloatNew


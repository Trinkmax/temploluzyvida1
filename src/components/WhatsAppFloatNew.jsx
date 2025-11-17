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
          rotate: [0, 10, -10, 0]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Icon icon="bi:whatsapp" width="32" height="32" />
      </motion.div>
      <span className="whatsapp-tooltip">¡Escríbeme!</span>
      <motion.div 
        className="whatsapp-pulse-ring"
        animate={{
          scale: [1, 1.5, 1.5],
          opacity: [0.5, 0, 0]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeOut"
        }}
      />
    </motion.a>
  )
}

export default WhatsAppFloatNew


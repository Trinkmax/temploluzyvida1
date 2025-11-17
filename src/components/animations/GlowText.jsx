import { motion } from 'framer-motion'

const GlowText = ({ children, delay = 0, color = '#DAA520', className = '' }) => {
  return (
    <motion.span
      className={className}
      initial={{ 
        opacity: 0, 
        textShadow: '0 0 0px rgba(218, 165, 32, 0)' 
      }}
      whileInView={{ 
        opacity: 1,
        textShadow: [
          `0 0 10px ${color}`,
          `0 0 20px ${color}`,
          `0 0 30px ${color}`,
          `0 0 20px ${color}`,
          `0 0 10px ${color}`,
        ]
      }}
      viewport={{ once: true }}
      transition={{ 
        duration: 2,
        delay: delay / 1000,
        repeat: Infinity,
        repeatType: "reverse"
      }}
    >
      {children}
    </motion.span>
  )
}

export default GlowText


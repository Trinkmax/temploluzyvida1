import { motion } from 'framer-motion'

const GradientText = ({ children, delay = 0, className = '' }) => {
  return (
    <motion.span
      className={className}
      initial={{ 
        backgroundSize: '0% 100%',
        backgroundPosition: '0% 50%'
      }}
      whileInView={{ 
        backgroundSize: '100% 100%',
        backgroundPosition: '0% 50%'
      }}
      viewport={{ once: true }}
      transition={{
        duration: 1.2,
        delay: delay / 1000,
        ease: [0.16, 1, 0.3, 1]
      }}
      style={{
        background: 'linear-gradient(90deg, #DAA520 0%, #FFD700 50%, #DAA520 100%)',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundRepeat: 'no-repeat',
        display: 'inline-block'
      }}
    >
      {children}
    </motion.span>
  )
}

export default GradientText


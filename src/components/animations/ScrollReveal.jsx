import { motion } from 'framer-motion'

const ScrollReveal = ({ children, delay = 0, direction = 'up', className = '' }) => {
  const directions = {
    up: { y: 50, opacity: 0 },
    down: { y: -50, opacity: 0 },
    left: { x: -50, opacity: 0 },
    right: { x: 50, opacity: 0 }
  }

  return (
    <motion.div
      className={className}
      initial={directions[direction]}
      whileInView={{ 
        y: 0, 
        x: 0, 
        opacity: 1 
      }}
      viewport={{ 
        once: true, 
        amount: 0.3 
      }}
      transition={{
        duration: 0.8,
        delay: delay / 1000,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
    >
      {children}
    </motion.div>
  )
}

export default ScrollReveal


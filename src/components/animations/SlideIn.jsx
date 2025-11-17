import { motion } from 'framer-motion'

const SlideIn = ({ children, direction = 'up', delay = 0, duration = 0.4 }) => {
  const directions = {
    up: { y: 30 },
    down: { y: -30 },
    left: { x: 30 },
    right: { x: -30 }
  }

  const initial = {
    opacity: 0,
    ...directions[direction]
  }

  return (
    <motion.div
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-100px", amount: 0.2 }}
      transition={{ 
        duration, 
        delay: delay / 1000,
        ease: [0.25, 0.1, 0.25, 1]
      }}
    >
      {children}
    </motion.div>
  )
}

export default SlideIn


import { motion } from 'framer-motion'

const FloatingElement = ({ children, duration = 3, delay = 0, distance = 20 }) => {
  return (
    <motion.div
      animate={{
        y: [0, -distance, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  )
}

export default FloatingElement


import { motion } from 'framer-motion'

const FadeIn = ({ children, delay = 0, duration = 0.4 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
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

export default FadeIn


import { motion } from 'framer-motion'

const ScaleIn = ({ children, delay = 0, duration = 0.4, scale = 0.9 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale }}
      whileInView={{ opacity: 1, scale: 1 }}
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

export default ScaleIn


import { motion } from 'framer-motion'

const BlurIn = ({ children, delay = 0, duration = 0.6, className = '' }) => {
  return (
    <motion.div
      className={className}
      initial={{
        filter: 'blur(20px)',
        opacity: 0
      }}
      whileInView={{
        filter: 'blur(0px)',
        opacity: 1
      }}
      viewport={{ once: true }}
      transition={{
        duration,
        delay: delay / 1000,
        ease: [0.16, 1, 0.3, 1]
      }}
    >
      {children}
    </motion.div>
  )
}

export default BlurIn


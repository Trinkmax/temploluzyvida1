import { motion } from 'framer-motion'

const TextReveal = ({ children, delay = 0, className = '' }) => {
  return (
    <div style={{ overflow: 'hidden', display: 'inline-block' }}>
      <motion.div
        className={className}
        initial={{ y: "100%", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          delay: delay / 1000,
          ease: [0.33, 1, 0.68, 1]
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}

export default TextReveal


import { motion } from 'framer-motion'

const PulseGlow = ({ children, color = 'var(--secondary-color)', className = '' }) => {
  return (
    <motion.div
      className={className}
      animate={{
        boxShadow: [
          `0 0 0px ${color}00`,
          `0 0 20px ${color}80`,
          `0 0 40px ${color}60`,
          `0 0 20px ${color}80`,
          `0 0 0px ${color}00`,
        ],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  )
}

export default PulseGlow


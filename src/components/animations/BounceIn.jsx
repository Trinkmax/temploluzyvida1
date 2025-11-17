import { motion } from 'framer-motion'

const BounceIn = ({ children, delay = 0, direction = 'up' }) => {
  const directions = {
    up: { y: 100 },
    down: { y: -100 },
    left: { x: 100 },
    right: { x: -100 }
  }

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        ...directions[direction] 
      }}
      whileInView={{ 
        opacity: 1, 
        x: 0, 
        y: 0 
      }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.8,
        delay: delay / 1000,
        type: "spring",
        stiffness: 200,
        damping: 15
      }}
    >
      {children}
    </motion.div>
  )
}

export default BounceIn


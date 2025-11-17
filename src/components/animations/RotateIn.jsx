import { motion } from 'framer-motion'

const RotateIn = ({ children, delay = 0, duration = 0.6, direction = 'left' }) => {
  const rotations = {
    left: { rotate: -180 },
    right: { rotate: 180 },
    up: { rotateX: 180 },
    down: { rotateX: -180 }
  }

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        ...rotations[direction] 
      }}
      whileInView={{ 
        opacity: 1, 
        rotate: 0, 
        rotateX: 0 
      }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration,
        delay: delay / 1000,
        type: "spring",
        stiffness: 80
      }}
    >
      {children}
    </motion.div>
  )
}

export default RotateIn


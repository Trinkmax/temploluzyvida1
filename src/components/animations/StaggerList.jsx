import { motion } from 'framer-motion'

// Optimizado: Sin spring physics, solo easing
const StaggerList = ({ children, delay = 0 }) => {
  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: delay / 1000,
        staggerChildren: 0.08
      }
    }
  }

  const item = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  }

  return (
    <motion.ul
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2, margin: "-50px" }}
    >
      {children.map((child, index) => (
        <motion.li key={index} variants={item}>
          {child}
        </motion.li>
      ))}
    </motion.ul>
  )
}

export default StaggerList


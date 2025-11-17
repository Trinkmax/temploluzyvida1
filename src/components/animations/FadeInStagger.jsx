import { motion } from 'framer-motion'
import { memo } from 'react'

// Componente memoizado para evitar re-renders
const FadeInStagger = memo(({ children, delay = 0, staggerDelay = 0.05 }) => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: delay / 1000,
        staggerChildren: staggerDelay
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  }

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {Array.isArray(children) ? (
        children.map((child, index) => (
          <motion.div key={index} variants={item}>
            {child}
          </motion.div>
        ))
      ) : (
        <motion.div variants={item}>{children}</motion.div>
      )}
    </motion.div>
  )
})

FadeInStagger.displayName = 'FadeInStagger'

export default FadeInStagger


import { motion, useScroll, useSpring } from 'framer-motion'

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '4px',
        background: 'linear-gradient(90deg, var(--primary-color), var(--secondary-color), var(--accent-color))',
        transformOrigin: '0%',
        scaleX,
        zIndex: 9999,
        boxShadow: '0 0 10px rgba(218, 165, 32, 0.5)'
      }}
    />
  )
}

export default ScrollProgress


import { motion } from 'framer-motion'

const SplitText = ({ text, delay = 0, className = '' }) => {
  const words = text.split(' ')

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { 
        staggerChildren: 0.08, 
        delayChildren: delay / 1000 
      }
    })
  }

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100
      }
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100
      }
    }
  }

  return (
    <motion.div
      className={className}
      style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.3em' }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={child}
          style={{ display: 'inline-block' }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  )
}

export default SplitText


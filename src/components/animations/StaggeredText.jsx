import { motion } from 'framer-motion'

const StaggeredText = ({ text, delay = 0, className = '', as = 'span' }) => {
  const letters = Array.from(text)
  
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { 
        staggerChildren: 0.03, 
        delayChildren: delay / 1000 
      },
    }),
  }

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  }

  const Component = motion[as]

  return (
    <Component
      className={className}
      style={{ display: 'flex', overflow: 'hidden' }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={child}
          style={{ display: 'inline-block' }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </Component>
  )
}

export default StaggeredText


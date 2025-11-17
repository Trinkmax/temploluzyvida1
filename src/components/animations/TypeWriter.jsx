import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const TypeWriter = ({ text, delay = 0, speed = 0.05, cursor = true, className = '' }) => {
  const [displayedText, setDisplayedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayedText(text.slice(0, currentIndex + 1))
        setCurrentIndex(currentIndex + 1)
      } else {
        setIsComplete(true)
      }
    }, currentIndex === 0 ? delay : speed * 1000)

    return () => clearTimeout(timeout)
  }, [currentIndex, text, delay, speed])

  return (
    <span className={className}>
      {displayedText}
      {cursor && !isComplete && (
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          style={{ display: 'inline-block' }}
        >
          |
        </motion.span>
      )}
    </span>
  )
}

export default TypeWriter


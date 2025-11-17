import { motion } from 'framer-motion'

const WhatsAppFloat = () => {
  const whatsappLink = "https://wa.me/5493516798793?text=Hola%20Maestro%20Isa%C3%ADas,%20necesito%20su%20ayuda%20urgente"

  return (
    <motion.a 
      href={whatsappLink}
      className="whatsapp-float" 
      target="_blank" 
      rel="noopener noreferrer" 
      aria-label="Contactar por WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ 
        scale: 1, 
        opacity: 1,
        y: [0, -10, 0]
      }}
      transition={{ 
        scale: {
          delay: 1,
          type: "spring",
          stiffness: 200,
          damping: 15
        },
        y: {
          delay: 2,
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }}
      whileHover={{ 
        scale: 1.1,
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.95 }}
    >
      <svg viewBox="0 0 32 32" width="60" height="60">
        <path 
          fill="#fff" 
          d="M16 0C7.164 0 0 7.164 0 16c0 2.826.735 5.488 2.016 7.797L0 32l8.438-2.016A15.936 15.936 0 0016 32c8.836 0 16-7.164 16-16S24.836 0 16 0zm8.078 22.562c-.344.969-2.016 1.781-3.297 2.016-.875.156-2.016.281-5.859-1.25-4.891-1.969-8.031-6.891-8.281-7.203-.234-.313-1.953-2.594-1.953-4.953 0-2.359 1.234-3.516 1.672-3.984.437-.469 0.953-.578 1.266-.578.313 0 .625.016.891.016.281 0 .672-.109 1.047.797.375.906 1.297 3.156 1.406 3.391.109.234.188.515.047.828-.141.313-.234.515-.469.781-.234.266-.469.578-.672.781-.234.234-.469.484-.203.953.266.469 1.188 1.953 2.547 3.156 1.75 1.547 3.219 2.031 3.672 2.266.453.234.719.203.984-.125.266-.328 1.156-1.344 1.469-1.797.313-.453.625-.375 1.047-.219.422.156 2.672 1.266 3.125 1.484.453.219.75.328.859.516.109.188.109 1.078-.234 2.047z"
        />
      </svg>
    </motion.a>
  )
}

export default WhatsAppFloat


import { motion } from 'framer-motion'

const fadeInVariants = {
  hidden: (direction) => ({
    opacity: 0,
    y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
    x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
  }),
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
  }
}

export function FadeIn({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.8,
  className = '',
  once = true,
}) {
  return (
    <motion.div
      variants={fadeInVariants}
      custom={direction}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-100px" }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default FadeIn

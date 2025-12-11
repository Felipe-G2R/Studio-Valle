import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import styles from './Button.module.css'

const MotionLink = motion(Link)

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  disabled = false,
  className = '',
  ...props
}) {
  const classNames = [
    styles.button,
    styles[variant],
    styles[size],
    className
  ].filter(Boolean).join(' ')

  const isInternal = href && href.startsWith('/')
  const isExternal = href && (href.startsWith('http') || href.startsWith('mailto') || href.startsWith('tel'))

  const motionProps = {
    className: classNames,
    whileHover: { scale: 1.02, y: -2 },
    whileTap: { scale: 0.98 },
    transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] },
    ...props
  }

  if (isInternal) {
    return (
      <MotionLink to={href} {...motionProps}>
        {children}
      </MotionLink>
    )
  }

  if (isExternal) {
    return (
      <motion.a href={href} target="_blank" rel="noopener noreferrer" {...motionProps}>
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button onClick={onClick} disabled={disabled} {...motionProps}>
      {children}
    </motion.button>
  )
}

export default Button

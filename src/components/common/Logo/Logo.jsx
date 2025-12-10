import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import styles from './Logo.module.css'

export function Logo({ variant = 'default', size = 'md' }) {
  const classNames = [
    styles.logo,
    styles[variant],
    styles[size]
  ].filter(Boolean).join(' ')

  return (
    <Link to="/" className={classNames}>
      <motion.img
        src="/images/logo.webp"
        alt="Studio Valle"
        className={styles.logoImage}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      />
    </Link>
  )
}

export default Logo

import { motion } from 'framer-motion'
import styles from './SectionTitle.module.css'

export function SectionTitle({
  title,
  subtitle,
  description,
  align = 'center',
  dark = false,
  className = ''
}) {
  const classNames = [
    styles.sectionTitle,
    styles[align],
    dark ? styles.dark : '',
    className
  ].filter(Boolean).join(' ')

  return (
    <motion.div
      className={classNames}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {subtitle && (
        <span className={styles.subtitle}>{subtitle}</span>
      )}
      <h2 className={styles.title}>{title}</h2>
      {description && (
        <p className={styles.description}>{description}</p>
      )}
      <div className={styles.divider}></div>
    </motion.div>
  )
}

export default SectionTitle

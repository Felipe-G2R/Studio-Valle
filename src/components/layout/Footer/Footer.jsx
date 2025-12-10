import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import styles from './Footer.module.css'

const socialLinks = [
  { name: 'Instagram', url: 'https://www.instagram.com/studiovallefotografia', icon: '📷' },
  { name: 'WhatsApp', url: 'https://wa.me/5511947906932', icon: '💬' },
]

const quickLinks = [
  { path: '/', label: 'Home' },
  { path: '/sobre', label: 'Sobre' },
  { path: '/portfolio', label: 'Portfólio' },
  { path: '/servicos', label: 'Serviços' },
  { path: '/contato', label: 'Contato' },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Brand Section */}
          <motion.div
            className={styles.brandSection}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img src="/images/logo.jpg" alt="Studio Valle" className={styles.logo} />
            <p className={styles.tagline}>
              No Vale do Paraíba, onde as montanhas guardam segredos e a beleza nunca dorme.
            </p>
            <div className={styles.social}>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className={styles.socialLink}
                  aria-label={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className={styles.linksSection}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className={styles.sectionTitle}>Navegação</h4>
            <nav className={styles.navLinks}>
              {quickLinks.map((link) => (
                <Link key={link.path} to={link.path} className={styles.navLink}>
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className={styles.contactSection}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className={styles.sectionTitle}>Contato</h4>
            <div className={styles.contactInfo}>
              <p>Vale do Paraíba, SP</p>
              <p>(11) 94790-6932</p>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            className={styles.ctaSection}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className={styles.sectionTitle}>Comece sua jornada</h4>
            <p className={styles.ctaText}>
              Tem uma história para contar? Adoraríamos ouvi-la.
            </p>
            <Link to="/contato" className={styles.ctaButton}>
              Fale Conosco
            </Link>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            © {currentYear} Studio Valle. Todos os direitos reservados.
          </p>
          <p className={styles.quote}>
            "Respire fundo. Abra os olhos. O mundo ainda é belo."
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

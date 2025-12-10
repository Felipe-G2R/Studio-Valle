import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Button } from '../../components/common/Button'
import { SectionTitle } from '../../components/common/SectionTitle'
import { SEO } from '../../components/common/SEO'
import { FadeIn } from '../../components/animations/FadeIn'
import { TextReveal } from '../../components/animations/TextReveal'
import { StaggerContainer, StaggerItem } from '../../components/animations/StaggerContainer'
import { portfolioCategories, portfolioImages } from '../../data/portfolio'
import styles from './Home.module.css'

// Hero Section
function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroOverlay}></div>
      <div className={styles.heroBackground}>
        <motion.div
          className={styles.heroImageWrapper}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <img
            src="/images/portfolio/ensaio-fotografico/09.webp"
            alt="Studio Valle"
            className={styles.heroImage}
          />
        </motion.div>
      </div>

      <div className={`container ${styles.heroContent}`}>
        <motion.div
          className={styles.heroText}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.p
            className={styles.heroSubtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Studio Valle apresenta
          </motion.p>

          <h1 className={styles.heroTitle}>
            <TextReveal text="Respire fundo." delay={1.2} />
            <br />
            <TextReveal text="Abra os olhos." delay={1.8} />
            <br />
            <span className={styles.heroHighlight}>
              <TextReveal text="O mundo ainda é belo." delay={2.4} />
            </span>
          </h1>

          <motion.p
            className={styles.heroDescription}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3.2 }}
          >
            Eternizamos momentos que lembram a todos que, apesar dos desafios,
            nosso mundo continua repleto de maravilhas.
          </motion.p>

          <motion.div
            className={styles.heroButtons}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3.6 }}
          >
            <Button href="/portfolio" variant="primary" size="lg">
              Ver Portfólio
            </Button>
            <Button href="/contato" variant="secondary" size="lg">
              Fale Conosco
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.scrollIndicator}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4 }}
        >
          <span>Scroll</span>
          <motion.div
            className={styles.scrollLine}
            animate={{ scaleY: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </div>
    </section>
  )
}

// About Preview Section
function AboutPreview() {
  return (
    <section className={`section ${styles.aboutPreview}`}>
      <div className="container">
        <div className={styles.aboutGrid}>
          <FadeIn direction="left" className={styles.aboutImage}>
            <div className={styles.imageFrame}>
              <img
                src="/images/portfolio/ensaio-fotografico/03.webp"
                alt="Studio Valle"
                loading="lazy"
              />
            </div>
          </FadeIn>

          <FadeIn direction="right" className={styles.aboutContent}>
            <span className="text-label">Nossa Essência</span>
            <h2 className="h2">Somos contadores de histórias visuais</h2>
            <p className={styles.aboutText}>
              No Studio Valle, nossa missão é resgatar, por meio da fotografia,
              o olhar para a beleza que nos cerca diariamente. Inspirados pela
              exuberância do Vale do Paraíba, buscamos capturar a essência da
              criação em todas as suas formas.
            </p>
            <p className={styles.aboutQuote}>
              "Das majestosas catedrais que tocam o céu às delicadas pétalas
              de uma flor silvestre. A cada clique, uma declaração: a beleza
              ainda existe."
            </p>
            <Button href="/sobre" variant="secondary">
              Conheça Nossa História
            </Button>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

// Portfolio Preview Section
function PortfolioPreview() {
  return (
    <section className={`section bg-secondary ${styles.portfolioPreview}`}>
      <div className="container">
        <SectionTitle
          subtitle="Nosso Trabalho"
          title="Histórias Visuais"
          description="Cada imagem carrega uma história. Qual delas fala com você?"
        />

        <StaggerContainer className={styles.categoriesGrid}>
          {portfolioCategories.map((category) => {
            const images = portfolioImages[category.id] || []
            const previewImage = images[0]?.src || ''

            return (
              <StaggerItem key={category.id}>
                <Link
                  to={`/portfolio?categoria=${category.id}`}
                  className={styles.categoryCard}
                >
                  <div className={styles.categoryImage}>
                    <img src={previewImage} alt={category.title} />
                    <div className={styles.categoryOverlay}>
                      <span className={styles.categoryIcon}>{category.icon}</span>
                    </div>
                  </div>
                  <div className={styles.categoryInfo}>
                    <h3>{category.title}</h3>
                    <p>{category.subtitle}</p>
                  </div>
                </Link>
              </StaggerItem>
            )
          })}
        </StaggerContainer>

        <FadeIn className={styles.portfolioButton}>
          <Button href="/portfolio" variant="primary">
            Ver Todo o Portfólio
          </Button>
        </FadeIn>
      </div>
    </section>
  )
}

// CTA Section
function CTASection() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.ctaBackground}>
        <img
          src="/images/portfolio/banda-musica/Banda.webp"
          alt="CTA Background"
          loading="lazy"
        />
      </div>
      <div className={styles.ctaOverlay}></div>

      <div className={`container ${styles.ctaContent}`}>
        <FadeIn>
          <span className={styles.ctaSubtitle}>Comece Sua Jornada</span>
          <h2 className={styles.ctaTitle}>
            Tem uma história para contar?
            <br />
            <span>Adoraríamos ouvi-la.</span>
          </h2>
          <p className={styles.ctaDescription}>
            O primeiro passo de toda grande jornada é um simples "olá".
          </p>
          <Button href="/contato" variant="primary" size="lg">
            Entre em Contato
          </Button>
        </FadeIn>
      </div>
    </section>
  )
}

// Main Home Component
function Home() {
  return (
    <>
      <SEO
        title={null}
        description="Estúdio de fotografia profissional no Vale do Paraíba, SP. Ensaios fotográficos, cobertura de eventos esportivos e shows musicais. Respire fundo. Abra os olhos. O mundo ainda é belo."
        url="https://studiovalle.com.br"
      />
      <div className={styles.home}>
        <HeroSection />
        <AboutPreview />
        <PortfolioPreview />
        <CTASection />
      </div>
    </>
  )
}

export default Home

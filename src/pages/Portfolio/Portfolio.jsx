import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionTitle } from '../../components/common/SectionTitle'
import { SEO } from '../../components/common/SEO'
import { FadeIn } from '../../components/animations/FadeIn'
import { portfolioCategories, portfolioImages } from '../../data/portfolio'
import styles from './Portfolio.module.css'

// Lightbox Component
function Lightbox({ image, onClose, onPrev, onNext }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    window.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [onClose, onPrev, onNext])

  return (
    <motion.div
      className={styles.lightbox}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <button className={styles.lightboxClose} onClick={onClose}>
        ✕
      </button>
      <button
        className={`${styles.lightboxNav} ${styles.lightboxPrev}`}
        onClick={(e) => { e.stopPropagation(); onPrev() }}
      >
        ‹
      </button>
      <motion.div
        className={styles.lightboxContent}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <img src={image.src} alt={image.alt} />
      </motion.div>
      <button
        className={`${styles.lightboxNav} ${styles.lightboxNext}`}
        onClick={(e) => { e.stopPropagation(); onNext() }}
      >
        ›
      </button>
    </motion.div>
  )
}

// Portfolio Hero
function PortfolioHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroOverlay}></div>
      <div className={styles.heroBackground}>
        <img
          src="/images/portfolio/banda-musica/Banda-303.jpg"
          alt="Portfolio"
        />
      </div>
      <div className={`container ${styles.heroContent}`}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <span className={styles.heroSubtitle}>Nosso Trabalho</span>
          <h1 className={styles.heroTitle}>Portfólio</h1>
          <p className={styles.heroDescription}>
            Cada imagem carrega uma história. Qual delas fala com você?
          </p>
        </motion.div>
      </div>
    </section>
  )
}

// Tabs Component
function PortfolioTabs({ activeTab, onTabChange }) {
  return (
    <div className={styles.tabs}>
      {portfolioCategories.map((category) => (
        <button
          key={category.id}
          className={`${styles.tab} ${activeTab === category.id ? styles.active : ''}`}
          onClick={() => onTabChange(category.id)}
        >
          <span className={styles.tabIcon}>{category.icon}</span>
          <span className={styles.tabTitle}>{category.title}</span>
          {activeTab === category.id && (
            <motion.div
              className={styles.tabIndicator}
              layoutId="tabIndicator"
              transition={{ duration: 0.3 }}
            />
          )}
        </button>
      ))}
    </div>
  )
}

// Category Info
function CategoryInfo({ category }) {
  return (
    <motion.div
      className={styles.categoryInfo}
      key={category.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className={styles.categoryTitle}>{category.title}</h2>
      <p className={styles.categorySubtitle}>{category.subtitle}</p>
      <p className={styles.categoryDescription}>{category.fullDescription}</p>
    </motion.div>
  )
}

// Gallery Grid
function GalleryGrid({ images, onImageClick }) {
  return (
    <motion.div
      className={styles.gallery}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {images.map((image, index) => (
        <motion.div
          key={image.id}
          className={styles.galleryItem}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          onClick={() => onImageClick(index)}
        >
          <div className={styles.imageWrapper}>
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
            />
            <div className={styles.imageOverlay}>
              <span className={styles.viewIcon}>🔍</span>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}

// Main Portfolio Component
function Portfolio() {
  const [searchParams, setSearchParams] = useSearchParams()
  const initialCategory = searchParams.get('categoria') || 'ensaio-fotografico'
  const [activeTab, setActiveTab] = useState(initialCategory)
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const activeCategory = portfolioCategories.find(cat => cat.id === activeTab)
  const images = portfolioImages[activeTab] || []

  const handleTabChange = (categoryId) => {
    setActiveTab(categoryId)
    setSearchParams({ categoria: categoryId })
  }

  const openLightbox = (index) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)

  const goToPrev = () => {
    setLightboxIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    )
  }

  const goToNext = () => {
    setLightboxIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    )
  }

  return (
    <>
      <SEO
        title="Portfólio"
        description="Confira nosso portfólio de fotografia profissional. Ensaios fotográficos, cobertura de eventos esportivos e shows musicais no Vale do Paraíba."
        url="https://studiovalle.com.br/portfolio"
      />
      <div className={styles.portfolio}>
        <PortfolioHero />

      <section className={`section ${styles.portfolioSection}`}>
        <div className="container">
          <PortfolioTabs
            activeTab={activeTab}
            onTabChange={handleTabChange}
          />

          <AnimatePresence mode="wait">
            <CategoryInfo key={activeTab} category={activeCategory} />
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <GalleryGrid
              key={activeTab}
              images={images}
              onImageClick={openLightbox}
            />
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`section bg-accent ${styles.ctaSection}`}>
        <div className="container text-center">
          <FadeIn>
            <h2 className="h2">Gostou do que viu?</h2>
            <p className={styles.ctaText}>
              Vamos criar algo incrível juntos. Entre em contato e conte sua história.
            </p>
            <a href="/contato" className={styles.ctaButton}>
              Fale Conosco
            </a>
          </FadeIn>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            image={images[lightboxIndex]}
            onClose={closeLightbox}
            onPrev={goToPrev}
            onNext={goToNext}
          />
        )}
      </AnimatePresence>
      </div>
    </>
  )
}

export default Portfolio

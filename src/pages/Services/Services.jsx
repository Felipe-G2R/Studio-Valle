import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Button } from '../../components/common/Button'
import { SectionTitle } from '../../components/common/SectionTitle'
import { SEO } from '../../components/common/SEO'
import { FadeIn } from '../../components/animations/FadeIn'
import { StaggerContainer, StaggerItem } from '../../components/animations/StaggerContainer'
import styles from './Services.module.css'

const services = [
  {
    id: 'ensaio',
    icon: '📸',
    title: 'Ensaios Fotográficos',
    subtitle: 'Sua essência em imagens',
    description: 'Ensaios pessoais, profissionais ou artísticos que capturam sua verdadeira essência. Do book profissional ao ensaio intimista, cada sessão é única.',
    features: [
      'Ensaios individuais e em grupo',
      'Books profissionais',
      'Ensaios temáticos',
      'Direção de arte personalizada',
      'Tratamento profissional de imagens'
    ],
    image: '/images/portfolio/ensaio-fotografico/03.jpg',
    link: '/portfolio?categoria=ensaio-fotografico'
  },
  {
    id: 'corrida',
    icon: '🏃',
    title: 'Eventos Esportivos',
    subtitle: 'O instante da superação',
    description: 'Cobertura fotográfica de corridas, maratonas e eventos esportivos. Capturamos a energia, a emoção e a vitória em cada frame.',
    features: [
      'Cobertura completa de eventos',
      'Fotos de largada e chegada',
      'Momentos de superação',
      'Entrega rápida pós-evento',
      'Pacotes para organizadores'
    ],
    image: '/images/portfolio/corrida/Corrida Mogi -3295.jpg',
    link: '/portfolio?categoria=corrida'
  },
  {
    id: 'musica',
    icon: '🎸',
    title: 'Shows & Eventos Musicais',
    subtitle: 'Onde o som vira imagem',
    description: 'Fotografia de shows, festivais e eventos musicais. A energia do palco eternizada em imagens que você pode ouvir.',
    features: [
      'Cobertura de shows e festivais',
      'Fotos de bastidores',
      'Material para divulgação',
      'Ensaios com bandas',
      'Capas de álbuns e singles'
    ],
    image: '/images/portfolio/banda-musica/Banda-303.jpg',
    link: '/portfolio?categoria=banda-musica'
  }
]

const process = [
  {
    step: '01',
    title: 'Conversa Inicial',
    description: 'Entendemos sua história, seus objetivos e o que você deseja eternizar.'
  },
  {
    step: '02',
    title: 'Planejamento',
    description: 'Criamos juntos o roteiro perfeito para capturar a essência do momento.'
  },
  {
    step: '03',
    title: 'Execução',
    description: 'Com técnica e sensibilidade, registramos cada detalhe significativo.'
  },
  {
    step: '04',
    title: 'Entrega',
    description: 'Suas imagens tratadas com carinho, prontas para eternizar memórias.'
  }
]

// Hero Section
function ServicesHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroOverlay}></div>
      <div className={styles.heroBackground}>
        <img
          src="/images/portfolio/ensaio-fotografico/11.jpg"
          alt="Serviços"
        />
      </div>
      <div className={`container ${styles.heroContent}`}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <span className={styles.heroSubtitle}>Nossos Serviços</span>
          <h1 className={styles.heroTitle}>Sua História, Nossa Arte</h1>
          <p className={styles.heroDescription}>
            Cada momento merece ser eternizado com a qualidade e sensibilidade que ele merece
          </p>
        </motion.div>
      </div>
    </section>
  )
}

// Services List
function ServicesList() {
  return (
    <section className={`section ${styles.servicesSection}`}>
      <div className="container">
        {services.map((service, index) => (
          <FadeIn key={service.id} delay={index * 0.1}>
            <div className={`${styles.serviceCard} ${index % 2 === 1 ? styles.reverse : ''}`}>
              <div className={styles.serviceImage}>
                <img src={service.image} alt={service.title} />
                <div className={styles.serviceIcon}>{service.icon}</div>
              </div>
              <div className={styles.serviceContent}>
                <span className={styles.serviceSubtitle}>{service.subtitle}</span>
                <h2 className={styles.serviceTitle}>{service.title}</h2>
                <p className={styles.serviceDescription}>{service.description}</p>
                <ul className={styles.serviceFeatures}>
                  {service.features.map((feature, i) => (
                    <li key={i}>
                      <span className={styles.checkIcon}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className={styles.serviceActions}>
                  <Link to={service.link} className={styles.viewPortfolio}>
                    Ver trabalhos →
                  </Link>
                  <Button href="/contato" variant="primary">
                    Solicitar Orçamento
                  </Button>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}

// Process Section
function ProcessSection() {
  return (
    <section className={`section bg-secondary ${styles.processSection}`}>
      <div className="container">
        <SectionTitle
          subtitle="Como Trabalhamos"
          title="Nosso Processo"
          description="Do primeiro contato à entrega final, cada etapa é pensada para criar a melhor experiência"
        />

        <StaggerContainer className={styles.processGrid}>
          {process.map((item, index) => (
            <StaggerItem key={index}>
              <div className={styles.processCard}>
                <span className={styles.processStep}>{item.step}</span>
                <h3 className={styles.processTitle}>{item.title}</h3>
                <p className={styles.processDescription}>{item.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

// CTA Section
function CTASection() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.ctaBackground}>
        <img src="/images/portfolio/ensaio-fotografico/09.jpg" alt="CTA" />
      </div>
      <div className={styles.ctaOverlay}></div>
      <div className={`container ${styles.ctaContent}`}>
        <FadeIn>
          <span className={styles.ctaSubtitle}>Pronto para começar?</span>
          <h2 className={styles.ctaTitle}>
            Tem uma história para contar?
            <br />
            <span>Vamos eternizá-la juntos.</span>
          </h2>
          <p className={styles.ctaDescription}>
            Entre em contato e receba um orçamento personalizado para seu projeto.
          </p>
          <Button href="/contato" variant="primary" size="lg">
            Solicitar Orçamento
          </Button>
        </FadeIn>
      </div>
    </section>
  )
}

// Main Services Component
function Services() {
  return (
    <>
      <SEO
        title="Serviços"
        description="Conheça nossos serviços de fotografia profissional: ensaios fotográficos, cobertura de eventos esportivos, shows e festivais musicais. Orçamento personalizado."
        url="https://studiovalle.com.br/servicos"
      />
      <div className={styles.services}>
        <ServicesHero />
        <ServicesList />
        <ProcessSection />
        <CTASection />
      </div>
    </>
  )
}

export default Services

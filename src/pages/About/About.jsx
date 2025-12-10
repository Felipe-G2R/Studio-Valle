import { motion } from 'framer-motion'
import { Button } from '../../components/common/Button'
import { SectionTitle } from '../../components/common/SectionTitle'
import { SEO } from '../../components/common/SEO'
import { FadeIn } from '../../components/animations/FadeIn'
import { StaggerContainer, StaggerItem } from '../../components/animations/StaggerContainer'
import styles from './About.module.css'

// Hero Section
function AboutHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroOverlay}></div>
      <div className={styles.heroBackground}>
        <img
          src="/images/portfolio/ensaio-fotografico/12.jpg"
          alt="Studio Valle"
        />
      </div>
      <div className={`container ${styles.heroContent}`}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <span className={styles.heroSubtitle}>Nossa Essência</span>
          <h1 className={styles.heroTitle}>Sobre o Studio Valle</h1>
          <p className={styles.heroDescription}>
            Onde cada olhar se torna eterno
          </p>
        </motion.div>
      </div>
    </section>
  )
}

// Story Section
function StorySection() {
  return (
    <section className={`section ${styles.storySection}`}>
      <div className="container">
        <div className={styles.storyGrid}>
          <FadeIn direction="left" className={styles.storyContent}>
            <span className="text-label">Capítulo 1</span>
            <h2 className="h2">O Despertar</h2>
            <p>
              Tudo começou com um pôr do sol no Vale do Paraíba.
            </p>
            <p>
              Não era um pôr do sol qualquer. Era daqueles que pintam o céu em tons
              que parecem impossíveis — laranja queimado, rosa antigo, dourado que
              escorre pelas montanhas como mel divino.
            </p>
            <p>
              Naquele momento, enquanto as cores dançavam sobre as serras que
              abraçam nosso vale, uma pergunta nasceu:
            </p>
            <blockquote className={styles.quote}>
              "Quantas pessoas estão vendo isso agora mesmo?
              Quantas estão perdendo essa obra-prima?"
            </blockquote>
            <p>
              A resposta doeu. E dessa dor nasceu uma missão.
            </p>
          </FadeIn>

          <FadeIn direction="right" className={styles.storyImage}>
            <img
              src="/images/portfolio/ensaio-fotografico/10.jpg"
              alt="Vale do Paraíba"
            />
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

// Mission Section
function MissionSection() {
  return (
    <section className={`section bg-secondary ${styles.missionSection}`}>
      <div className="container">
        <div className={styles.missionGrid}>
          <FadeIn direction="left" className={styles.missionImage}>
            <img
              src="/images/portfolio/ensaio-fotografico/07.jpg"
              alt="Nossa missão"
            />
          </FadeIn>

          <FadeIn direction="right" className={styles.missionContent}>
            <span className="text-label">Capítulo 2</span>
            <h2 className="h2">A Missão</h2>
            <p>
              O Studio Valle não é apenas um estúdio de fotografia.
            </p>
            <p className={styles.highlight}>
              Somos guardiões de momentos. Caçadores de beleza escondida.
              Tradutores da linguagem silenciosa que existe entre a luz e a
              sombra, entre um sorriso e uma lágrima, entre o efêmero e o eterno.
            </p>
            <p>
              Nossa câmera é uma ferramenta de despertar. Cada clique é um convite:
            </p>
            <p className={styles.emphasis}>
              "Olhe. Veja. Sinta."
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

// Values Section
function ValuesSection() {
  const values = [
    {
      title: 'Contemplação',
      description: 'Antes de fotografar, contemplamos. Um ensaio começa com uma pausa — um momento para estar presente.',
      icon: '🌅'
    },
    {
      title: 'Transcendência',
      description: 'Encontramos poesia no comum. Onde outros veem o banal, nós revelamos o sagrado.',
      icon: '✨'
    },
    {
      title: 'Eternidade',
      description: 'Cada imagem é uma âncora no rio do tempo — um "aqui estive" que atravessará gerações.',
      icon: '♾️'
    },
    {
      title: 'Conexão',
      description: 'Histórias são pontes entre pessoas, entre gerações, entre o passado e o futuro.',
      icon: '🤝'
    }
  ]

  return (
    <section className={`section ${styles.valuesSection}`}>
      <div className="container">
        <SectionTitle
          subtitle="Nossos Pilares"
          title="No que acreditamos"
          description="Os valores que guiam cada clique"
        />

        <StaggerContainer className={styles.valuesGrid}>
          {values.map((value, index) => (
            <StaggerItem key={index}>
              <div className={styles.valueCard}>
                <span className={styles.valueIcon}>{value.icon}</span>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

// Location Section
function LocationSection() {
  return (
    <section className={`section bg-dark ${styles.locationSection}`}>
      <div className="container">
        <div className={styles.locationGrid}>
          <FadeIn className={styles.locationContent}>
            <span className={styles.locationSubtitle}>Capítulo 3</span>
            <h2 className={styles.locationTitle}>O Vale</h2>
            <p>
              Não é coincidência que nascemos aqui.
            </p>
            <p>
              O Vale do Paraíba carrega em suas montanhas a memória de séculos.
              Suas igrejas barrocas tocam o céu como orações de pedra. Seus rios
              contam histórias antigas. Sua gente guarda nos olhos a sabedoria
              de quem aprendeu a contemplar.
            </p>
            <p>
              Esse vale nos ensinou que a beleza não precisa ser procurada em
              lugares distantes. Ela está aqui — na névoa que abraça as serras
              ao amanhecer, no sino que anuncia o entardecer, no sorriso do
              vendedor de pamonha na estrada.
            </p>
            <p className={styles.locationHighlight}>
              A beleza está onde você decide enxergá-la.
            </p>
          </FadeIn>

          <FadeIn delay={0.2} className={styles.locationImage}>
            <img
              src="/images/portfolio/corrida/Corrida Mogi -3295.jpg"
              alt="Vale do Paraíba"
            />
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

// CTA Section
function CTASection() {
  return (
    <section className={`section ${styles.ctaSection}`}>
      <div className="container text-center">
        <FadeIn>
          <h2 className="h2">Pronto para eternizar sua história?</h2>
          <p className={styles.ctaText}>
            Junte-se a nós nessa jornada. Redescubra a beleza.
            Veja o extraordinário no ordinário.
          </p>
          <div className={styles.ctaButtons}>
            <Button href="/portfolio" variant="primary" size="lg">
              Ver Portfólio
            </Button>
            <Button href="/contato" variant="secondary" size="lg">
              Fale Conosco
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

// Main About Component
function About() {
  return (
    <>
      <SEO
        title="Sobre Nós"
        description="Conheça a história do Studio Valle. Somos guardiões de momentos, caçadores de beleza escondida no Vale do Paraíba. Fotografia profissional com alma e propósito."
        url="https://studiovalle.com.br/sobre"
      />
      <div className={styles.about}>
        <AboutHero />
        <StorySection />
        <MissionSection />
        <ValuesSection />
        <LocationSection />
        <CTASection />
      </div>
    </>
  )
}

export default About

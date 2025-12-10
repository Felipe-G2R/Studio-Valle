import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { SEO } from '../../components/common/SEO'
import { FadeIn } from '../../components/animations/FadeIn'
import styles from './Contact.module.css'

const serviceOptions = [
  { value: '', label: 'Selecione um serviço' },
  { value: 'ensaio', label: 'Ensaio Fotográfico' },
  { value: 'corrida', label: 'Cobertura de Eventos Esportivos' },
  { value: 'musica', label: 'Shows e Eventos Musicais' },
  { value: 'outro', label: 'Outro' }
]

// Contact Hero
function ContactHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroOverlay}></div>
      <div className={styles.heroBackground}>
        <img
          src="/images/portfolio/ensaio-fotografico/14.jpg"
          alt="Contato"
        />
      </div>
      <div className={`container ${styles.heroContent}`}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <span className={styles.heroSubtitle}>Comece Sua Jornada</span>
          <h1 className={styles.heroTitle}>Entre em Contato</h1>
          <p className={styles.heroDescription}>
            O primeiro passo de toda grande jornada é um simples "olá"
          </p>
        </motion.div>
      </div>
    </section>
  )
}

// Contact Form
function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm()

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    // Simular envio
    await new Promise(resolve => setTimeout(resolve, 1500))
    console.log('Form data:', data)
    setIsSubmitting(false)
    setIsSubmitted(true)
    reset()
  }

  if (isSubmitted) {
    return (
      <motion.div
        className={styles.successMessage}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <span className={styles.successIcon}>✓</span>
        <h3>Mensagem Enviada!</h3>
        <p>
          Obrigado por entrar em contato. Retornaremos em breve para
          começarmos a criar algo incrível juntos.
        </p>
        <button
          className={styles.newMessage}
          onClick={() => setIsSubmitted(false)}
        >
          Enviar nova mensagem
        </button>
      </motion.div>
    )
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.label}>Nome</label>
          <input
            type="text"
            id="name"
            className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
            placeholder="Seu nome completo"
            {...register('name', { required: 'Nome é obrigatório' })}
          />
          {errors.name && (
            <span className={styles.error}>{errors.name.message}</span>
          )}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>E-mail</label>
          <input
            type="email"
            id="email"
            className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
            placeholder="seu@email.com"
            {...register('email', {
              required: 'E-mail é obrigatório',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'E-mail inválido'
              }
            })}
          />
          {errors.email && (
            <span className={styles.error}>{errors.email.message}</span>
          )}
        </div>
      </div>

      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label htmlFor="phone" className={styles.label}>Telefone</label>
          <input
            type="tel"
            id="phone"
            className={`${styles.input} ${errors.phone ? styles.inputError : ''}`}
            placeholder="(00) 00000-0000"
            {...register('phone', { required: 'Telefone é obrigatório' })}
          />
          {errors.phone && (
            <span className={styles.error}>{errors.phone.message}</span>
          )}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="service" className={styles.label}>Serviço</label>
          <select
            id="service"
            className={`${styles.select} ${errors.service ? styles.inputError : ''}`}
            {...register('service', { required: 'Selecione um serviço' })}
          >
            {serviceOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.service && (
            <span className={styles.error}>{errors.service.message}</span>
          )}
        </div>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="message" className={styles.label}>Sua Mensagem</label>
        <textarea
          id="message"
          rows={6}
          className={`${styles.textarea} ${errors.message ? styles.inputError : ''}`}
          placeholder="Conte-nos sobre sua história, seu projeto ou evento..."
          {...register('message', {
            required: 'Mensagem é obrigatória',
            minLength: {
              value: 20,
              message: 'Conte-nos um pouco mais (mínimo 20 caracteres)'
            }
          })}
        />
        {errors.message && (
          <span className={styles.error}>{errors.message.message}</span>
        )}
      </div>

      <button
        type="submit"
        className={styles.submitButton}
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <span className={styles.spinner}></span>
            Enviando...
          </>
        ) : (
          'Enviar Mensagem'
        )}
      </button>
    </form>
  )
}

// Contact Info
function ContactInfo() {
  const contactItems = [
    {
      icon: '📍',
      title: 'Localização',
      content: 'Vale do Paraíba, São Paulo',
      description: 'Atendemos toda a região'
    },
    {
      icon: '📱',
      title: 'WhatsApp',
      content: '(11) 94790-6932',
      description: 'Atendimento rápido',
      link: 'https://wa.me/5511947906932'
    },
    {
      icon: '📷',
      title: 'Instagram',
      content: '@studiovallefotografia',
      description: 'Siga nosso trabalho',
      link: 'https://www.instagram.com/studiovallefotografia'
    },
    {
      icon: '🕐',
      title: 'Horário',
      content: 'Seg - Sex: 9h às 18h',
      description: 'Sáb: 9h às 13h'
    }
  ]

  return (
    <div className={styles.contactInfo}>
      <h2 className={styles.infoTitle}>Informações de Contato</h2>
      <p className={styles.infoDescription}>
        Tem uma história para contar? Adoraríamos ouvi-la.
        Entre em contato pelos canais abaixo.
      </p>

      <div className={styles.infoItems}>
        {contactItems.map((item, index) => (
          <FadeIn key={index} delay={index * 0.1}>
            <div className={styles.infoItem}>
              <span className={styles.infoIcon}>{item.icon}</span>
              <div>
                <h3>{item.title}</h3>
                {item.link ? (
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className={styles.infoContent}>
                    {item.content}
                  </a>
                ) : (
                  <p className={styles.infoContent}>{item.content}</p>
                )}
                <p className={styles.infoNote}>{item.description}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      <div className={styles.socialSection}>
        <h3>Redes Sociais</h3>
        <div className={styles.socialLinks}>
          <a href="https://www.instagram.com/studiovallefotografia" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Instagram">📷</a>
          <a href="https://www.instagram.com/victorluizf8" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Instagram Fotógrafo">👤</a>
          <a href="https://wa.me/5511947906932" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="WhatsApp">💬</a>
        </div>
      </div>
    </div>
  )
}

// Main Contact Component
function Contact() {
  return (
    <>
      <SEO
        title="Contato"
        description="Entre em contato com o Studio Valle. Solicite um orçamento para ensaios fotográficos, cobertura de eventos e shows. WhatsApp: (11) 94790-6932."
        url="https://studiovalle.com.br/contato"
      />
      <div className={styles.contact}>
        <ContactHero />

      <section className={`section ${styles.contactSection}`}>
        <div className="container">
          <div className={styles.contactGrid}>
            <FadeIn direction="left">
              <ContactInfo />
            </FadeIn>

            <FadeIn direction="right">
              <div className={styles.formWrapper}>
                <h2 className={styles.formTitle}>Envie sua Mensagem</h2>
                <p className={styles.formDescription}>
                  Preencha o formulário abaixo e entraremos em contato o mais breve possível.
                </p>
                <ContactForm />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      </div>
    </>
  )
}

export default Contact

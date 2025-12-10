import { useEffect } from 'react'

const defaultMeta = {
  title: 'Studio Valle | Fotografia Profissional no Vale do Paraíba',
  description: 'Estúdio de fotografia profissional no Vale do Paraíba, SP. Ensaios fotográficos, cobertura de eventos esportivos e shows musicais.',
  image: '/images/og-image.jpg',
  url: 'https://studiovalle.com.br'
}

export function SEO({
  title,
  description,
  image,
  url,
  type = 'website'
}) {
  const seo = {
    title: title ? `${title} | Studio Valle` : defaultMeta.title,
    description: description || defaultMeta.description,
    image: image || defaultMeta.image,
    url: url || defaultMeta.url
  }

  useEffect(() => {
    // Update document title
    document.title = seo.title

    // Update meta tags
    const updateMeta = (name, content, property = false) => {
      const attribute = property ? 'property' : 'name'
      let meta = document.querySelector(`meta[${attribute}="${name}"]`)
      if (meta) {
        meta.setAttribute('content', content)
      } else {
        meta = document.createElement('meta')
        meta.setAttribute(attribute, name)
        meta.setAttribute('content', content)
        document.head.appendChild(meta)
      }
    }

    // Standard meta tags
    updateMeta('description', seo.description)

    // Open Graph tags
    updateMeta('og:title', seo.title, true)
    updateMeta('og:description', seo.description, true)
    updateMeta('og:image', seo.image, true)
    updateMeta('og:url', seo.url, true)
    updateMeta('og:type', type, true)

    // Twitter tags
    updateMeta('twitter:title', seo.title, true)
    updateMeta('twitter:description', seo.description, true)
    updateMeta('twitter:image', seo.image, true)

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]')
    if (canonical) {
      canonical.setAttribute('href', seo.url)
    }
  }, [seo.title, seo.description, seo.image, seo.url, type])

  return null
}

export default SEO

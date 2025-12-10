import { Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'

// Lazy loading das páginas
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Portfolio = lazy(() => import('./pages/Portfolio'))
const Services = lazy(() => import('./pages/Services'))
const Contact = lazy(() => import('./pages/Contact'))

// Loading component
function Loading() {
  return (
    <div className="loading-screen">
      <div className="loading-content">
        <div className="loading-spinner"></div>
        <p>Carregando...</p>
      </div>
      <style>{`
        .loading-screen {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--color-bg-primary);
        }
        .loading-content {
          text-align: center;
        }
        .loading-spinner {
          width: 40px;
          height: 40px;
          border: 3px solid var(--color-border);
          border-top-color: var(--color-accent-primary);
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin: 0 auto var(--space-md);
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        .loading-content p {
          font-family: var(--font-serif);
          font-style: italic;
          color: var(--color-text-secondary);
        }
      `}</style>
    </div>
  )
}

function Router() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/:category" element={<Portfolio />} />
        <Route path="/servicos" element={<Services />} />
        <Route path="/contato" element={<Contact />} />
      </Routes>
    </Suspense>
  )
}

export default Router

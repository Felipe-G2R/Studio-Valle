import { BrowserRouter } from 'react-router-dom'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import Router from './Router'

// Styles
import './styles/reset.css'
import './styles/variables.css'
import './styles/typography.css'
import './styles/animations.css'
import './styles/global.css'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <main className="main">
          <Router />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App

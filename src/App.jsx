import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeProvider'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
import ThankYou from './pages/ThankYou'
import Results from './pages/Results'
import Credentials from './pages/Credentials'
import NotFound from './pages/NotFound'
import './App.css'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/results" element={<Results />} />
          <Route path="/credentials" element={<Credentials />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <BackToTop />
        <Footer />
      </Router>
    </ThemeProvider>
  )
}

export default App

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import { HelmetProvider } from 'react-helmet-async'
import SEO from './components/SEO'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import RoleDetail from './pages/RoleDetail'

// Home page (all sections)
function HomePage() {
  return (
    <>
      <SEO />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <BrowserRouter>
          <div className="min-h-screen bg-[#09090b] text-white">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/role/:slug" element={<RoleDetail />} />
            </Routes>
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </HelmetProvider>
  )
}

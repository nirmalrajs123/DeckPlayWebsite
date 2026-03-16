import './App.css'
import Home from './home.jsx'
import Pricing from './pricing.jsx'
import Contact from './Contact.jsx'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Solutions from './solutions.jsx'
import CMSLogin from './CMSLogin.jsx'
import CMSDashboard from './CMSDashboard.jsx'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'

function Layout() {
  const location = useLocation()
  const isCMSLoginPage = location.pathname === '/cms/login'
  const isCMSDashboardPage = location.pathname === '/cms/dashboard'
  const hideHeaderFooter = isCMSLoginPage || isCMSDashboardPage

  return (
    <>
      {!hideHeaderFooter && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/cms/login" element={<CMSLogin />} />
      </Routes>

      <Routes>
        <Route path="/cms/dashboard" element={<CMSDashboard />} />
      </Routes>
      {!hideHeaderFooter && <Footer />}
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}

export default App
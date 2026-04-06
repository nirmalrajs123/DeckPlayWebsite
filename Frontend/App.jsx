import './App.css'
import Home from './home.jsx'
import Pricing from './pricing.jsx'
import Contact from './Contact.jsx'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Solutions from './solutions.jsx'
import Platform from './platform.jsx'
import Resources from './resources.jsx'
import CMSLogin from './CMSLogin.jsx'
import CMSDashboard from './CMSDashboard.jsx'
import PaymentSuccess from './PaymentSuccess.jsx'
import PaymentCancel from './PaymentCancel.jsx'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'

function Layout() {
  const location = useLocation()
  const isCMSLoginPage = location.pathname === '/cms/login'
  const isCMSDashboardPage = location.pathname === '/cms/dashboard'
  const isPaymentPage = location.pathname === '/payment-success' || location.pathname === '/payment-cancel'
  const hideHeaderFooter = isCMSLoginPage || isCMSDashboardPage || isPaymentPage

  return (
    <>
      {!hideHeaderFooter && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/solutions/:industry?" element={<Solutions />} />
        <Route path="/platform" element={<Platform />} />
        <Route path="/industries" element={<Solutions />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/cms/login" element={<CMSLogin />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
        <Route path="/payment-cancel" element={<PaymentCancel />} />
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
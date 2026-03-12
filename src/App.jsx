import './App.css'
import Home from './home.jsx'
import Pricing from './pricing.jsx'
import Contact from './Contact.jsx'
import Footer from './Footer.jsx'
import Solutions from './solutions.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/solutions" element={<Solutions />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App

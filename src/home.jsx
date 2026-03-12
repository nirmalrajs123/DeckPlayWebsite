import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <nav className="navbar">
                <div className="nav-left">
                    <Link to="/" className="logo-container">
                        <svg className="logo-icon deck-play-logo" viewBox="0 0 100 70" xmlns="http://www.w3.org/2000/svg" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="5" y="5" width="90" height="60" rx="12" ry="12" stroke="#5C5C5C" strokeWidth="5" />
                            <polygon points="40,22 40,48 62,35" stroke="#FF5722" strokeWidth="5" />
                        </svg>
                        <div className="logo-text" style={{ display: 'flex', gap: '4px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                            <span style={{ color: '#FF5722', fontWeight: 800 }}>DECK</span>
                            <span style={{ color: '#5C5C5C', fontWeight: 300 }}>PLAY</span>
                        </div>
                    </Link>
                </div>

                <div className="nav-center">
                    <button className="btn-trial">Start Free Trial</button>
                    <Link to="/platform" className="nav-link">Platform</Link>
                    <Link to="/pricing" className="nav-link">Pricing</Link>
                    <Link to="/industries" className="nav-link">Industries</Link>
                    <Link to="/solutions" className="nav-link">Solutions</Link>
                    <Link to="/resources" className="nav-link">Resources</Link>
                    <Link to="/contact" className="nav-link">Contact Us</Link>
                </div>

                <div className="nav-right">
                    <Link to="/login" className="btn-login">Log in</Link>
                    <button className="btn-demo">Get Free Demo</button>
                </div>
            </nav>
            <header className="hero">
                <div className="hero-content">
                    <h1 className="hero-title">
                        Digital Signage Price: <span className="highlight">Manage Once. Play Everywhere.</span>
                    </h1>
                    <p className="hero-subtitle">Elevate your brand with the world's most intuitive digital signage software.</p>
                </div>
            </header>


            <section className="features-section">
                <h2>Why choose Deck Play</h2>
                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-icon" style={{ width: '80px', height: '60px' }}>
                            <svg viewBox="0 0 64 48" width="80" height="60" xmlns="http://www.w3.org/2000/svg">
                                {/* Motion Lines */}
                                <line x1="32" y1="12" x2="36" y2="4" stroke="#8b80f9" strokeWidth="3" strokeLinecap="round" />
                                <line x1="42" y1="16" x2="50" y2="8" stroke="#8b80f9" strokeWidth="3" strokeLinecap="round" />
                                <line x1="24" y1="16" x2="20" y2="8" stroke="#8b80f9" strokeWidth="3" strokeLinecap="round" />

                                {/* Sleeve/Cuff */}
                                <rect x="4" y="20" width="12" height="24" rx="3" fill="#5c757c" />

                                {/* Hand */}
                                <path d="M16 24 
                                         C 16 20, 20 20, 24 20 
                                         L 48 20 
                                         C 52 20, 52 26, 48 26 
                                         L 34 26 
                                         C 36 26, 42 26, 42 30 
                                         C 42 34, 36 34, 34 34 
                                         C 36 34, 40 34, 40 38 
                                         C 40 42, 34 42, 30 42 
                                         L 16 42 Z" fill="#edbc9e" />
                            </svg>
                        </div>
                        <h3>Easy to use</h3>
                        <p>Drag & drop the content you want to display. And as a cloud-based digital signage solution, you have remote access.</p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon icon-screen">
                            <svg viewBox="0 0 24 24" width="48" height="48" fill="currentColor">
                                <path d="M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7l-2 3v1h8v-1l-2-3h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H3V4h18v12z" />
                            </svg>
                        </div>
                        <h3>1 Screen forever free</h3>
                        <p>Run Deck Play for free for one screen. Check out our features & then add all the screens & players you need.</p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon icon-support">
                            <svg viewBox="0 0 24 24" width="48" height="48" fill="currentColor">
                                <path d="M12 1c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h3c1.66 0 3-1.34 3-3v-7c0-4.97-4.03-9-9-9z" />
                            </svg>
                        </div>
                        <h3>Customer support</h3>
                        <p>Deck Play offers free tech support to all our customers in case they have questions with their digital signage app.</p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon icon-scalable">
                            <svg viewBox="0 0 24 24" width="48" height="48" fill="currentColor">
                                <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
                            </svg>
                        </div>
                        <h3>Scalable solution</h3>
                        <p>Deck Play allows you to scale from 1 to multiple screens, easily. That's the power of a cloud digital sign software.</p>
                    </div>
                </div>

                <div className="features-cta">
                    <button className="btn-demo large" style={{ borderRadius: '8px', padding: '1rem 3rem' }}>Get Started</button>
                </div>
            </section>

            <section className="faq-section" id="faq">
                <div className="faq-container">
                    <h2>Frequently Asked Questions</h2>
                    <div className="faq-grid">
                        {[
                            {
                                q: "Is the digital signature legally valid?",
                                a: "Yes. Our digital signatures comply with international electronic signature standards, including eIDAS and the ESIGN Act."
                            },
                            {
                                q: "Can I cancel anytime?",
                                a: "Yes. You can upgrade, downgrade, or cancel your plan anytime from your account settings without any hidden fees."
                            },
                            {
                                q: "Is my data secure?",
                                a: "Absolutely. We use industry-standard AES-256 encryption and secure storage to ensure your documents and data are always protected."
                            }

                        ].map((faq, idx) => (
                            <div key={idx} className="faq-item">
                                <div className="faq-question">{faq.q}</div>
                                <div className="faq-answer">{faq.a}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;

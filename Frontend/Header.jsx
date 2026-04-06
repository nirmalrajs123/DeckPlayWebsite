import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
    const [isPricingHovered, setIsPricingHovered] = useState(false);
    const [isSolutionsHovered, setIsSolutionsHovered] = useState(false);
    const [activePopup, setActivePopup] = useState(null);
    const [popupIndex, setPopupIndex] = useState(0);

    const popups = [
        { title: "Live Deployment", desc: "New node active in Sharjah HQ 🚀", icon: "🌐" },
        { title: "Network Efficiency", desc: "Delta-sync just saved 4.2GB bandwidth", icon: "⚡" },
        { title: "Enterprise Milestone", desc: "Pro Plan now supports 1000+ screens", icon: "🏆" }
    ];

    const navigate = useNavigate();

    useEffect(() => {
        const interval = setInterval(() => {
            setActivePopup(popups[popupIndex]);
            setPopupIndex((prev) => (prev + 1) % popups.length);

            // Auto dismiss after 4 seconds
            setTimeout(() => setActivePopup(null), 4000);
        }, 10000); // Trigger every 10 seconds

        return () => clearInterval(interval);
    }, [popupIndex, popups]); // Added popups to dependency array

    return (
        <>
            <nav className="navbar" style={{
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
                background: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(12px)',
                borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.03)'
            }}>
                <div className="nav-left">
                    <Link to="/" className="logo-container">
                        <svg className="logo-icon deck-play-logo" viewBox="0 0 100 70" xmlns="http://www.w3.org/2000/svg" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="5" y="5" width="90" height="60" rx="12" ry="12" stroke="#5C5C5C" strokeWidth="5" />
                            <polygon points="40,22 40,48 62,35" stroke="#f97316" strokeWidth="5" />
                        </svg>
                        <div className="brand-name" style={{ gap: '4px', marginLeft: '8px' }}>
                            <span className="brand-deck">DECK</span>
                            <span className="brand-play" style={{ color: '#5C5C5C' }}>PLAY</span>
                        </div>
                    </Link>
                </div>

                <div className="nav-center" style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                    <button className="btn-trial" onClick={() => navigate('/contact')}>Start Today </button>
                    {/* Platform Dropdown */}
                    <div
                        onMouseEnter={() => {
                            setIsPricingHovered(false);
                            setIsSolutionsHovered(false);
                            setActivePopup('platform');
                        }}
                        onMouseLeave={() => setActivePopup(null)}
                        style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center' }}
                    >
                        <Link to="/platform" className="nav-link" style={{ position: 'relative' }}>
                            Platform
                            <motion.div
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: activePopup === 'platform' ? 1 : 0 }}
                                style={{
                                    position: 'absolute',
                                    top: '-25px', left: 0, right: 0, height: '5px',
                                    background: '#f97316', borderRadius: '0 0 4px 4px'
                                }}
                            />
                        </Link>
                        <AnimatePresence>
                            {activePopup === 'platform' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 15, scale: 0.95 }}
                                    style={{
                                        position: 'absolute',
                                        top: '50px', left: '50%', x: '-50%',
                                        width: '320px',
                                        background: 'rgba(255, 255, 255, 0.98)',
                                        backdropFilter: 'blur(25px)',
                                        padding: '1.5rem',
                                        borderRadius: '24px',
                                        boxShadow: '0 30px 60px -12px rgba(0, 0, 0, 0.25)',
                                        border: '1px solid rgba(0, 0, 0, 0.05)',
                                        zIndex: 1001
                                    }}
                                >
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                        <Link to="/platform#features" style={{ color: '#475569', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 600 }}>Core Features</Link>
                                        <Link to="/platform#architecture" style={{ color: '#475569', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 600 }}>System Architecture</Link>
                                        <Link to="/platform#security" style={{ color: '#475569', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 600 }}>Security & Compliance</Link>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Pricing Dropdown */}
                    <div
                        onMouseEnter={() => {
                            setIsPricingHovered(true);
                            setIsSolutionsHovered(false);
                            setActivePopup(null);
                        }}
                        onMouseLeave={() => setIsPricingHovered(false)}
                        style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center' }}
                    >
                        <Link to="/pricing" className="nav-link" style={{ position: 'relative' }}>
                            Pricing
                            <motion.div
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: isPricingHovered ? 1 : 0 }}
                                style={{
                                    position: 'absolute',
                                    top: '-25px', left: 0, right: 0, height: '5px',
                                    background: '#f97316', borderRadius: '0 0 4px 4px'
                                }}
                            />
                        </Link>
                        <AnimatePresence>
                            {isPricingHovered && (
                                <motion.div
                                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 15, scale: 0.95 }}
                                    style={{
                                        position: 'absolute',
                                        top: '50px', left: '50%', x: '-50%',
                                        width: '280px',
                                        background: 'rgba(255, 255, 255, 0.98)',
                                        backdropFilter: 'blur(25px)',
                                        padding: '1.5rem',
                                        borderRadius: '24px',
                                        boxShadow: '0 30px 60px -12px rgba(0, 0, 0, 0.25)',
                                        border: '1px solid rgba(0, 0, 0, 0.05)',
                                        zIndex: 1001
                                    }}
                                >


                                    <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '1rem', marginTop: '0.5rem' }}>
                                        <Link to="/pricing#comparison" style={{ color: '#f97316', fontWeight: 800, fontSize: '0.9rem', textDecoration: 'none' }}>Compare Features →</Link>
                                    </div>

                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Solutions Dropdown */}
                    <div
                        onMouseEnter={() => {
                            setIsSolutionsHovered(true);
                            setIsPricingHovered(false);
                            setActivePopup(null);
                        }}
                        onMouseLeave={() => setIsSolutionsHovered(false)}
                        style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center' }}
                    >
                        <Link to="/solutions" className="nav-link" style={{ position: 'relative' }}>
                            Solutions
                            <motion.div
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: isSolutionsHovered ? 1 : 0 }}
                                style={{
                                    position: 'absolute',
                                    top: '-25px', left: 0, right: 0, height: '5px',
                                    background: '#f97316', borderRadius: '0 0 4px 4px'
                                }}
                            />
                        </Link>

                        <AnimatePresence>
                            {isSolutionsHovered && (
                                <motion.div
                                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 15, scale: 0.95 }}
                                    style={{
                                        position: 'absolute',
                                        top: '50px', left: '50%', x: '-50%',
                                        width: '260px',
                                        background: 'rgba(255, 255, 255, 0.98)',
                                        backdropFilter: 'blur(25px)',
                                        padding: '2rem',
                                        borderRadius: '24px',
                                        boxShadow: '0 30px 60px -12px rgba(0, 0, 0, 0.25)',
                                        border: '1px solid rgba(0, 0, 0, 0.05)',
                                        zIndex: 1001
                                    }}
                                >
                                    <div>
                                        <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#f97316', letterSpacing: '0.1em', marginBottom: '1.25rem', textTransform: 'uppercase' }}>Industries</div>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                                            {[
                                                { label: "Retail & Mall", to: "/solutions/retail" },
                                                { label: "Corporate Office", to: "/solutions/corporate" },
                                                { label: "Healthcare", to: "/solutions/healthcare" },
                                                { label: "Education", to: "/solutions/education" }
                                            ].map((link, idx) => (
                                                <Link 
                                                    key={idx} 
                                                    to={link.to} 
                                                    style={{ 
                                                        color: '#475569', 
                                                        textDecoration: 'none', 
                                                        fontSize: '0.95rem', 
                                                        fontWeight: 600,
                                                        padding: '0.8rem 1.2rem',
                                                        borderRadius: '12px',
                                                        transition: 'all 0.3s ease',
                                                        display: 'block'
                                                    }}
                                                    onMouseEnter={(e) => {
                                                        e.target.style.background = 'rgba(249, 115, 22, 0.06)';
                                                        e.target.style.color = '#f97316';
                                                    }}
                                                    onMouseLeave={(e) => {
                                                        e.target.style.background = 'transparent';
                                                        e.target.style.color = '#475569';
                                                    }}
                                                >
                                                    {link.label}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <Link to="/resources" className="nav-link">Resources</Link>
                    <Link to="/contact" className="nav-link">Contact Us</Link>
                </div>

                <div className="nav-right">

                </div>
            </nav>

            {/* Global Notification Popup */}
            <AnimatePresence>
                {activePopup && (
                    <motion.div
                        initial={{ opacity: 0, x: -50, scale: 0.9 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: -50, scale: 0.9 }}
                        style={{
                            position: 'fixed',
                            bottom: '30px',
                            left: '30px',
                            zIndex: 2000,
                            background: 'rgba(255, 255, 255, 0.95)',
                            backdropFilter: 'blur(16px)',
                            padding: '16px 24px',
                            borderRadius: '20px',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                            borderLeft: '5px solid #f97316',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '15px',
                            minWidth: '320px'
                        }}
                    >
                        <div style={{ fontSize: '1.8rem' }}>{activePopup.icon}</div>
                        <div>
                            <div style={{ fontWeight: 800, color: '#f97316', fontSize: '0.85rem', letterSpacing: '0.05em' }}>{activePopup.title}</div>
                            <div style={{ color: '#1a1a1a', fontWeight: 600, fontSize: '0.95rem' }}>{activePopup.desc}</div>
                        </div>
                        <button
                            onClick={() => setActivePopup(null)}
                            style={{ marginLeft: 'auto', background: 'none', border: 'none', color: '#64748b', cursor: 'pointer', fontSize: '1.2rem' }}
                        >
                            ×
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;

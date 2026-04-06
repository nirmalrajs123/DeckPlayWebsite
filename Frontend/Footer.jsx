import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-sections">
                    <div className="footer-brand">
                        <Link to="/" className="logo-container">
                            <svg className="logo-icon deck-play-logo" viewBox="0 0 100 70" xmlns="http://www.w3.org/2000/svg" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="5" y="5" width="90" height="60" rx="12" ry="12" stroke="#5C5C5C" strokeWidth="5" />
                                <polygon points="40,22 40,48 62,35" stroke="#f97316" strokeWidth="5" />
                            </svg>
                            <div className="brand-name" style={{ gap: '4px', marginLeft: '8px' }}>
                                <span className="brand-deck">DECK</span>
                                <span className="brand-play" style={{ color: '#ffffff' }}>PLAY</span>
                            </div>
                        </Link>
                        <p className="footer-tagline">Manage once. Play everywhere. The ultimate digital signage solution.</p>
                    </div>

                    <div className="footer-links">
                        <h4>Quick Links</h4>
                        <Link to="/">Home</Link>
                        <Link to="/pricing">Pricing</Link>
                        <Link to="/platform">Platform</Link>
                        <Link to="/contact">Contact Us</Link>
                    </div>

                </div>

                <div className="footer-bottom">
                    <p>Copyright © 2026-2027 <span className="brand-name"><span className="brand-deck">DECK</span> <span className="brand-play" style={{ color: '#ffffff' }}>PLAY</span></span> | All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

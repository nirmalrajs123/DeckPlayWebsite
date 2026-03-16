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
                                <polygon points="40,22 40,48 62,35" stroke="#FF5722" strokeWidth="5" />
                            </svg>
                            <div className="logo-text" style={{ display: 'flex', gap: '4px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                <span style={{ color: '#FF5722', fontWeight: 800 }}>DECK</span>
                                <span style={{ color: '#5C5C5C', fontWeight: 300 }}>PLAY</span>
                            </div>
                        </Link>
                        <p className="footer-tagline">Manage once. Play everywhere. The ultimate digital signage solution.</p>
                    </div>

                    <div className="footer-links">
                        <h4>Quick Links</h4>
                        <Link to="/">Home</Link>
                        <Link to="/pricing">Pricing</Link>
                        <a href="#platform">Platform</a>
                        <a href="#contact">Contact Us</a>
                    </div>

                    <div className="footer-links">
                        <h4>Support</h4>
                        <a href="#">Help Center</a>
                        <a href="#">Security</a>
                        <a href="#">Legal</a>
                        <a href="#">Privacy Policy</a>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>Copyright © 2026-2027 Nuroil Trading FZE LLC | All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
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
                <button className="btn-trial" onClick={() => window.location.href = 'https://tvreact.onrender.com/login'}>Start Free Trial</button>
                <Link to="/platform" className="nav-link">Platform</Link>
                <Link to="/pricing" className="nav-link">Pricing</Link>
                <Link to="/industries" className="nav-link">Industries</Link>
                <Link to="/solutions" className="nav-link">Solutions</Link>
                <Link to="/resources" className="nav-link">Resources</Link>
                <Link to="/contact" className="nav-link">Contact Us</Link>
            </div>

            <div className="nav-right">
                <Link to="/cms/login" className="btn-login">Log in</Link>
            </div>
        </nav>
    );
};

export default Header;

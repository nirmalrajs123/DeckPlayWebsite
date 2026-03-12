import React from "react";
import "./pricing.css";
import { Link } from "react-router-dom";

const plans = [
    {
        name: "Basic",
        price: "$6",
        features: ["1 User", "5 Projects", "Basic Support"]
    },
    {
        name: "Pro",
        price: "$12",
        features: ["5 Users", "50 Projects", "Priority Support"],
        highlight: true
    },
    {
        name: "Enterprise",
        price: "$24",
        features: ["Unlimited Users", "Unlimited Projects", "24/7 Support"]
    }
];

function Pricing() {
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

            <header className="hero" style={{ minHeight: '40vh', padding: '4rem 2rem' }}>
                <div className="hero-content">
                    <h1 className="hero-title">
                        Simple, Transparent <span className="highlight">Pricing</span>
                    </h1>
                    <p className="hero-subtitle">Choose the plan that fits your business. Start signing documents digitally in minutes.</p>
                </div>
            </header>

            <div className="pricing-container">
                <div className="pricing-grid">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`pricing-card ${plan.highlight ? "active" : ""}`}
                        >
                            <h3>{plan.name}</h3>
                            <h1>{plan.price}</h1>

                            <ul>
                                {plan.features.map((f, i) => (
                                    <li key={i}>{f}</li>
                                ))}
                            </ul>

                            <button>Choose Plan</button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Pricing;
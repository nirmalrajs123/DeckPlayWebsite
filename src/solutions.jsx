import React from 'react';
import { Link } from 'react-router-dom';

function Solutions() {
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
                    <Link to="/" className="nav-link">Platform</Link>
                    <Link to="/pricing" className="nav-link">Pricing</Link>
                    <Link to="/" className="nav-link">Industries</Link>
                    <Link to="/solutions" className="nav-link">Solutions</Link>
                    <Link to="/" className="nav-link">Resources</Link>
                    <Link to="/contact" className="nav-link">Contact Us</Link>
                </div>

                <div className="nav-right">
                    <Link to="/" className="btn-login">Log in</Link>
                    <button className="btn-demo">Get Free Demo</button>
                </div>
            </nav>

            <section className="solutions-section">
                <h2>Digital signage solutions</h2>
                <p className="solutions-subtitle">Our digital signage solutions can benefit your organization, no matter your industry.</p>

                <div className="solutions-grid">
                    {[
                        {
                            title: "Manufacturing",
                            img: "/manufacturing.png",
                            desc: "From HQ to the factory floor, our web based digital signage improves productivity and safety."
                        },
                        {
                            title: "Education",
                            img: "/education.png",
                            desc: "Inspire students and faculty with captivating digital screens that bring a sense of belongingness."
                        },
                        {
                            title: "Restaurants",
                            img: "/restaurant.png",
                            desc: "Dazzling menu boards and posters will take upselling & customer satisfaction to new heights."
                        },
                        {
                            title: "Retail",
                            img: "/retail.png",
                            desc: "Amaze shoppers using digital billboard software to showcase products and boost sales."
                        },
                        {
                            title: "Offices",
                            img: "/office.png",
                            desc: "Improve performance in your office environment with screens that inform and strengthen collaboration."
                        },
                        {
                            title: "Healthcare",
                            img: "/healthcare.png",
                            desc: "Promote health tips, raise awareness and improve facilities navigation with engaging screens."
                        }
                    ].map((item, idx) => (
                        <div key={idx} className="solution-card">
                            <div className="solution-screen">
                                <img src={item.img} alt={item.title} />
                            </div>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}

export default Solutions;

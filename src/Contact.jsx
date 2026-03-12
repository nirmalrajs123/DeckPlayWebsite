import React from 'react';
import { Link } from 'react-router-dom';

function Contact() {
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
                    <Link to="/" className="nav-link">Solutions</Link>
                    <Link to="/" className="nav-link">Resources</Link>
                    <Link to="/contact" className="nav-link">Contact Us</Link>
                </div>

                <div className="nav-right">
                    <Link to="/" className="btn-login">Log in</Link>
                    <button className="btn-demo">Get Free Demo</button>
                </div>
            </nav>

            <div className="contact-page">
                <div className="contact-container">
                    <div className="contact-form-section">
                        <h2>Send us a message</h2>
                        <p className="contact-desc">Please complete the fields below and we will get back to you within two working days.</p>
                        <p className="contact-note">Note: Fields marked with an asterisk(*) are mandatory.</p>

                        <form className="contact-form">
                            <div className="form-group">
                                <label>Name *</label>
                                <input type="text" required />
                            </div>

                            <div className="form-group">
                                <label>E-mail *</label>
                                <input type="email" required />
                            </div>

                            <div className="form-group">
                                <label>Subject *</label>
                                <input type="text" required />
                            </div>

                            <div className="form-group">
                                <label>Message *</label>
                                <textarea rows="6" required></textarea>
                            </div>

                            <div className="captcha-placeholder">
                                <div className="captcha-box">
                                    <input type="checkbox" id="captcha" />
                                    <label htmlFor="captcha">I'm not a robot</label>
                                </div>
                                <div className="captcha-brand">
                                    <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="reCAPTCHA" />
                                    <span>reCAPTCHA</span>
                                    <small>Privacy - Terms</small>
                                </div>
                            </div>

                            <button type="submit" className="btn-send">Send Message</button>
                        </form>
                    </div>

                    <div className="contact-info-section">
                        <div className="contact-image">
                            <img src="/contact_person.png" alt="Contact Support" />
                        </div>

                        <div className="info-content">
                            <h3>Contact Information</h3>

                            <div className="info-item">
                                <span className="info-icon">📍</span>
                                <div>
                                    <strong>Nuroil Trading FZE</strong><br />
                                    Off. 1007, Mohammad Al Mulla Tower, Al Nhada, Sharjah, United Arab Emirates
                                </div>
                            </div>

                            <div className="info-item">
                                <span className="info-icon">📱</span>
                                <div><strong>Mobile:</strong> +971 54 510 7121</div>
                            </div>

                            <div className="info-item">
                                <span className="info-icon">📞</span>
                                <div><strong>Phone:</strong> +971 6 599 5999</div>
                            </div>

                            <div className="info-item">
                                <span className="info-icon">📠</span>
                                <div><strong>Fax:</strong> +971 6 5351769</div>
                            </div>

                            <div className="info-item">
                                <span className="info-icon">💬</span>
                                <div><strong>Whatsapp:</strong> +971 54 510 7121</div>
                            </div>

                            <div className="info-item">
                                <span className="info-icon">✉️</span>
                                <div><strong>info@nuroil.com</strong></div>
                            </div>

                            <div className="working-hours">
                                <p><strong>Working hours:</strong></p>
                                <p>All Days: 9am to 7pm</p>
                            </div>

                            <div className="social-links-contact">
                                <a href="#" className="social-icon">f</a>
                                <a href="#" className="social-icon">i</a>
                                <a href="#" className="social-icon">in</a>
                                <a href="#" className="social-icon">t</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;

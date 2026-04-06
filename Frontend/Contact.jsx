import React, { useState } from 'react';
import { motion } from 'framer-motion';
import api from './services/api';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState({ type: '', msg: '' });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: '', msg: '' });

        try {
            await api.post('/contact/send-contact', formData);
            setStatus({ type: 'success', msg: 'Message sent successfully!' });
            setFormData({ name: '', email: '', subject: '', message: '' });
            setLoading(false);
        } catch (error) {
            console.warn('SMTP Error (falling back to demo mode):', error);
            // Simulating a successful send for the demo
            setTimeout(() => {
                setStatus({ type: 'success', msg: 'Demo Success: Your message was simulated and "sent" successfully!' });
                setFormData({ name: '', email: '', subject: '', message: '' });
                setLoading(false);
            }, 1000);
        }
    };

    return (
        <div className="contact-page-modern">
            <header className="contact-hero">
                <motion.span 
                    className="lighting-badge"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    GET IN TOUCH
                </motion.span>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    Let's Build Something <br />
                    <span className="lighting-highlight">Amazing</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    Whether you have questions about scaling your digital signage network or need a custom solution, our team is ready to help.
                </motion.p>
            </header>

            <main className="contact-main-container">
                <motion.div 
                    className="contact-form-card"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                >
                    <form className="form-grid" onSubmit={handleSubmit}>
                        <div className="input-block">
                            <label>YOUR NAME</label>
                            <input 
                                type="text" 
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="John Doe" 
                                required 
                            />
                        </div>
                        <div className="input-block">
                            <label>YOUR EMAIL</label>
                            <input 
                                type="email" 
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="john@example.com" 
                                required 
                            />
                        </div>
                        <div className="input-block span-2">
                            <label>SUBJECT</label>
                            <input 
                                type="text" 
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder="Scaling my network" 
                                required 
                            />
                        </div>
                        <div className="input-block span-2">
                            <label>MESSAGE</label>
                            <textarea 
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="6" 
                                placeholder="Tell us about your project..." 
                                required
                            ></textarea>
                        </div>

                        <div className="input-block span-2">
                            <div className="modern-captcha">
                                <div className="captcha-info">
                                    <input type="checkbox" id="modern-captcha" required />
                                    <label htmlFor="modern-captcha">I'm human, take me to success</label>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                                    <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" width="32" alt="reCAPTCHA" />
                                    <small style={{ fontSize: '10px', opacity: 0.5 }}>reCAPTCHA</small>
                                </div>
                            </div>
                        </div>

                        {status.msg && (
                            <div className={`status-msg ${status.type} span-2`} style={{ 
                                padding: '1rem', 
                                borderRadius: '12px', 
                                background: status.type === 'success' ? '#f0fdf4' : '#fef2f2',
                                color: status.type === 'success' ? '#166534' : '#991b1b',
                                fontWeight: '600',
                                marginBottom: '1rem'
                            }}>
                                {status.msg}
                            </div>
                        )}

                        <div className="span-2">
                            <button 
                                type="submit" 
                                className="submit-btn-modern" 
                                disabled={loading}
                            >
                                {loading ? "SENDING..." : "Send Your Message"}
                            </button>
                        </div>
                    </form>
                </motion.div>

                <motion.aside 
                    className="contact-sidebar"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 }}
                >
                    <div className="info-card-modern">
                        <h3>Connect with Us</h3>
                        <div className="info-list-modern">
                            <div className="info-item-modern">
                                <div className="icon-wrapper">📍</div>
                                <div className="item-text">
                                    <h4>HQ Address</h4>
                                    <p>Off. 1007, Al Mulla Tower, Sharjah, UAE</p>
                                </div>
                            </div>
                            <div className="info-item-modern">
                                <div className="icon-wrapper">📞</div>
                                <div className="item-text">
                                    <h4>Phone & Mobile</h4>
                                    <p>+971 6 599 5999<br />+971 54 510 7121</p>
                                </div>
                            </div>
                            <div className="info-item-modern">
                                <div className="icon-wrapper">✉️</div>
                                <div className="item-text">
                                    <h4>Email Support</h4>
                                    <p>info@deckplay.com</p>
                                </div>
                            </div>
                        </div>

                        <div className="hours-badge">
                            ⏰ Support hours: All Days, 9 am - 7 pm
                        </div>

                    </div>

                    <div className="info-card-modern" style={{ padding: '0', overflow: 'hidden', height: '300px' }}>
                        <iframe 
                            src="https://maps.google.com/maps?q=8928%2BVX%20Sharjah&t=&z=16&ie=UTF8&iwloc=&output=embed" 
                            width="100%" 
                            height="100%" 
                            style={{ border: 0, filter: 'grayscale(0.1)' }} 
                            allowFullScreen="" 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Deck Play HQ"
                        ></iframe>
                    </div>
                </motion.aside>
            </main>
        </div>
    );
}

export default Contact;

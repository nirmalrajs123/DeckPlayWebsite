import React from 'react'
import { motion } from 'framer-motion'
import './App.css'

const Industries = () => {
    const industries = [
        {
            title: "Retail & Malls",
            desc: "Drive foot traffic and increase average order value with dynamic digital posters and interactive wayfinding maps.",
            icon: "🛍️",
            features: ["Dynamic Pricing", "Flash Sales", "Store Wayfinding"]
        },
        {
            title: "Corporate Offices",
            desc: "Keep your workforce aligned with real-time KPI dashboards, meeting room schedules, and CEO broadcasts.",
            icon: "🏢",
            features: ["Internal Dashboards", "Room Booking", "Emergency Alerts"]
        },
        {
            title: "Hospitality & Hotels",
            desc: "Welcome guests with personalized greeting screens, digital concierge services, and event schedules.",
            icon: "🏨",
            features: ["Virtual Concierge", "Event Brushing", "Menu Boards"]
        },
        {
            title: "Healthcare",
            desc: "Reduce perceived wait times with educational content and keep patients informed with queue management systems.",
            icon: "🏥",
            features: ["Patient Queuing", "Health Tips", "Wayfinding"]
        },
        {
            title: "Education",
            desc: "Transform campuses with digital bulletin boards, live event streaming, and automated class calendars.",
            icon: "🎓",
            features: ["Campus Alerts", "Digital News", "Student Projects"]
        },
        {
            title: "Transportation",
            desc: "Deliver real-time flight, bus, or train schedules with automated data integrations and emergency overrides.",
            icon: "✈️",
            features: ["Live Timetables", "Wayfinding", "Weather Alerts"]
        }
    ]

    return (
        <div className="industries-page">
            <section className="lighting-hero">
                <div className="container hero-content">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                         <span className="lighting-badge">GLOBAL REACH</span>
                        <h1 className="lighting-title" style={{ fontSize: '4.5rem', marginBottom: '2rem' }}>
                            Vertical Solutions for <br /><span className="lighting-highlight">Every Scale</span>
                        </h1>
                        <p className="lighting-subtitle" style={{ maxWidth: '800px', margin: '0 auto' }}>
                           From single-store boutique displays to massive multi-national airport networks, Deck Play is the engine behind the world's most engaging screens.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="section-lighting" style={{ padding: '8rem 0' }}>
                <div className="container">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {industries.map((ind, i) => (
                            <motion.div
                                key={i}
                                className="industry-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                                style={{ textAlign: 'left', alignItems: 'flex-start' }}
                            >
                                <div className="industry-icon-box" style={{ fontSize: '2.5rem' }}>{ind.icon}</div>
                                <h3 className="lighting-title" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{ind.title}</h3>
                                <p className="lighting-subtitle" style={{ marginBottom: '1.5rem' }}>{ind.desc}</p>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                    {ind.features.map((f, j) => (
                                        <span key={j} className="lighting-badge" style={{ fontSize: '0.7rem', padding: '0.2rem 0.6rem' }}>{f}</span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="final-cta-section">
                <div className="final-cta-content">
                    <h2>Does your industry need a custom approach?</h2>
                    <p>Our engineers can build custom widgets and integrations for your specific use case.</p>
                    <button className="white-btn">Talk to a Specialist</button>
                </div>
            </section>
        </div>
    )
}

export default Industries

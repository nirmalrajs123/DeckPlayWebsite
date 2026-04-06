import React from 'react'
import { motion } from 'framer-motion'
import './App.css'

const Resources = () => {
    const categories = [
        {
            title: "Downloadables",
            desc: "Access brochures, whitepapers, and technical specifications for our hardware partners.",
            items: [
                "2024 Product Brochure (PDF)",
                "Hardware Compatibility List",
                "Security & Architecture Whitepaper",
                "Implementation Roadmap Guide"
            ]
        },
        {
            title: "Knowledge Center",
            desc: "Comprehensive tutorials and guides to help you master the Deck Play platform.",
            items: [
                "Getting Started Guide",
                "Advanced Scheduling Logic",
                "Hardware Setup Walkthrough",
                "API Documentation Hub"
            ]
        },
        {
            title: "Support Resources",
            desc: "Find help when you need it with our community forums and expert support tickets.",
            items: [
                "Submit a Support Ticket",
                "Community Discourse Forum",
                "System Status Healthboard",
                "Developer Sandbox Access"
            ]
        }
    ]

    return (
        <div className="resources-page">
            <section className="lighting-hero">
                <div className="container hero-content">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="lighting-badge">RESOURCES</span>
                        <h1 className="lighting-title" style={{ fontSize: '4.5rem', marginBottom: '2rem' }}>
                            Everything You Need to <br /><span className="lighting-highlight">Launch Faster</span>
                        </h1>
                        <p className="lighting-subtitle" style={{ maxWidth: '800px', margin: '0 auto' }}>
                            Technical guides, professional assets, and support channels to help you deploy digital signage like a pro.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="section-lighting" style={{ padding: '4rem 0 8rem' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', marginBottom: '8rem' }}>
                        {categories.map((cat, i) => (
                            <motion.div
                                key={i}
                                className="industry-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                style={{ textAlign: 'left', alignItems: 'flex-start', background: 'white', padding: '3rem', borderRadius: '24px', border: '1px solid #f1f5f9' }}
                            >
                                <h3 className="lighting-title" style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>{cat.title}</h3>
                                <p className="lighting-subtitle" style={{ marginBottom: '2rem', fontSize: '0.95rem' }}>{cat.desc}</p>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    {cat.items.map((item, j) => (
                                        <li key={j} style={{ display: 'flex', gap: '12px', marginBottom: '1.25rem', alignItems: 'center', color: '#475569', fontWeight: '600' }}>
                                            <div style={{ color: '#f97316', fontWeight: 900 }}>➝</div>
                                            <a href="#" className="nav-link" style={{ fontSize: '1rem', fontWeight: '600', opacity: 0.8 }}>{item}</a>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>

                    {/* How it Works Module */}

                </div>
            </section>
            {/* Structured Technical Showcase */}
            <section style={{ padding: '6rem 0 10rem', background: '#ffffff' }}>
                <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>

                    {/* The 3-Step Orchestration */}
                    <section className="how-it-works-section section-lighting" style={{ padding: '0 0 10rem' }}>
                        <div className="how-it-works-container">
                            <motion.div
                                className="section-header"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false }}
                                transition={{ duration: 0.8 }}
                                style={{ textAlign: 'center', marginBottom: '5rem' }}
                            >
                                <h2 className="lighting-title">⚙️ Bridge the Gap</h2>
                                <p className="lighting-subtitle">From high-end web management to hardware-agnostic playback in three steps.</p>
                            </motion.div>

                            <div className="steps-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                                {[
                                    {
                                        step: "01",
                                        title: "Content Orchestration",
                                        desc: "Manage high-definition assets, intelligent playlists, and time-based scheduling (e.g. Breakfast vs. Dinner menus) from your React Web Dashboard.",

                                    },
                                    {
                                        step: "02",
                                        title: "Hardware Player",
                                        desc: "Our specialized Flutter app ensures smooth 60fps animations and offline-ready playback on Android TV, Firesticks, and Tablets.",

                                    },
                                    {
                                        step: "03",
                                        title: "Magic Pairing",
                                        desc: "Skip the passwords. Link any new screen instantly with a unique 6-digit TV Code directly from your web dashboard.",

                                    }
                                ].map((item, idx) => (
                                    <motion.div
                                        key={idx}
                                        className="step-card step-card-lighting"
                                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                        viewport={{ once: false }}
                                        transition={{ type: "spring", stiffness: 60, delay: idx * 0.15 }}
                                        style={{ position: 'relative' }}
                                    >
                                        <div className="step-number step-number-lighting">{item.step}</div>
                                        <h3 className="lighting-title" style={{ marginTop: '1.5rem', fontSize: '1.6rem' }}>{item.title}</h3>
                                        <p className="lighting-subtitle" style={{ fontSize: '1rem' }}>{item.desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Key Benchmarks */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '4rem' }}>
                        {[
                            { icon: "⚡", title: "Real-Time Push", desc: "Update any screen globally in under 2 seconds via Socket.io." },
                            { icon: "📅", title: "Smart Scheduling", desc: "Set it and forget it. Content rotates on pre-set calendars automatically." },
                            { icon: "📏", title: "Resolution Agnostic", desc: "Native support for Landscape and Portrait orientations." },
                            { icon: "🛡️", title: "Screen Monitoring", desc: "Check Online status and cache health directly from your mobile." }
                        ].map((f, i) => (
                            <div key={i}>
                                <div style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>{f.icon}</div>
                                <h4 style={{ fontSize: '1.3rem', fontWeight: 900, marginBottom: '1rem' }}>{f.title}</h4>
                                <p style={{ color: '#64748b', lineHeight: 1.6, fontSize: '0.95rem' }}>{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="final-cta-section" style={{ background: '#f8fafc' }}>
                <div className="final-cta-content">
                    <h2 className="lighting-title">Still have questions?</h2>
                    <p className="lighting-subtitle">Our support engineers are available 24/7 for technical consultation.</p>
                    <button className="btn-demo large lighting-btn-primary" style={{ padding: '1rem 3.5rem' }}>Open Support Ticket</button>
                </div>
            </section>
        </div>
    )
}

export default Resources

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import dashboard_mock from "./assestes/Dashboard.png";
import playlist_mock from "./assestes/playlist.png";
import screens_mock from "./assestes/screens.png";
import app_library_mock from "./assestes/app-li.png";
import { motion, AnimatePresence } from "framer-motion";
import retail_img from "./assestes/industries/retail.png";
import retail_showcase from "./assestes/industries/retail_showcase.png";
import corporate_img from "./assestes/industries/corporate.png";
import corporate_new from "./assestes/Screenshot 2026-04-06 095736.png";
import hospitality_img from "./assestes/industries/hospitality.png";
import healthcare_img from "./assestes/industries/healthcare.jpg";
import education_img from "./assestes/industries/education.png";
import retail_showcasee from "./assestes/Screenshot 2026-04-06 095428.png";
import showcase_video from "./assestes/create_a_gif_202604061230.mp4";
import background_change_video from "./assestes/Change_background_create_202604061358.mp4";
import BrandName from "./BrandName";
function Home() {
    const [hoveredIndustryImg, setHoveredIndustryImg] = useState(retail_showcase);
    const [hoveredIndustryTitle, setHoveredIndustryTitle] = useState("Retail & Malls");
    const navigate = useNavigate();

    return (
        <>
            <motion.header
                className="hero lighting-hero"
                initial={{ opacity: 0, x: -100, rotateY: -20, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, rotateY: 0, scale: 1 }}
                transition={{ duration: 1, type: "spring", bounce: 0.3 }}
            >
                <div className="hero-content">
                    <div className="hero-badge-top lighting-badge">A MODULAR DIGITAL SIGNAGE PLATFORM</div>
                    <h1 className="hero-title lighting-title">
                        Your Brand, <br />On <span className="lighting-highlight">Every Screen</span>
                    </h1>
                    <p className="hero-subtitle lighting-subtitle" style={{ color: '#475569', fontSize: '1.2rem' }}><BrandName /> is an enterprise-grade Digital Signage CMS that allows businesses to transform any screen into a dynamic marketing tool. Simple. Powerful. Real-time.</p>
                    <div className="hero-btns-group">
                        <button className="btn-outline-glow lighting-btn-primary" onClick={() => navigate("/pricing")}>Get started free &rarr;</button>
                        <button className="btn-outline lighting-btn-outline" onClick={() => navigate("/contact")}>Book a demo</button>
                    </div>
                </div>
            </motion.header>

            <section className="dashboard-stats-composite" style={{ background: 'transparent', marginTop: '-8rem', padding: '0 3rem', position: 'relative', zIndex: 20 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '3rem', maxWidth: '1300px', margin: '0 auto', flexWrap: 'wrap' }}>
                    <div className="side-stats-column" style={{ flex: '0 0 380px', display: 'flex', flexDirection: 'column', gap: '1.2rem', zIndex: 10 }}>
                        {[
                            { val: "∞", label: "Infinite possibilities" },
                            { val: "Real-time", label: "Knowledge updates as they happen" },
                            { val: "1-click", label: "Deploy to all screens instantly" }
                        ].map((st, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false }}
                                transition={{ duration: 0.8, delay: i * 0.15, type: "spring" }}
                                style={{
                                    background: '#111821',
                                    padding: '1.8rem 2.2rem',
                                    borderRadius: '20px',
                                    border: '1px solid rgba(255, 255, 255, 0.05)',
                                    textAlign: 'left',
                                    boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '0.4rem'
                                }}
                            >
                                <span className="stat-val lighting-highlight" style={{ fontSize: '2.5rem', fontWeight: 900 }}>{st.val}</span>
                                <span className="stat-label" style={{ fontWeight: 600, color: '#94a3b8', fontSize: '1rem' }}>{st.label}</span>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        className="dashboard-frame dashboard-frame-lighting"
                        style={{ flex: '1 1 700px', maxWidth: '900px', borderRadius: '48px', overflow: 'hidden', boxShadow: '0 40px 100px rgba(0,0,0,0.3)' }}
                        initial={{ opacity: 0, y: 50, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        <video src={showcase_video} autoPlay muted loop playsInline alt="Dashboard Preview" className="dashboard-img-hero" style={{ width: '100%', borderRadius: 'inherit', display: 'block', objectFit: 'cover' }} />
                    </motion.div>
                </div>
            </section>

            <section className="showcase-section showcase-lighting" style={{ padding: '6rem 0' }}>
                <div className="showcase-container">
                    <motion.div
                        className="showcase-text"
                        initial={{ opacity: 0, y: 100, scale: 0.9 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: false, margin: "50px" }}
                        transition={{ duration: 0.8, type: "spring" }}
                    >
                        <h2 className="lighting-title">Experience the Power of <BrandName /></h2>
                        <p className="lighting-subtitle">Our intuitive dashboard gives you complete control over your digital signage network. Manage playlists, monitor screens, and deploy apps with just a few clicks.</p>
                        <p className="lighting-subtitle" style={{
                            marginTop: '3.5rem',
                            fontSize: '1.45rem',
                            fontWeight: 600,
                            lineHeight: '1.5',
                            maxWidth: '1100px',
                            margin: '3.5rem auto 0',
                            borderTop: '2px solid rgba(249, 115, 22, 0.3)',
                            paddingTop: '3.5rem',
                            color: '#0f172a'
                        }}>
                            One of <BrandName />’s <span style={{ color: '#f97316', fontWeight: 800 }}>key features</span> is its ability to integrate with <span style={{ textDecoration: 'underline', textDecorationColor: '#f97316', textUnderlineOffset: '6px' }}>external APIs</span> and support custom application development. These custom interfaces can be displayed on the deck and managed remotely, while also connecting to complex backend or server APIs for <span style={{ color: '#f97316', fontWeight: 800 }}>advanced automation</span>, monitoring, and system control.
                        </p>
                    </motion.div>

                </div>
                <section className="features-section section-lighting" style={{ padding: '6rem 0' }}>
                    <motion.h2
                        className="lighting-title"
                        initial={{ opacity: 0, scale: 0.5, y: 50 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8, type: "spring" }}
                    >
                        Why choose <BrandName />
                    </motion.h2>
                    <div className="features-carousel-wrapper" style={{ overflow: 'hidden', padding: '5rem 0', perspective: '1000px' }}>
                        <div className="side-stats-column" style={{ display: 'flex', gap: '3rem', width: 'max-content', animation: 'scroll-carousel-reverse 50s linear infinite' }}>
                            {[...Array(3)].map((_, trackIdx) => (
                                <React.Fragment key={trackIdx}>
                                    {[
                                        {
                                            title: "Intuitive Interface",
                                            desc: "Drag & drop the content you want to display seamlessly. Built for speed and creative freedom.",
                                            iconPath: (
                                                <>
                                                    <rect x="10" y="8" width="44" height="32" rx="4" stroke="#f97316" strokeWidth="3" />
                                                    <circle cx="25" cy="20" r="4" fill="#f97316" />
                                                    <line x1="35" y1="20" x2="45" y2="20" stroke="#f97316" strokeWidth="2" />
                                                    <line x1="15" y1="28" x2="35" y2="28" stroke="#f97316" strokeWidth="2" />
                                                </>
                                            ),
                                            viewBox: "0 0 64 48"
                                        },
                                        {
                                            title: "Instant Sync",
                                            desc: "Real-time updates pushed to all screens globally in under 200ms. Keep your network perfectly synchronized.",
                                            iconPath: <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" />,
                                            viewBox: "0 0 24 24",
                                            cls: "icon-sync"
                                        },
                                        {
                                            title: "Remote Management",
                                            desc: "Control thousands of screens from one dashboard. Update content, monitor screen health, and restart globally.",
                                            iconPath: <path d="M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7l-2 3v1h8v-1l-2-3h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H3V4h18v12zM12 13c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />,
                                            viewBox: "0 0 24 24",
                                            cls: "icon-screen"
                                        },
                                        {
                                            title: "Expert Support",
                                            desc: <><BrandName /> offers dedicated technical support for high-stakes enterprise deployments 24/7/365.</>,
                                            iconPath: <path d="M12 1c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h3c1.66 0 3-1.34 3-3v-7c0-4.97-4.03-9-9-9z" />,
                                            viewBox: "0 0 24 24",
                                            cls: "icon-support"
                                        },
                                        {
                                            title: "Enterprise Security",
                                            desc: "AES-256 encryption at rest and in transit. Role-based access with audit trails for total accountability.",
                                            iconPath: <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-1 14.41l-2.7-2.7 1.41-1.41 1.29 1.29 3.29-3.29 1.41 1.41-4.7 4.7z" />,
                                            viewBox: "0 0 24 24",
                                            cls: "icon-security"
                                        },
                                        {
                                            title: "Global Scalability",
                                            desc: <><BrandName /> scales instantly from localized kiosks to worldwide screen networks in one click.</>,
                                            iconPath: <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />,
                                            viewBox: "0 0 24 24",
                                            cls: "icon-scalable"
                                        }
                                    ].map((feature, idx) => (
                                        <motion.div
                                            key={`${trackIdx}-${idx}`}
                                            whileHover={{ y: -10, scale: 1.02 }}
                                            className="feature-card feature-card-lighting"
                                            style={{
                                                width: '340px',
                                                flex: '0 0 340px',
                                                textAlign: 'center',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                background: '#0f172a',
                                                padding: '3.5rem 2.5rem',
                                                borderRadius: '32px',
                                                border: '1px solid rgba(255, 255, 255, 0.05)',
                                                boxShadow: '0 30px 60px rgba(0,0,0,0.3)',
                                                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                                            }}
                                        >
                                            <div className={`feature-icon ${feature.cls || ''}`} style={{
                                                fontSize: '2.5rem',
                                                marginBottom: '2rem',
                                                color: '#f97316',
                                                background: 'rgba(249, 115, 22, 0.08)',
                                                width: '80px',
                                                height: '80px',
                                                borderRadius: '24px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                            }}>
                                                <svg viewBox={feature.viewBox} width={48} height={48} fill={feature.cls ? "currentColor" : undefined} xmlns="http://www.w3.org/2000/svg">
                                                    {feature.iconPath}
                                                </svg>
                                            </div>
                                            <h3 style={{
                                                fontSize: '1.8rem',
                                                fontWeight: 900,
                                                color: '#f97316',
                                                marginBottom: '1.25rem',
                                                letterSpacing: '-0.02em'
                                            }}>{feature.title}</h3>
                                            <p style={{
                                                fontSize: '1.05rem',
                                                color: '#94a3b8',
                                                lineHeight: 1.6,
                                                fontWeight: 500,
                                                margin: 0
                                            }}>{feature.desc}</p>
                                        </motion.div>
                                    ))}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>

                    <div className="features-cta">
                        <button className="btn-demo large lighting-btn-primary" style={{ borderRadius: '8px', padding: '1rem 3rem' }}>Get Started</button>
                    </div>
                </section>
            </section>
            <section className="section-lighting-alt" style={{ padding: '6rem 0', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 0.03, pointerEvents: 'none', background: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'20\' viewBox=\'0 0 100 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Ctext x=\'10\' y=\'15\' fill=\'%23000\' font-family=\'Arial\' font-size=\'8\' font-weight=\'bold\'%3EDECK PLAY%3C/text%3E%3C/svg%3E")' }}></div>

                <div className="container">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6rem' }}>
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                            style={{ flex: '0.8', textAlign: 'left' }}
                        >
                            <span className="lighting-badge" style={{ padding: '0.5rem 1.5rem', background: 'rgba(249, 115, 22, 0.1)', color: '#f97316' }}>CUSTOM SOLUTIONS</span>
                            <h2 className="lighting-title" style={{ fontSize: '3.5rem', marginTop: '1.5rem', marginBottom: '1.5rem', lineHeight: 1.1 }}>Enterprise <br />Ready Platform</h2>
                            <p className="lighting-subtitle" style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.6, marginBottom: '2.5rem' }}>
                                We are ready to build the custom signage application your business needs.
                                Deploy bespoke retail interfaces or corporate dashboards designed to handle unlimited screens with localized content and timezone overrides.
                            </p>
                            <div style={{ display: 'flex', gap: '1.5rem' }}>
                                <div style={{ flex: 1 }}>
                                    <h4 style={{ color: '#1a1a1a', fontWeight: 800, marginBottom: '0.5rem' }}>Localized Content</h4>
                                    <p style={{ fontSize: '0.85rem', color: '#64748b' }}>Deliver context-aware assets based on location.</p>
                                </div>
                                <div style={{ flex: 1 }}>
                                    <h4 style={{ color: '#1a1a1a', fontWeight: 800, marginBottom: '0.5rem' }}>Timezone Sync</h4>
                                    <p style={{ fontSize: '0.85rem', color: '#64748b' }}>Automated schedules across global fleets.</p>
                                </div>
                            </div>
                        </motion.div>

                        <div style={{ flex: '1.7', position: 'relative' }}>
                            <motion.div
                                className="dashboard-frame-lighting"
                                initial={{ opacity: 0, scale: 0.95, x: 50 }}
                                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1 }}
                                style={{ position: 'relative' }}
                            >
                                <div style={{
                                    width: '100%',
                                    borderRadius: '48px',
                                    overflow: 'hidden',
                                    boxShadow: '0 40px 100px rgba(0,0,0,0.1)',
                                    background: '#000'
                                }}>
                                    <img src={app_library_mock} alt="App Library Management" style={{ width: '100%', borderRadius: 'inherit', display: 'block' }} />
                                </div>

                                {/* Hotspot: Local Edge */}
                                <motion.div
                                    style={{ position: 'absolute', left: '15%', top: '65%', zIndex: 10 }}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ delay: 1 }}
                                >
                                    <div style={{ position: 'relative' }}>
                                        <motion.div
                                            animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.1, 0.3] }}
                                            transition={{ repeat: Infinity, duration: 2 }}
                                            style={{ position: 'absolute', top: '-15px', left: '-15px', width: '50px', height: '50px', background: '#f97316', borderRadius: '50%' }}
                                        />
                                        <div style={{ width: '20px', height: '20px', background: '#f97316', borderRadius: '50%', border: '4px solid #fff', cursor: 'pointer', boxShadow: '0 0 15px rgba(249, 115, 22, 0.4)' }}></div>

                                        <motion.div
                                            whileHover={{ y: -5 }}
                                            style={{ position: 'absolute', bottom: '30px', left: '-120px', width: '240px', background: '#fff', padding: '1.25rem', borderRadius: '16px', border: '1px solid #f1f5f9', boxShadow: '0 10px 25px rgba(0,0,0,0.05)', textAlign: 'left' }}
                                        >
                                            <h5 style={{ margin: '0 0 0.5rem 0', fontSize: '0.9rem', color: '#1a1a1a', fontWeight: '800' }}>LOCAL EDGE</h5>
                                            <p style={{ margin: 0, fontSize: '0.8rem', color: '#64748b', lineHeight: 1.5 }}>Edge-computing for offline playback and multi-node redundancy.</p>
                                        </motion.div>
                                    </div>
                                </motion.div>

                                {/* Hotspot: Global Clusters */}
                                <motion.div
                                    style={{ position: 'absolute', right: '25%', top: '45%', zIndex: 10 }}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ delay: 1.2 }}
                                >
                                    <div style={{ position: 'relative' }}>
                                        <motion.div
                                            animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.1, 0.3] }}
                                            transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
                                            style={{ position: 'absolute', top: '-15px', left: '-15px', width: '50px', height: '50px', background: '#f97316', borderRadius: '50%' }}
                                        />
                                        <div style={{ width: '20px', height: '20px', background: '#f97316', borderRadius: '50%', border: '4px solid #fff', cursor: 'pointer', boxShadow: '0 0 15px rgba(249, 115, 22, 0.4)' }}></div>

                                        <motion.div
                                            whileHover={{ y: -5 }}
                                            style={{ position: 'absolute', top: '-10px', left: '40px', width: '240px', background: '#fff', padding: '1.25rem', borderRadius: '16px', border: '1px solid #f1f5f9', boxShadow: '0 10px 25px rgba(0,0,0,0.05)', textAlign: 'left' }}
                                        >
                                            <h5 style={{ margin: '0 0 0.5rem 0', fontSize: '0.9rem', color: '#1a1a1a', fontWeight: '800' }}>GLOBAL CLUSTERS</h5>
                                            <p style={{ margin: 0, fontSize: '0.8rem', color: '#64748b', lineHeight: 1.5 }}>Scale architecture designed for millions of globally synced nodes.</p>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="about-section section-lighting-alt" style={{ padding: '6rem 0' }}>
                <div className="container">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6rem' }}>
                        <div style={{ flex: '0.8', textAlign: 'left' }}>
                            <motion.div
                                className="about-badge lighting-badge"
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: false, margin: "50px" }}
                                transition={{ duration: 0.8, type: "spring" }}
                            >🚀 About the App</motion.div>

                            <motion.h2
                                className="lighting-title"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, margin: "50px" }}
                                transition={{ duration: 0.8, type: "spring" }}
                                style={{ marginTop: '2rem', marginBottom: '2rem' }}
                            >Enterprise-Grade <br />Digital Signage</motion.h2>

                            <motion.p className="about-description" style={{ color: '#475569', fontSize: '1rem', lineHeight: 1.7, marginBottom: '2rem' }}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, margin: "50px" }}
                                transition={{ duration: 0.8, delay: 0.1 }}
                            >
                                This project is an enterprise-grade digital signage solution that allows administrators to control exactly what is displayed across multiple TV screens from a single, centralized web dashboard.
                            </motion.p>

                            <motion.p className="about-description secondary"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, margin: "50px" }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                style={{ color: '#64748b', fontSize: '1rem', lineHeight: 1.6 }}
                            >
                                Built with a React.js frontend and a Node.js/Express backend, it features a highly intuitive user interface combined with a robust media processing engine. The system supports uploading videos/images, generating playlists, scheduling content, and broadcasting real-time updates to connected displays.
                            </motion.p>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            style={{ flex: '1.2' }}
                        >
                            <div className="dashboard-frame-lighting" style={{ position: 'relative' }}>
                                <div style={{
                                    width: '100%',
                                    borderRadius: '48px',
                                    overflow: 'hidden',
                                    boxShadow: '0 40px 100px rgba(0,0,0,0.1)',
                                    background: '#000'
                                }}>
                                    <img src={dashboard_mock} alt="Project Dashboard" style={{ width: '100%', borderRadius: 'inherit', display: 'block' }} />
                                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 50%)', borderRadius: 'inherit', pointerEvents: 'none' }}></div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>


            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                style={{
                    maxWidth: '1000px',
                    margin: '4rem auto 6rem',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    boxShadow: '0 40px 100px rgba(0,0,0,0.1)',
                    border: '1px solid rgba(255, 87, 34, 0.1)',
                    background: '#000',
                    position: 'relative'
                }}
            >
                <video
                    src={background_change_video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                />

            </motion.div>



            <section className="core-features-section section-lighting-alt" style={{ padding: '6rem 0' }}>
                <div className="key-features-container">
                    <motion.div
                        className="core-section-header"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        style={{ 
                            display: 'flex', 
                            flexDirection: 'column', 
                            alignItems: 'center', 
                            textAlign: 'center', 
                            maxWidth: '850px', 
                            margin: '0 auto 6rem',
                            width: '100%' 
                        }}
                    >
                        <div className="core-label lighting-highlight">CORE FEATURES</div>
                        <h2 className="lighting-title">Everything your team needs,<br />nothing it doesn't</h2>
                        <p className="lighting-subtitle">Five battle-tested React modules, each designed to solve a specific operational challenge — and extendable enough to grow with you.</p>
                    </motion.div>



                    <div className="core-features-grid">
                        {[
                            {
                                icon: <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>,
                                title: "Drag & Drop Playlists", desc: "Build complex visual schedules in minutes. Our direct manipulation interface makes content creation fast... ",
                                tag: "Playlists →"
                            },
                            {
                                icon: <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>,
                                title: "Live Data Widgets", desc: "Inject real-time business integration deep into your content. Sales goals, live tracking, weather cards... ",
                                tag: "Widgets"
                            },
                            {
                                icon: <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>,
                                title: "Scheduling Engine", desc: "Never miss an important broadcast. Push specific media to specific screens at precise times.",
                                tag: "Schedule Management →"
                            },
                            {
                                icon: <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>,
                                title: "Remote Screen Control", desc: "Manage thousands of devices from anywhere. Group locations, force content updates, or restart remotely. ",
                                tag: "Hardware Control →"
                            },
                            {
                                icon: <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>,
                                title: "Roles & Custom Views", desc: "You'll never be held back by scale. Assign user access... Just manage users into their specific tags, or region specific groups.",
                                tag: "Access Control →"
                            }
                        ].map((kf, i) => (
                            <motion.div
                                key={i}
                                className="core-feature-card core-feature-card-lighting"
                                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: false }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                            >
                                <div className="cf-icon cf-icon-lighting">{kf.icon}</div>
                                <h4 className="lighting-title">{kf.title}</h4>
                                <p className="lighting-subtitle">{kf.desc}</p>
                                <div className="cf-tag lighting-badge">{kf.tag}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industries Section - Standardized Theme */}
            <section className="industry-section" id="industries" style={{ padding: '8rem 0', background: '#fcfcfb' }}>
                <div className="container" style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{ textAlign: 'center', marginBottom: '4rem' }}
                    >
                        <span className="lighting-badge" style={{ padding: '0.4rem 1.2rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: '700' }}>VERSATILE SOLUTIONS</span>
                        <h2 className="lighting-title" style={{ fontSize: '3.5rem', marginTop: '1.5rem' }}>Built for Every Industry</h2>
                    </motion.div>

                    {/* Horizontal Tab Bar */}
                    <div style={{
                        display: 'flex',
                        gap: '0.8rem',
                        padding: '8px',
                        background: '#f1f1ef',
                        borderRadius: '20px',
                        width: 'fit-content',
                        margin: '0 auto 4rem',
                        boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.02)'
                    }}>
                        {[
                            { id: "retail", title: "Retail & Malls" },
                            { id: "corporate", title: "Corporate Offices" },
                            { id: "healthcare", title: "Healthcare Systems" },
                            { id: "education", title: "Education & Campus" }
                        ].map((ind, i) => {
                            const isActive = hoveredIndustryTitle === ind.title;
                            return (
                                <button
                                    key={i}
                                    onClick={() => {
                                        setHoveredIndustryTitle(ind.title);
                                        // Update images based on selection
                                        const found = [
                                            { title: "Retail & Malls", img: retail_showcasee },
                                            { title: "Corporate Offices", img: corporate_new },
                                            { title: "Healthcare Systems", img: healthcare_img },
                                            { title: "Education & Campus", img: education_img }
                                        ].find(item => item.title === ind.title);
                                        if (found) setHoveredIndustryImg(found.img);
                                    }}
                                    style={{
                                        padding: '12px 28px',
                                        borderRadius: '12px',
                                        background: isActive ? '#ffffff' : 'transparent',
                                        border: 'none',
                                        fontSize: '0.95rem',
                                        fontWeight: isActive ? 800 : 600,
                                        color: isActive ? '#1a1a1a' : '#64748b',
                                        cursor: 'pointer',
                                        boxShadow: isActive ? '0 4px 12px rgba(0,0,0,0.06)' : 'none',
                                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                                    }}
                                >
                                    {ind.title}
                                </button>
                            );
                        })}
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '5rem', alignItems: 'start' }}>
                        {/* Left Side: Large Preview Image */}
                        <div style={{
                            position: 'relative',
                            borderRadius: '12px',
                            overflow: 'hidden',
                            boxShadow: '0 40px 100px rgba(0,0,0,0.08)',
                            border: '1px solid rgba(0,0,0,0.05)',
                            background: '#000',
                            height: '600px'
                        }}>
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={hoveredIndustryTitle}
                                    initial={{ opacity: 0, scale: 1.05 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                    style={{ width: '100%', height: '100%' }}
                                >
                                    <img
                                        src={hoveredIndustryImg}
                                        alt={hoveredIndustryTitle}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Right Side: Informational Sidebar */}
                        <div style={{
                            background: '#ffffff',
                            borderRadius: '12px',
                            padding: '4rem',
                            boxShadow: '0 30px 60px rgba(0,0,0,0.03)',
                            border: '1px solid #f1f1ef'
                        }}>
                            <motion.div
                                key={`sidebar-${hoveredIndustryTitle}`}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <span style={{ color: '#f97316', fontWeight: 800, fontSize: '0.8rem', letterSpacing: '2px', textTransform: 'uppercase' }}>TARGET ECOSYSTEM</span>
                                <h3 style={{ fontSize: '2.8rem', fontWeight: 900, color: '#0f172a', margin: '1rem 0 1.5rem' }}>{hoveredIndustryTitle}</h3>
                                <p style={{ fontSize: '1.2rem', color: '#475569', lineHeight: 1.7, marginBottom: '2.5rem' }}>
                                    {[
                                        { title: "Retail & Malls", desc: "Transform your commercial space into a high-conversion digital ecosystem. Leverage dynamic promotions, real-time POS synchronization, and interactive wayfinding to bridge the gap between physical storefronts and digital agility." },
                                        { title: "Corporate Offices", desc: "Empower your workforce with a transparent data culture. Seamlessly integrate live KPI dashboards, mass emergency notification systems, and CEO broadcasts into every corner of your workspace to keep your team aligned globally." },
                                        { title: "Healthcare Systems", desc: "Optimize the patient journey with intelligent queuing and holistic wellness communication. Deliver real-time navigation cues and doctor availability streams while reducing wait perception through calming educational content." },
                                        { title: "Education & Campus", desc: "Foster a connected campus with pervasive digital communication. Deploy mass emergency alerts, live event schedules, and department-specific social boards to empower students and faculty with the information they need instantly." }
                                    ].find(i => i.title === (hoveredIndustryTitle === "Retail & Malls" ? "Retail & Malls" : (hoveredIndustryTitle.includes("Corporate") ? "Corporate Offices" : (hoveredIndustryTitle.includes("Healthcare") ? "Healthcare Systems" : "Education & Campus"))))?.desc}
                                </p>

                                <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '2.5rem' }}>
                                    <div style={{ fontWeight: 800, fontSize: '0.9rem', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1.5rem' }}>
                                        CORE CAPABILITIES <span style={{ color: '#94a3b8' }}>↗</span>
                                    </div>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
                                        {[
                                            { title: "Retail & Malls", caps: ["Dynamic Pricing", "Flash Sales", "Store Wayfinding", "Real-time POS Sync"] },
                                            { title: "Corporate Offices", caps: ["Internal Dashboards", "Room Booking", "Emergency Alerts", "Global Node Management"] },
                                            { title: "Healthcare Systems", caps: ["Patient Queuing", "Wellness Content", "Wayfinding", "Staff Dashboards"] },
                                            { title: "Education & Campus", caps: ["Campus Alerts", "Event Schedules", "Study Wayfinding", "Social Walls"] }
                                        ].find(i => i.title === (hoveredIndustryTitle === "Retail & Malls" ? "Retail & Malls" : (hoveredIndustryTitle.includes("Corporate") ? "Corporate Offices" : (hoveredIndustryTitle.includes("Healthcare") ? "Healthcare Systems" : "Education & Campus"))))?.caps.map((cap, i) => (
                                            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1rem', color: '#475569', fontWeight: 600 }}>
                                                <div style={{ width: '6px', height: '6px', background: '#f97316', borderRadius: '50%' }} />
                                                {cap}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <button 
                                    onClick={() => navigate('/solutions/' + (hoveredIndustryTitle === "Retail & Malls" ? "retail" : (hoveredIndustryTitle.includes("Corporate") ? "corporate" : (hoveredIndustryTitle.includes("Healthcare") ? "healthcare" : "education"))))}
                                    style={{
                                        marginTop: '3rem',
                                        width: '100%',
                                        padding: '1.25rem',
                                        borderRadius: '12px',
                                        background: '#0f172a',
                                        color: '#fff',
                                        border: 'none',
                                        fontWeight: 800,
                                        fontSize: '1rem',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.background = '#f97316';
                                        e.target.style.boxShadow = '0 10px 25px rgba(249, 115, 22, 0.25)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.background = '#0f172a';
                                        e.target.style.boxShadow = 'none';
                                    }}
                                >
                                    Explore {hoveredIndustryTitle} Sector &rarr;
                                </button>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="faq-section section-lighting" id="faq" style={{ padding: '6rem 3rem' }}>
                <div className="faq-container">
                    <motion.h2
                        className="lighting-title"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8 }}
                    >Frequently Asked Questions</motion.h2>
                    <div className="faq-grid">
                        {[
                            {
                                q: <>What hardware do I need for <BrandName />?</>,
                                a: <><BrandName /> is hardware agnostic. You can use any Android-based player, Amazon Fire TV Stick, or our dedicated media players to start streaming content.</>
                            },
                            {
                                q: "Can I manage multiple locations remotely?",
                                a: "Absolutely. Our cloud-based dashboard allows you to manage thousands of screens across multiple time zones and locations from a single login."
                            },
                            {
                                q: <>Does <BrandName /> work offline?</>,
                                a: "Yes. Once your content is downloaded, our player continues to run your schedules even if the internet connection is lost, syncing automatically when it returns."
                            },
                            {
                                q: "Are custom signage apps included for free?",
                                a: "Yes, custom app slots are included for free within each plan according to the tiers mentioned in our pricing (ranging from 1 to 10 apps). This allows you to deploy specialized tools without additional overhead."
                            },
                            {
                                q: "Can you build an app specifically for our needs?",
                                a: "Absolutely. Beyond our standard library, we are ready to build the custom signage application your business needs on demand. Our engineering team specializes in tailoring workflows to your unique operational requirements."
                            }

                        ].map((faq, idx) => (
                            <motion.div
                                key={idx}
                                className="faq-item faq-item-lighting"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                            >
                                <div className="faq-question faq-question-lighting">{faq.q}</div>
                                <div className="faq-answer faq-answer-lighting">{faq.a}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="final-cta-section" style={{ padding: '6rem 0' }}>
                <div className="final-cta-content">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2>Ready to transform your screens?</h2>
                        <p>Join thousands of businesses that trust <BrandName /> for their digital signage needs.</p>
                        <motion.button
                            className="white-btn"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => window.location.href = '/pricing'}
                        >
                            Get Started Now
                        </motion.button>
                        <p style={{ marginTop: '2rem', fontSize: '0.9rem', opacity: 0.7 }}>Secure • Enterprise-Ready • 24/7 Priority Support</p>
                    </motion.div>
                </div>
            </section>
        </>
    );
}

export default Home;

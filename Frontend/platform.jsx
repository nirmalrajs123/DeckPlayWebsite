import React, { useRef, useMemo } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import './App.css'
import BrandName from './BrandName';

// Importing individual gallery images from the scroll directory
import img0 from './scroll/0.png'
import img1 from './scroll/1.png'
import img2 from './scroll/2.png'
import img3 from './scroll/3.png'
import img4 from './scroll/4.png'
import img5 from './scroll/5.png'
import img6 from './scroll/6.png'
import img7 from './scroll/7.png'
import img8 from './scroll/8.png'
import img9 from './scroll/9.png'
import img10 from './scroll/10.png'
import img11 from './scroll/11.png'

const FeatureCallout = ({ x, y, label, desc, side = "right", delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{
                position: 'absolute',
                left: x,
                top: y,
                zIndex: 20,
                display: 'flex',
                alignItems: 'center',
                pointerEvents: 'none'
            }}
        >
            {/* The Hotspot Dot */}
            <div style={{
                width: '14px',
                height: '14px',
                background: '#ef4444',
                borderRadius: '50%',
                boxShadow: '0 0 0 4px rgba(239, 68, 68, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <motion.div
                    animate={{ scale: [1, 2, 1], opacity: [0.6, 0, 0.6] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeOut" }}
                    style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        border: '2px solid #ef4444',
                        borderRadius: '50%'
                    }}
                />
                <div style={{ width: '6px', height: '6px', background: 'white', borderRadius: '50%' }} />
            </div>

            {/* Connecting Line and Enhanced Label Container */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                position: 'absolute',
                left: side === 'right' ? '14px' : 'auto',
                right: side === 'left' ? '14px' : 'auto',
                flexDirection: side === 'right' ? 'row' : 'row-reverse',
            }}>
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '60px' }}
                    viewport={{ once: true }}
                    transition={{ delay: delay + 0.3, duration: 0.8, ease: "circOut" }}
                    style={{
                        height: '1px',
                        background: 'linear-gradient(to right, #ef4444, rgba(239, 68, 68, 0.1))',
                        transform: side === 'left' ? 'rotate(180deg)' : 'none',
                        transformOrigin: 'left'
                    }}
                />
                <motion.div
                    initial={{ opacity: 0, x: side === 'right' ? 20 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    whileHover={{
                        scale: 1.05,
                        boxShadow: "0 20px 50px rgba(239, 68, 68, 0.35)",
                    }}
                    viewport={{ once: true }}
                    transition={{ delay: delay + 0.8, duration: 0.5 }}
                    style={{
                        background: 'rgba(255, 255, 255, 0.98)',
                        backdropFilter: 'blur(16px)',
                        padding: '12px 20px',
                        borderRadius: '16px',
                        border: '1px solid rgba(239, 68, 68, 0.2)',
                        boxShadow: '0 15px 35px rgba(239, 68, 68, 0.15)',
                        width: '220px',
                        marginLeft: side === 'right' ? '-5px' : '0',
                        marginRight: side === 'left' ? '-5px' : '0',
                        textAlign: side === 'right' ? 'left' : 'right',
                        pointerEvents: 'auto',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease'
                    }}
                >
                    <div style={{
                        fontSize: '0.8rem',
                        fontWeight: 900,
                        color: '#0f172a',
                        letterSpacing: '0.04em',
                        textTransform: 'uppercase',
                        marginBottom: '4px'
                    }}>
                        {label}
                    </div>
                    <div style={{
                        fontSize: '0.7rem',
                        color: '#64748b',
                        lineHeight: '1.4',
                        fontWeight: 500
                    }}>
                        {desc}
                    </div>
                </motion.div>
            </div>
        </motion.div>
    )
}

const LogoBackground = () => {
    return (
        <div style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1,
            opacity: 0.15,
            pointerEvents: 'none',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))',
            gap: '30px',
            padding: '30px',
            overflow: 'hidden',
            WebkitMaskImage: 'radial-gradient(circle, transparent 20%, black 80%)',
            maskImage: 'radial-gradient(circle, transparent 20%, black 80%)'
        }}>
            {Array.from({ length: 150 }).map((_, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    {i % 4 === 0 ? (
                        <div style={{ fontWeight: 900, fontSize: '0.9rem', letterSpacing: '0.12em', display: 'flex' }}>
                            <BrandName />
                        </div>
                    ) : (
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="4">
                            <rect x="2" y="5" width="20" height="14" rx="3" />
                            <path d="M10 9l5 3-5 3V9z" fill="#ef4444" />
                        </svg>
                    )}
                </div>
            ))}
        </div>
    )
}

const AppleStyleSection = ({ slide, index }) => {
    const ref = useRef(null);
    const isEven = index % 2 === 0;

    // Track the scroll progress for animation
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const smoothProgress = useSpring(scrollYProgress, { stiffness: 300, damping: 40, restDelta: 0.001 });

    // Apple-style transformations
    const y = useTransform(smoothProgress, [0, 0.5, 1], [100, 0, -100]);
    const opacity = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    const scale = useTransform(smoothProgress, [0.3, 0.5, 0.7], [0.95, 1, 1.05]);

    return (
        <section
            ref={ref}
            style={{
                position: "relative",
                height: "110vh",
                background: index % 2 === 0 ? "rgba(248, 250, 252, 0.4)" : "rgba(255, 255, 255, 0.4)",
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden'
            }}
        >
            <div className="container" style={{ maxWidth: '1400px', width: '100%', padding: '0 4rem' }}>
                <motion.div
                    style={{
                        display: 'flex',
                        flexDirection: isEven ? 'row' : 'row-reverse',
                        alignItems: 'center',
                        gap: '6rem',
                        y,
                        opacity,
                        scale,
                    }}
                >
                    {/* Text Pillar */}
                    <div style={{ flex: '0.8', textAlign: 'left' }}>
                        <motion.span
                            className="lighting-badge"
                            style={{
                                marginBottom: "1.5rem",
                                display: "inline-block",
                                letterSpacing: "0.2em",
                                fontSize: '0.85rem'
                            }}
                        >
                            {slide.subtitle}
                        </motion.span>

                        <h2
                            className="lighting-title"
                            style={{
                                fontSize: "clamp(2rem, 3.5vw, 3.5rem)",
                                fontWeight: 900,
                                marginBottom: "1.5rem",
                                letterSpacing: "-0.04em",
                                lineHeight: 1.05,
                            }}
                        >
                            {slide.title}
                        </h2>

                        <p
                            className="lighting-subtitle"
                            style={{
                                fontSize: "1.1rem",
                                color: "#64748b",
                                maxWidth: "450px",
                                lineHeight: 1.6,
                                marginBottom: '2rem'
                            }}
                        >
                            {slide.desc}
                        </p>
                    </div>

                    {/* Visual Pillar */}
                    <div style={{ flex: '1.8', position: 'relative' }}>
                        <div style={{ position: 'relative', display: 'inline-block', width: '100%' }}>
                            <motion.img
                                src={slide.image}
                                alt={slide.title}
                                style={{
                                    width: "100%",
                                    borderRadius: "12px",
                                    boxShadow: "0 50px 100px rgba(0,0,0,0.1), 0 15px 30px rgba(0,0,0,0.05)",
                                    border: "1px solid rgba(226, 232, 240, 0.8)",
                                    display: 'block'
                                }}
                            />

                            {/* Interactive Feature Callouts - Adjusted for side layout */}
                            {slide.callouts && slide.callouts.map((callout, i) => (
                                <FeatureCallout
                                    key={i}
                                    x={callout.x}
                                    y={callout.y}
                                    label={callout.label}
                                    desc={callout.desc}
                                    side={callout.side}
                                    delay={callout.delay}
                                />
                            ))}

                            {/* Glossy overlay effect */}
                            <div style={{
                                position: 'absolute',
                                inset: 0,
                                borderRadius: '40px',
                                background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 60%)',
                                pointerEvents: 'none'
                            }} />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const Platform = () => {
    const slides = useMemo(() => [
        {
            image: img0, subtitle: "THE ECOSYSTEM", title: <><span style={{ color: '#f97316' }}><BrandName /></span> Evolution</>, desc: <><BrandName /> is a unified digital signage framework designed for high-performance enterprise deployments.</>,
            callouts: [
                { x: "78%", y: "45%", label: "Secure Gateway", desc: "Enterprise-grade authentication with AES-256 layer.", side: "right", delay: 0.2 },
                { x: "25%", y: "58%", label: "Centralized HUB", desc: "Unified management interface for global fleets.", side: "right", delay: 0.4 } // Changed to right to avoid text on left
            ]
        },
        {
            image: img1, subtitle: "CLOUD CONTROL", title: <><span style={{ color: '#f97316' }}>Absolute</span> Management</>, desc: "Manage thousands of global nodes from a single, high-fidelity administrative dashboard.",
            callouts: [
                { x: "85%", y: "30%", label: "Node Tracking", desc: "Real-time tracking for every active screen.", side: "left", delay: 0.2 }, // Changed to left to avoid text on right
                { x: "15%", y: "50%", label: "Global Sync", desc: "Instant deployment of assets across all continents.", side: "right", delay: 0.4 }
            ]
        },
        {
            image: img2, subtitle: "MEDIA ENGINE", title: <><span style={{ color: '#f97316' }}>Intelligent</span> Assets</>, desc: "Proprietary transcoding handles 4K high-bitrate content with zero-latency priority.",
            callouts: [
                { x: "70%", y: "35%", label: "4K Rendering", desc: "Native 4K playback at 60FPS across all resolutions.", side: "right", delay: 0.2 },
                { x: "20%", y: "65%", label: "Low Latency", desc: "Delta-sync logic ensures sub-200ms content delivery.", side: "right", delay: 0.4 } // Changed to right to avoid text on left
            ]
        },
        {
            image: img3, subtitle: "CONTENT ORCHESTRATION", title: <><span style={{ color: '#f97316' }}>Playlist</span> Management</>, desc: "Create, manage and organize your content sequences for screen deployment. Build complex loops and rules in a single visual dashboard.",
            callouts: [
                { x: "75%", y: "45%", label: "Rule Engine", desc: "Complex conditional logic for automated content triggers.", side: "left", delay: 0.2 }, // Changed to left to avoid text on right
                { x: "25%", y: "35%", label: "Playlist Management", desc: "Create, manage and organize your content sequences for screen deployment.", side: "right", delay: 0.4 }
            ]
        },
        {
            image: img4, subtitle: "PRECISION PLAYBACK", title: <><span style={{ color: '#f97316' }}>Schedule</span> Management</>, desc: "Create and manage schedules for content playback on screens. Automate your network with time-based triggers and multi-location sync.",
            callouts: [
                { x: "80%", y: "25%", label: "Auto Schedule", desc: "Timezone-aware scheduling across global networks.", side: "right", delay: 0.2 },
                { x: "15%", y: "45%", label: "Menu Sync", desc: "Bulk management for multi-franchise store settings.", side: "right", delay: 0.4 } // Changed to right to avoid text on left
            ]
        },
        {
            image: img5, subtitle: "MONITORING", title: <><span style={{ color: '#f97316' }}>Screen</span> Monitoring</>, desc: "Real-time heatmaps and heartbeat monitoring ensure 99.99% network reliability.",
            callouts: [
                { x: "50%", y: "40%", label: "Live Heatmap", desc: "Global cluster health visualization for ops teams.", side: "left", delay: 0.2 }, // Change side for better fit
                { x: "20%", y: "20%", label: "Node Health", desc: "Heartbeat tracking with automated failure alerts.", side: "right", delay: 0.4 }
            ]
        },
        {
            image: img6, subtitle: "SCALABILITY", title: <><span style={{ color: '#f97316' }}>Enterprise</span> Ready</>, desc: "customizable  application for your business needs can be deployed . Built to handle unlimited screens with localized content and timezone overrides.",
            callouts: [
                { x: "82%", y: "38%", label: "Global Clusters", desc: "Scale architecture designed for millions of nodes.", side: "right", delay: 0.2 },
                { x: "12%", y: "62%", label: "Local Edge", desc: "Edge-computing for offline playback and redundancy.", side: "right", delay: 0.4 } // Changed to avoid text
            ]
        },
        {
            image: img7, subtitle: "INTERACTIVE", title: <><span style={{ color: '#f97316' }}>Digital</span> Wayfinding</>, desc: "Transform any screen into a reactive touch-point for visitor navigation and maps.",
            callouts: [
                { x: "65%", y: "55%", label: "Touch Ready", desc: "Multi-touch support for interactive directory systems.", side: "left", delay: 0.2 }, // Adjusted
                { x: "32%", y: "28%", label: "Map Engine", desc: "Native vector maps with real-time route plotting.", side: "right", delay: 0.4 }
            ]
        },
        {
            image: img9, subtitle: "SECURITY", title: <><span style={{ color: '#f97316' }}>Military</span> Encryption</>, desc: "AES-256 protected asset delivery ensures your data remains private and secure.",
            callouts: [
                { x: "75%", y: "75%", label: "Audit Logs", desc: "Immutable logs for screen access and asset edits.", side: "right", delay: 0.2 },
                { x: "22%", y: "22%", label: "AES-256", desc: "End-to-end encryption for every transmitted byte.", side: "right", delay: 0.4 } // Adjusted
            ]
        },


    ], []);

    return (
        <div className="platform-page" style={{ position: 'relative' }}>
            <LogoBackground />

            {/* Hero Section */}
            <motion.header
                className="hero lighting-hero"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                style={{ padding: '6rem 0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
                <div className="hero-content">
                    <span className="lighting-badge" style={{ letterSpacing: '0.4em' }}>MODULAR ARCHITECTURE</span>
                    <h1 className="lighting-title" style={{ fontSize: '7rem', marginBottom: '1.5rem' }}>
                        <span style={{ color: '#f97316' }}>Built</span> for <br />Performance
                    </h1>
                    <p className="lighting-subtitle" style={{ fontSize: '1.5rem', maxWidth: '800px', margin: '0 auto' }}>
                        Twelve specialized modules. One seamless experience. Discover the engineering behind <BrandName />'s visual story.
                    </p>
                    <div style={{ marginTop: '3rem' }}>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1, duration: 1 }}
                            style={{ fontSize: '0.9rem', color: '#94a3b8', fontWeight: 600, display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                        >
                            <span>Scroll to explore</span>
                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ repeat: Infinity, duration: 2 }}
                                style={{ marginTop: '1rem', width: '2px', height: '40px', background: 'linear-gradient(180deg, #ef4444 0%, transparent 100%)' }}
                            />
                        </motion.div>
                    </div>
                </div>
            </motion.header>

            {/* Apple-Style Sticky Showcase */}
            <div className="platform-storytelling">
                {slides.map((slide, index) => (
                    <AppleStyleSection key={index} slide={slide} index={index} />
                ))}
            </div>

            {/* Technical Detail Section */}
            <section className="section-lighting" style={{ padding: '6rem 3rem', background: '#ffffff', borderTop: '1px solid #e2e8f0' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10rem', alignItems: 'center' }}>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <span className="lighting-badge">ENGINEERING</span>
                            <h2 className="lighting-title" style={{ fontSize: '4.5rem', marginTop: '1.5rem' }}><span style={{ color: '#f97316' }}>The Power</span> <br />of Modernity</h2>
                            <p className="lighting-subtitle" style={{ marginTop: '2.5rem', fontSize: '1.35rem' }}>
                                We've engineered every pixel to deliver absolute clarity. Our hybrid-cloud sync ensures your content is live, everywhere, in under 200ms.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-2 gap-8" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3.5rem' }}>
                            {[
                                { title: "Latency", value: "120ms" },
                                { title: "Uptime", value: "99.999%" },
                                { title: "Security", value: "AES-256" },
                                { title: "Scale", value: "Unlimited" }
                            ].map((spec, i) => (
                                <motion.div
                                    key={i}
                                    style={{ padding: '3.5rem 2rem', background: '#f8fafc', borderRadius: '40px', border: '1px solid #e2e8f0', textAlign: 'center' }}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1, duration: 0.6 }}
                                >
                                    <div className="lighting-highlight" style={{ fontSize: '2.8rem', fontWeight: 900, marginBottom: '0.8rem' }}>{spec.value}</div>
                                    <div style={{ fontWeight: 800, color: '#1a202c', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '0.25em' }}>{spec.title}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="final-cta-section" style={{ padding: '6rem 3rem' }}>
                <div className="final-cta-content">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="lighting-title" style={{ color: 'white', fontSize: '5rem', letterSpacing: '-0.04em' }}><span style={{ color: '#f97316' }}>Ready</span> to Launch?</h2>
                        <p className="lighting-subtitle" style={{ color: 'rgba(255,255,255,0.6)', margin: '3rem 0', fontSize: '1.5rem' }}>
                            Join the elite teams broadcasting with <BrandName />.
                        </p>
                        <motion.button
                            className="white-btn"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                                background: 'white',
                                color: '#ef4444',
                                padding: '1.5rem 5rem',
                                borderRadius: '16px',
                                fontWeight: 800,
                                fontSize: '1.25rem',
                                boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
                            }}
                        >
                            Get Started
                        </motion.button>
                        <div style={{ marginTop: '3rem', color: 'rgba(255,255,255,0.4)', fontSize: '0.9rem', fontWeight: 600 }}>
                            1 Screen Forever Free • Unlimited Assets
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Platform;

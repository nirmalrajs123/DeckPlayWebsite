import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useParams, useNavigate } from 'react-router-dom'
import BrandName from './BrandName'
import './App.css'

// Importing Solution Images
import retailImg from './solution/WhatsApp Image 2026-04-05 at 12.53.56 PM.jpeg'
import corporateImg from './solution/Whisk_bc691c229184d9d90c94e581b45c11e0dr.png'
import hospitalityImg from './solution/Whisk_01475b5647d74689f63428cbab52d70eeg.png'
import restaurantImg from './solution/Whisk_56aec759a7f2b118dbd4e7f86fb56bc9dr.png'
import educationImg from './solution/WhatsApp Image 2026-04-05 at 12.53.54 PM (4).jpeg'
import corporate_new from "./assestes/Screenshot 2026-04-06 095736.png";
import retail_showcasee from "./assestes/Screenshot 2026-04-06 095428.png";
import healthcare_img from "./assestes/industries/healthcare.jpg";
import rest_img from "./assestes/Whisk_deae43c0217db6b89b84ff02aff5b1c6dr.png";
import showcase_vid from "./assestes/create_a_gif_202604061230.mp4";

const BenchmarkShowcase = ({ industries, activeTab, setActiveTab }) => {
    const benchmarkData = Object.fromEntries(industries.map(ind => [
        ind.id || ind.title,
        {
            title: ind.title,
            yLabel: 'Performance Index (%)',
            desc: ind.desc,
            shortDesc: ind.shortDesc,
            image: ind.image,
            bars: [
                { label: 'Uptime', value: 99.9, active: true },
                { label: 'Engagement', value: Math.floor(Math.random() * 15 + 80) },
                { label: 'Latency', value: Math.floor(Math.random() * 20 + 85) },
                { label: 'ROI Scale', value: Math.floor(Math.random() * 25 + 75) },
                { label: 'Sync Speed', value: 98.4 }
            ],
            methodology: ind.features.map(f => ({ label: 'Feature', val: f }))
        }
    ]));

    const currentKey = activeTab || (industries[0].id || industries[0].title);
    const current = benchmarkData[currentKey] || benchmarkData[industries[0].id || industries[0].title];

    return (
        <section style={{ padding: '6rem 0', background: 'transparent' }}>
            <div className="container" style={{ maxWidth: '1600px', margin: '0 auto', padding: '0 2rem' }}>

                <div style={{
                    background: '#fcfcfb',
                    borderRadius: '40px',
                    padding: '4rem',
                    border: '1px solid #f1f1ef',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '3.5rem',
                    boxShadow: '0 40px 100px rgba(0,0,0,0.02)'
                }}>
                    {/* Tab Bar */}
                    <div style={{
                        display: 'flex',
                        gap: '0.8rem',
                        padding: '8px',
                        background: '#f1f1ef',
                        borderRadius: '20px',
                        width: 'fit-content',
                        alignSelf: 'center'
                    }}>
                        {industries.map((ind, i) => {
                            const industryId = ind.id || ind.title;
                            const isActive = activeTab === industryId;
                            return (
                                <button
                                    key={i}
                                    onClick={() => setActiveTab(industryId)}
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

                    <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: '6rem', alignItems: 'start' }}>
                        {/* Left: Chart Area */}
                        <div>
                            <div style={{
                                background: '#000',
                                borderRadius: '12px',
                                position: 'relative',
                                height: '600px',
                                overflow: 'hidden',
                                boxShadow: '0 40px 100px rgba(0,0,0,0.15)',
                                border: '1px solid rgba(255, 255, 255, 0.1)'
                            }}>
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeTab}
                                        initial={{ opacity: 0, scale: 1.05 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                        style={{ width: '100%', height: '100%', borderRadius: 'inherit', overflow: 'hidden' }}
                                    >
                                        {current.image.endsWith('.mp4') ? (
                                            <video src={current.image} autoPlay muted loop playsInline style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                        ) : (
                                            <img src={current.image} alt={current.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                        )}
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                            {/* NEW: Dynamic Description Content under image */}
                            <motion.div
                                key={`desc-${activeTab}`}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                style={{ marginTop: '2.5rem', textAlign: 'center' }}
                            >
                                <p style={{ fontSize: '1.4rem', fontWeight: 600, color: '#475569', lineHeight: 1.6, maxWidth: '800px', margin: '0 auto' }}>
                                    {current.shortDesc}
                                </p>
                            </motion.div>
                        </div>

                        {/* Right: Info Sidebar */}
                        <div style={{
                            background: '#ffffff',
                            borderRadius: '12px',
                            border: '1px solid #f1f1ef',
                            padding: '4rem',
                            position: 'sticky',
                            top: '100px',
                            boxShadow: '0 20px 60px rgba(0,0,0,0.02)'
                        }}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                                <div>
                                    <div style={{ color: '#f97316', fontWeight: 900, fontSize: '0.85rem', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '1rem' }}>Target Ecosystem</div>
                                    <h3 style={{ fontSize: '2.4rem', fontWeight: 900, color: '#1a1a1a', marginBottom: '1.5rem', lineHeight: 1.2 }}>
                                        {current.title}
                                    </h3>
                                    <p style={{ fontSize: '1.15rem', color: '#64748b', lineHeight: 1.7 }}>
                                        {current.desc}
                                    </p>
                                </div>

                                <div style={{ borderTop: '2px solid #f1f1ef', paddingTop: '3rem' }}>
                                    <h4 style={{ fontSize: '0.85rem', fontWeight: 900, color: '#1a1a1a', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                        Core Capabilities <span style={{ fontSize: '1.2rem', opacity: 0.3 }}>↗</span>
                                    </h4>
                                    <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gridTemplateColumns: '1fr', gap: '1.2rem' }}>
                                        {current.methodology.map((m, i) => (
                                            <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1rem', fontWeight: 600 }}>
                                                <div style={{ width: '8px', height: '8px', background: '#f97316', borderRadius: '50%' }} />
                                                <span style={{ color: '#475569' }}>{m.val}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const SolutionDetail = ({ industryData, onBack }) => {
    return (
        <div style={{ background: 'transparent' }}>
            {/* Header / Hero for Detail Page */}
            <section style={{ padding: '4rem 0 8rem 0', position: 'relative' }}>
                <div className="container" style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }}>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <span className="lighting-badge" style={{ background: 'rgba(249, 115, 22, 0.1)', color: '#f97316', padding: '8px 16px', borderRadius: '999px', fontSize: '0.8rem', fontWeight: 800, letterSpacing: '2px' }}>{industryData.category}</span>
                            <h1 style={{ fontSize: '4.5rem', fontWeight: 900, marginBottom: '2rem', lineHeight: 1.1, color: '#1a1a1a', marginTop: '1.5rem' }}>
                                {industryData.title} <br /><span style={{ color: '#f97316' }}>CMS Solution</span>
                            </h1>
                            <div style={{ fontSize: '1.25rem', color: '#475569', lineHeight: 1.6, marginBottom: '3rem' }}>
                                {industryData.desc}
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                                {industryData.keyStats?.map((st, i) => (
                                    <div key={i}>
                                        <div style={{ fontSize: '2rem', fontWeight: 900, color: '#f97316' }}>{st.val}</div>
                                        <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '1px' }}>{st.label}</div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                            style={{ position: 'relative' }}
                        >
                            <div style={{
                                background: '#fff', padding: '12px', borderRadius: '48px',
                                boxShadow: '0 40px 100px rgba(0,0,0,0.12)', border: '1px solid #f1f1ef'
                            }}>
                                {industryData.image.endsWith('.mp4') ? (
                                    <video src={industryData.image} autoPlay muted loop playsInline style={{ width: '100%', borderRadius: '36px', display: 'block', objectFit: 'cover', minHeight: '500px' }} />
                                ) : (
                                    <img src={industryData.image} alt={industryData.title} style={{ width: '100%', borderRadius: '36px', display: 'block', objectFit: 'cover', minHeight: '500px' }} />
                                )}
                            </div>
                            {/* Accent badge */}
                            <div style={{ position: 'absolute', bottom: '-40px', right: '40px', background: '#0f172a', color: '#fff', padding: '2rem', borderRadius: '32px', boxShadow: '0 20px 40px rgba(0,0,0,0.2)', maxWidth: '280px' }}>
                                <div style={{ fontSize: '0.7rem', fontWeight: 800, color: '#f97316', letterSpacing: '2px', marginBottom: '0.5rem' }}>ENTERPRISE FEATURE</div>
                                <div style={{ fontSize: '1rem', fontWeight: 700 }}>Built for 99.9% Critical Network Uptime.</div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Tactical Grid */}
            <section style={{ padding: '8rem 0', background: '#fcfcfb' }}>
                <div className="container" style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
                    <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
                        <h2 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '1.5rem' }}>Sector-Specific Intelligence</h2>
                        <p style={{ fontSize: '1.1rem', color: '#64748b' }}>Custom tools developed for the unique challenges of {industryData.title.split(' ')[0]}.</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem' }}>
                        {industryData.deepFeatures?.map((f, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -10 }}
                                style={{ background: '#fff', padding: '3rem 2.5rem', borderRadius: '32px', border: '1px solid #f1f1ef', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}
                            >
                                <div style={{ width: '50px', height: '50px', background: 'rgba(249, 115, 22, 0.1)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', marginBottom: '1.5rem' }}>
                                    {f.icon || "✓"}
                                </div>
                                <h4 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '1rem' }}>{f.title}</h4>
                                <p style={{ fontSize: '0.95rem', color: '#64748b', lineHeight: 1.5 }}>{f.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

const Solutions = () => {
    const { industry } = useParams();
    const navigate = useNavigate();

    const allSolutions = [
        {
            id: "retail",
            title: "Retail & Malls",
            desc: <><BrandName /> transforms traditional static displays into high-conversion digital assets. Drive foot traffic and increase average order value with dynamic digital posters and interactive wayfinding maps.</>,
            shortDesc: "Transform your commercial space into a high-conversion digital ecosystem. Leverage dynamic promotions, real-time POS synchronization, and interactive wayfinding to bridge the gap between physical storefronts and digital agility.",
            icon: "🛍️",
            image: showcase_vid,
            category: "Commercial Ecosystem",
            keyStats: [{ val: "42%", label: "Conversion Lift" }, { val: "2.4B+", label: "Monthly Impressions" }],
            features: ["Dynamic Pricing", "Flash Sales", "Store Wayfinding", "Real-time POS Sync"],
            deepFeatures: [
                { title: "Dynamic Ad Slotting", desc: "Monetize your screen space by selling programmatic ad slots to retail partners.", icon: "💰" },
                { title: "Footfall Heatmaps", desc: "Integrate with vision sensors to track customer paths relative to active displays.", icon: "🔥" },
                { title: "Inventory Sync", desc: "Automatically hide menu items or products that go out of stock in real-time.", icon: "📦" },
                { title: "Mobile Carry-over", desc: "Allow users to scan QR codes on screens to take product catalogs with them.", icon: "📱" }
            ]
        },
        {
            id: "corporate",
            title: "Corporate Offices",
            desc: "Keep your workforce aligned with real-time KPI dashboards, meeting room schedules, and CEO broadcasts. Build a transparent culture through persistent visual data streams.",
            shortDesc: "Empower your workforce with a transparent data culture. Seamlessly integrate live KPI dashboards, mass emergency notification systems, and CEO broadcasts into every corner of your workspace to keep your team aligned globally.",
            icon: "🏢",
            image: corporate_new,
            category: "Workplace Ecosystem",
            keyStats: [{ val: "94%", label: "Staff Reach" }, { val: "<1ms", label: "Sync Latency" }],
            features: ["Internal Dashboards", "Room Booking", "Emergency Alerts", "Global Node Management"],
            deepFeatures: [
                { title: "KPI Integration", desc: "Securely display Salesforce, Jira, or Tableau dashboards on corporate walls.", icon: "📊" },
                { title: "Room Signage", desc: "Table-mounted displays that sync with Google/Outlook calendars instantly.", icon: "📅" },
                { title: "Mass Notification", desc: "Force emergency alerts across all global nodes in under 500ms.", icon: "📢" },
                { title: "Cultural Streams", desc: "Social walls and peer-recognition feeds to drive internal engagement.", icon: "🤝" }
            ]
        },
        {
            id: "healthcare",
            title: "Healthcare Systems",
            desc: "Streamline patient flow with interactive waiting room displays, digital queuing systems, and wellness education broadcasts in clinics and hospitals.",
            shortDesc: "Optimize the patient journey with intelligent queuing and holistic wellness communication. Deliver real-time navigation cues and doctor availability streams while reducing wait perception through calming educational content.",
            icon: "🏥",
            image: healthcare_img,
            category: "Medical Ecosystem",
            keyStats: [{ val: "30%", label: "Wait Perception" }, { val: "100%", label: "HIPAA Compliant" }],
            features: ["Patient Queuing", "Wellness Content", "Wayfinding", "Staff Dashboards"],
            deepFeatures: [
                { title: "Patient Queuing", desc: "Anonymized, digital queuing systems that respect patient privacy.", icon: "⏳" },
                { title: "Doctor Calendars", desc: "Live availability streams for specialist and consultation rooms.", icon: "🩺" },
                { title: "Wellness Feeds", desc: "Educational content streams to reduce patient anxiety in lobbies.", icon: "🌿" },
                { title: "Staff Nodes", desc: "Secure back-office displays for critical hospital-wide announcements.", icon: "🏢" }
            ]
        },
        {
            id: "education",
            title: "Education & Campus",
            desc: "Foster a connected campus with pervasive digital communication. Deploy mass emergency alerts, live event schedules, and department-specific social boards.",
            shortDesc: "Foster a connected campus with pervasive digital communication. Deploy mass emergency alerts, live event schedules, and department-specific social boards to empower students and faculty with the information they need instantly.",
            icon: "🎓",
            image: educationImg,
            category: "Education Ecosystem",
            keyStats: [{ val: "100%", label: "Campus Coverage" }, { val: "Real-time", label: "Alert Latency" }],
            features: ["Campus Alerts", "Event Schedules", "Study Wayfinding", "Social Walls"],
            deepFeatures: [
                { title: "Emergency Alerts", desc: "Instantly override all displays for critical campus-wide safety announcements.", icon: "🚨" },
                { title: "Schedule Sync", desc: "Dynamic classroom and ballroom schedules synced with ERP systems.", icon: "⏰" },
                { title: "Student Socials", desc: "Moderated social media walls to showcase student life and campus news.", icon: "📱" },
                { title: "Departmental Nodes", desc: "Specific content controls for different faculties and research labs.", icon: "🔬" }
            ]
        }
    ];

    const [activeTab, setActiveTab] = useState(allSolutions[0].id);

    useEffect(() => {
        if (industry) {
            const found = allSolutions.find(s => s.id === industry);
            if (found) {
                setActiveTab(found.id);
                // Force scroll to top on sub-navigation
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }
    }, [industry]);

    const handleTabChange = (id) => {
        setActiveTab(id);
    };

    const selectedIndustry = industry ? allSolutions.find(s => s.id === industry) : null;

    return (
        <div className="solutions-page" style={{ background: 'transparent', color: '#1a1a1a', position: 'relative' }}>
            <AnimatePresence mode="wait">
                {!industry ? (
                    <motion.div
                        key="overview"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <section className="solutions-hero" style={{ padding: '6rem 0', textAlign: 'center', background: 'transparent' }}>
                            <div className="container">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                                >
                                    <span className="lighting-badge" style={{ background: 'rgba(249, 115, 22, 0.1)', color: '#f97316', padding: '8px 16px', borderRadius: '999px', fontSize: '0.8rem', fontWeight: 800, letterSpacing: '2px' }}>COMPLETE VERSATILITY</span>
                                    <h1 style={{ fontSize: '5rem', fontWeight: 900, marginBottom: '2rem', lineHeight: 1.1, color: '#1a1a1a' }}>
                                        Industry <span style={{ color: '#f97316' }}>Ecosystems</span>
                                    </h1>
                                    <p style={{ maxWidth: '850px', margin: '0 auto', fontSize: '1.3rem', color: '#64748b', lineHeight: 1.6 }}>
                                        High-fidelity digital signage solutions tailored for the world's most demanding environments. Manage global networks from a single source of truth.
                                    </p>
                                </motion.div>
                            </div>
                        </section>
                        <BenchmarkShowcase
                            industries={allSolutions}
                            activeTab={activeTab}
                            setActiveTab={handleTabChange}
                        />

                        <section style={{ padding: '8rem 0', textAlign: 'center' }}>
                            <div className="container">
                                <h2 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '2rem' }}>Ready for a specific deep-dive?</h2>
                                <p style={{ color: '#64748b', marginBottom: '3rem' }}>Select an industry above to explore unique features and technical capabilities.</p>
                            </div>
                        </section>
                    </motion.div>
                ) : (
                    <motion.div
                        key={industry}
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    >
                        {selectedIndustry && (
                            <SolutionDetail
                                industryData={selectedIndustry}
                                onBack={() => navigate('/solutions')}
                            />
                        )}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Global Sections (Shared) */}
            <section style={{ padding: '6rem 0', background: 'transparent' }}>
                <div className="container" style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
                    <div style={{ textAlign: 'center', marginBottom: '8rem' }}>
                        <span className="lighting-badge" style={{ background: 'rgba(249, 115, 22, 0.1)', color: '#f97316', padding: '8px 16px', borderRadius: '999px', fontSize: '0.8rem', fontWeight: 800, letterSpacing: '2px' }}>TECHNICAL EXCELLENCE</span>
                        <h2 className="lighting-title" style={{ fontSize: '3.5rem', marginBottom: '2rem' }}>Experience the <br /> <BrandName /> Difference</h2>
                    </div>

                    <div style={{
                        background: '#0f172a',
                        padding: '6rem',
                        borderRadius: '12px',
                        boxShadow: '0 50px 100px rgba(0,0,0,0.4)',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '400px', height: '400px', background: 'rgba(249, 115, 22, 0.05)', filter: 'blur(100px)', borderRadius: '50%' }} />

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '4rem', position: 'relative', zIndex: 2 }}>
                            {[
                                { t: "Delta-Sync", d: "Only push content changes. Save gigabytes of data monthly across your entire screen network.", i: "⚡" },
                                { t: "Global CMS", d: "Manage thousands of screens globally from a single, high-fidelity web dashboard.", i: "🌐" },
                                { t: "Enterprise Auth", d: "Role-based access with SSO, audit trails, and 2FA for maximum network security.", i: "🔒" }
                            ].map((f, i) => (
                                <div key={i}>
                                    <div style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>{f.i}</div>
                                    <h4 style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem' }}>{f.t}</h4>
                                    <p style={{ color: '#94a3b8', lineHeight: 1.6 }}>{f.d}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="final-cta-section" style={{ padding: '6rem 0', textAlign: 'center' }}>
                <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: '3.5rem', fontWeight: 900, marginBottom: '2rem' }}>Ready to transform your communication?</h2>
                    <p style={{ fontSize: '1.25rem', color: '#94a3b8', marginBottom: '3.5rem' }}>Our solutions are built for scale and designed for simplicity. Join thousands of world-class brands already using <BrandName />.</p>
                    <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
                        <button onClick={() => window.location.href = '/contact'} style={{
                            background: '#f97316',
                            color: '#fff',
                            border: 'none',
                            padding: '1.2rem 2.8rem',
                            borderRadius: '16px',
                            fontWeight: 800,
                            fontSize: '1.1rem',
                            cursor: 'pointer',
                            transition: 'all 0.3s'
                        }}>Talk to a Specialist</button>
                        <button style={{
                            border: '2px solid rgba(255,255,255,0.2)',
                            color: '#1e293b',
                            background: 'transparent',
                            padding: '1.2rem 2.8rem',
                            borderRadius: '16px',
                            fontWeight: 800,
                            fontSize: '1.1rem',
                            cursor: 'pointer',
                            transition: 'all 0.3s'
                        }} onClick={() => window.location.href = '/pricing'}>View Pricing</button>
                    </div>
                </div>
            </section>

            {/* Network Efficiency Toast */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                style={{
                    position: 'fixed',
                    bottom: '30px',
                    left: '30px',
                    background: '#ffffff',
                    padding: '16px 24px',
                    borderRadius: '20px',
                    boxShadow: '0 20px 50px rgba(0,0,0,0.1)',
                    border: '1px solid #f1f5f9',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    zIndex: 1000,
                    maxWidth: '380px'
                }}
            >
                <div style={{
                    width: '40px',
                    height: '40px',
                    background: 'rgba(249, 115, 22, 0.1)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.2rem'
                }}>
                    ⚡
                </div>
                <div style={{ flex: 1 }}>
                    <h5 style={{ margin: 0, fontSize: '0.9rem', fontWeight: 800, color: '#f97316', letterSpacing: '0.02em' }}>Network Efficiency</h5>
                    <p style={{ margin: 0, fontSize: '0.85rem', color: '#64748b', fontWeight: 500 }}>Delta-sync just saved 4.2GB bandwidth</p>
                </div>
                <button
                    onClick={(e) => {
                        e.currentTarget.parentElement.style.display = 'none';
                    }}
                    style={{
                        background: 'none',
                        border: 'none',
                        color: '#94a3b8',
                        fontSize: '1.2rem',
                        cursor: 'pointer',
                        padding: '4px'
                    }}
                >
                    ×
                </button>
            </motion.div>
        </div>
    )
}

export default Solutions

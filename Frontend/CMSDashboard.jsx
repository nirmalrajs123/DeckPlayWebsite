import React, { useState } from 'react';
import './CMSDashboard.css';

const CMSDashboard = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    return (
        <div className="dashboard-container">
            {/* Sidebar Navigation */}
            <aside className={`sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
                <div className="sidebar-header">
                    <div className="dashboard-logo">
                        <div className="logo-sq"></div>
                        <span className="brand-name" style={{ gap: '4px' }}>
                            <span className="brand-deck">DECK</span>
                            <span className="brand-play">PLAY</span>
                        </span>
                    </div>
                </div>

                <nav className="sidebar-nav">
                    <div className="nav-section">MAIN MENU</div>
                    <a href="#" className="nav-item active">
                        <span className="icon">📊</span> Dashboard
                    </a>
                    <a href="#" className="nav-item">
                        <span className="icon">🖥️</span> Screen Manager
                    </a>
                    <a href="#" className="nav-item">
                        <span className="icon">🎞️</span> Playlists
                    </a>
                    <a href="#" className="nav-item">
                        <span className="icon">🖼️</span> Media Library
                    </a>
                    
                    <div className="nav-section">SYSTEM</div>
                    <a href="#" className="nav-item">
                        <span className="icon">⚙️</span> Settings
                    </a>
                    <a href="#" className="nav-item">
                        <span className="icon">👥</span> Users
                    </a>
                    <a href="#" className="nav-item logout">
                        <span className="icon">🚪</span> Logout
                    </a>
                </nav>
            </aside>

            {/* Main Content Area */}
            <main className="dashboard-main">
                <header className="dashboard-header">
                    <div className="header-left">
                        <h1>Overview</h1>
                        <p>Welcome back, Admin</p>
                    </div>
                    <div className="header-right">
                        <div className="search-bar">
                            <span className="search-icon">🔍</span>
                            <input type="text" placeholder="Search screens..." />
                        </div>
                        <button className="btn-add-screen">+ Add Screen</button>
                    </div>
                </header>

                <div className="dashboard-scroll">
                    <div className="empty-state-container">
                        <div className="empty-icon">📂</div>
                        <h3>No Content Yet</h3>
                        <p>Your dashboard is currently empty. Start by adding a new screen or creating a playlist.</p>
                        <button className="btn-add-screen" style={{ marginTop: '1.5rem' }}>Get Started</button>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default CMSDashboard;

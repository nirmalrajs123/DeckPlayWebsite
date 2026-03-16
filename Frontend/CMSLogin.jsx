import React, { useState } from 'react';
import './CMSLogin.css';
import { authService } from './services/authService';
import { useNavigate } from 'react-router-dom';

const CMSLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await authService.login(email, password);
      navigate('/cms/dashboard');
    } catch (err) {
      console.error(err);
      setError(err.message || 'Invalid credentials. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="cms-login-container">
      <div className="ambient-glow glow-1"></div>
      <div className="ambient-glow glow-2"></div>

      <div className="cms-login-content">
        <div className="cms-brand-side">
          <div className="cms-logo-wrapper">
            <svg className="deck-play-logo-svg" viewBox="0 0 100 70" xmlns="http://www.w3.org/2000/svg">
              <rect x="5" y="5" width="90" height="60" rx="15" ry="15" className="logo-frame" />
              <polygon points="42,22 42,48 68,35" className="logo-play-button" />
            </svg>
            <div className="logo-brand-name">
              <span className="bold">DECK</span>
              <span className="light">PLAY</span>
            </div>
          </div>

          <div className="hero-text-container">
            <div className="badge">VERSION 2.0</div>
            <h1>Digital Signage<br /><span className="gradient-text">Redefined.</span></h1>
            <p>Experience the most powerful and intuitive CMS platform ever built. Manage your global network from a single, stunning interface.</p>
          </div>

          <div className="feature-status">
            <div className="status-item">
              <span className="dot"></span> 99.9% Uptime
            </div>
            <div className="status-item">
              <span className="dot"></span> Global CDN
            </div>
          </div>
        </div>

        <div className="cms-form-side">
          <div className="glass-card">
            <div className="card-header">
              <h2>CMS Panel Login</h2>
              <p>Authorized personnel only</p>
            </div>

            <form onSubmit={handleLogin} className="login-form">
              <div className="input-field">
                <label>Work Email</label>
                <div className="input-wrapper">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <span className="input-icon">✉</span>
                </div>
              </div>

              <div className="input-field">
                <div className="label-flex">
                  <label>Password</label>
                  <a href="#" className="text-link">Recovery</a>
                </div>
                <div className="input-wrapper">
                  <input
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <span className="input-icon">🔒</span>
                </div>
              </div>

              {error && <div className="error-message-box">{error}</div>}

              <button type="submit" className="submit-btn" disabled={loading}>
                <span className="btn-text">{loading ? 'AUTHENTICATING...' : 'ACCESS PANEL'}</span>
                <span className="btn-glow"></span>
              </button>
            </form>

            <div className="card-footer">
              <p>Issues signing in? <a href="#">Contact Support</a></p>
            </div>
          </div>

          <div className="legal-tag">
            © 2026 DECK PLAY GLOBAL. PROTECTED BY AES-256.
          </div>
        </div>
      </div>
    </div>
  );
};

export default CMSLogin;

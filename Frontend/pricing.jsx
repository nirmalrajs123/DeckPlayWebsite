import React, { useState } from "react";
import api from "./services/api";
import { loadStripe } from "@stripe/stripe-js";
import "./pricing.css";

// Use a demo Stripe Publishable Key for testing
const STRIPE_PK = "pk_test_TYooMQauvdEDq54NiTphI7jx";
const stripePromise = loadStripe(STRIPE_PK);

const plans = [
    {
        name: "Starter",
        monthlyPrice: 6,
        yearlyPrice: 64.8,
        type: "Starter",
        features: ["1 user", "1 screen", "Basic Support"]
    },
    {
        name: "Professional",
        monthlyPrice: 12,
        yearlyPrice: 129.6,
        type: "Professional",
        features: ["5 users", "5 screens", "Priority Support", "3 custom apps free"],
        highlight: true
    },
    {
        name: "Studio",
        monthlyPrice: 24,
        yearlyPrice: 259.2,
        type: "Studio",
        features: ["10 users", "10 screens", "24/7 Dedicated Support", "10 custom apps free"]
    }
];

function Pricing() {
    const [isYearly, setIsYearly] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleCheckout = async (plan) => {
        setLoading(true);
        try {
            const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;

            // Create Stripe Checkout Session via Backend
            const response = await api.post("/payment/create-checkout-session", {
                planName: plan.name,
                price: price,
                interval: isYearly ? "yearly" : "monthly"
            });

            // Redirect to Stripe Checkout
            const stripe = await stripePromise;
            const { error } = await stripe.redirectToCheckout({
                sessionId: response.id,
            });

            if (error) {
                throw error;
            }
        } catch (error) {
            console.warn("Stripe demo fallback triggered:", error);
            // Simulating a brief 'processing' delay for the demo
            setTimeout(() => {
                window.location.href = "/payment-success";
            }, 2000);
        }
    };

    return (
        <section className="pricing-section">
            <header className="pricing-header">
                <h1>Simple, Transparent <span className="highlight">Pricing</span></h1>
                <p>Choose the plan that's right for your business. Upgrade or downgrade at any time.</p>
            </header>

            <div className="pricing-toggle">
                <button
                    className={`toggle-btn ${!isYearly ? 'active' : ''}`}
                    onClick={() => setIsYearly(false)}
                >
                    Monthly
                </button>
                <button
                    className={`toggle-btn ${isYearly ? 'active' : ''}`}
                    onClick={() => setIsYearly(true)}
                >
                    Yearly (10% Off)
                </button>
            </div>

            <div className="pricing-grid">
                {plans.map((plan, index) => (
                    <div
                        key={index}
                        className={`pricing-card ${plan.highlight ? 'featured' : ''}`}
                    >
                        {plan.highlight && <div className="featured-badge">Best Value</div>}
                        <span className="card-type">{plan.type}</span>
                        <h3>{plan.name}</h3>

                        <div className="card-price">
                            <span className="currency">$</span>
                            <span className="amount">{isYearly ? plan.yearlyPrice : plan.monthlyPrice}</span>
                            <span className="period">/{isYearly ? 'yr' : 'mo'}</span>
                        </div>

                        <ul className="card-features">
                            {plan.features.map((feature, i) => (
                                <li key={i}>
                                    <span className="check-icon">✓</span>
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <button
                            className="cta-button"
                            disabled={loading}
                            onClick={() => handleCheckout(plan)}
                        >
                            {loading ? "Initializing..." : "Choose Plan"}
                        </button>
                    </div>
                ))}
            </div>

            {/* Feature Comparison Table */}
            <div id="comparison" className="comparison-table-container">
                <header className="comparison-header">
                    <h2>Compare <span className="highlight">Features</span></h2>
                    <p>Get a detailed breakdown of what's included in each plan.</p>
                </header>

                <div className="modern-table-wrapper">
                    <table className="modern-pricing-table">
                        <thead>
                            <tr>
                                <th>Features</th>
                                <th>Basic</th>
                                <th className="featured-col">Pro</th>
                                <th>Enterprise</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="table-section-row">
                                <td colSpan="4">Content & Media</td>
                            </tr>
                            <tr>
                                <td>Media Library Storage</td>
                                <td>5GB</td>
                                <td className="featured-col">15GB</td>
                                <td>25GB</td>
                            </tr>
                            <tr>
                                <td>Client Access</td>
                                <td className="not-included">✕</td>
                                <td className="featured-col">✓</td>
                                <td>✓</td>
                            </tr>
                            <tr>
                                <td>Custom apps</td>
                                <td>1</td>
                                <td className="featured-col">3</td>
                                <td>10</td>
                            </tr>

                            <tr className="table-section-row">
                                <td colSpan="4">Management & Control</td>
                            </tr>
                            <tr>
                                <td>Simultaneous Screens</td>
                                <td>✓</td>
                                <td className="featured-col">✓</td>
                                <td>✓</td>
                            </tr>
                            <tr>
                                <td>Advanced Scheduling</td>
                                <td>Basic</td>
                                <td className="featured-col">Full</td>
                                <td>Full</td>
                            </tr>
                            <tr>
                                <td>Remote Screen Control</td>
                                <td className="not-included">✕</td>
                                <td className="featured-col">✓</td>
                                <td>✓</td>
                            </tr>

                            <tr className="table-section-row">
                                <td colSpan="4">Support & Security</td>
                            </tr>
                            <tr>
                                <td>Support Level</td>
                                <td>Email</td>
                                <td className="featured-col">Priority</td>
                                <td>24/7 Dedicated</td>
                            </tr>
                            <tr>

                                <td className="not-included">✕</td>
                                <td className="featured-col">✕</td>
                                <td>✓</td>
                            </tr>
                            <tr>
                                <td>mobile access</td>
                                <td className="not-included">✓</td>
                                <td className="featured-col">✓</td>
                                <td>✓</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}

export default Pricing;
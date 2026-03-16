import React from "react";
import "./pricing.css";

const plans = [
    {
        name: "Basic",
        price: "$6",
        features: ["1 User", "5 Projects", "Basic Support"]
    },
    {
        name: "Pro",
        price: "$12",
        features: ["5 Users", "50 Projects", "Priority Support"],
        highlight: true
    },
    {
        name: "Enterprise",
        price: "$24",
        features: ["Unlimited Users", "Unlimited Projects", "24/7 Support"]
    }
];

function Pricing() {
    return (
        <>
            <header className="hero" style={{ minHeight: '40vh', padding: '4rem 2rem' }}>
                <div className="hero-content">
                    <h1 className="hero-title">
                        Simple, Transparent <span className="highlight">Pricing</span>
                    </h1>
                    <p className="hero-subtitle">Choose the plan that fits your business. Start signing documents digitally in minutes.</p>
                </div>
            </header>

            <div className="pricing-container">
                <div className="pricing-grid">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`pricing-card ${plan.highlight ? "active" : ""}`}
                        >
                            <h3>{plan.name}</h3>
                            <h1>{plan.price}</h1>

                            <ul>
                                {plan.features.map((f, i) => (
                                    <li key={i}>{f}</li>
                                ))}
                            </ul>

                            <button>Choose Plan</button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Pricing;
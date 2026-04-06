import React from "react";
import { Link } from "react-router-dom";

const PaymentCancel = () => {
    return (
        <div style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            background: "#fff7ed",
            textAlign: "center",
            padding: "2rem"
        }}>
            <div
                style={{
                    width: "80px",
                    height: "80px",
                    background: "#ef4444",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "2rem",
                    color: "white",
                    fontSize: "2.5rem"
                }}
            >
                ✕
            </div>
            <h1 style={{ fontSize: "2.5rem", fontWeight: "800", color: "#1e293b", marginBottom: "1rem" }}>Payment Cancelled</h1>
            <p style={{ fontSize: "1.125rem", color: "#64748b", maxWidth: "500px", marginBottom: "2.5rem" }}>
                The payment process was not completed. If you had any issues, feel free to try again or contact our support team.
            </p>
            <Link to="/pricing" style={{
                background: "#FF5722",
                color: "white",
                padding: "1rem 2rem",
                borderRadius: "12px",
                textDecoration: "none",
                fontWeight: "700",
                boxShadow: "0 10px 15px -3px rgba(255, 87, 34, 0.3)",
                transition: "transform 0.2s ease"
            }}>
                Back to Pricing
            </Link>
        </div>
    );
};

export default PaymentCancel;

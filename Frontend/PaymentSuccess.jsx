import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const PaymentSuccess = () => {
    return (
        <div style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            background: "#f8fafc",
            textAlign: "center",
            padding: "2rem"
        }}>
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                style={{
                    width: "80px",
                    height: "80px",
                    background: "#22c55e",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "2rem",
                    color: "white",
                    fontSize: "2.5rem"
                }}
            >
                ✓
            </motion.div>
            <h1 style={{ fontSize: "2.5rem", fontWeight: "800", color: "#1e293b", marginBottom: "1rem" }}>Payment Successful!</h1>
            <p style={{ fontSize: "1.125rem", color: "#64748b", maxWidth: "500px", marginBottom: "2.5rem" }}>
                Thank you for your purchase. Your account has been upgraded, and you can now access all your premium features.
            </p>
            <Link to="/cms/dashboard" style={{
                background: "#FF5722",
                color: "white",
                padding: "1rem 2rem",
                borderRadius: "12px",
                textDecoration: "none",
                fontWeight: "700",
                boxShadow: "0 10px 15px -3px rgba(255, 87, 34, 0.3)",
                transition: "transform 0.2s ease"
            }}>
                Go to Dashboard
            </Link>
        </div>
    );
};

export default PaymentSuccess;



//WhatsAppRedirect.jsx

import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function WhatsAppRedirect() {
    const location = useLocation();
    const navigate = useNavigate();
    const { billingDetails, productDetails, paymentResult } = location.state || {};

    useEffect(() => {
        if (!billingDetails || !productDetails || !paymentResult) {
            navigate("/"); // Redirect to home if data is missing
            return;
        }

        const {
            firstName,
            lastName,
            address,
            street,
            city,
            state,
            country,
            pincode,
            phone,
            emailAddress,
        } = billingDetails;

        const { name, price, pages } = productDetails;

        const message = `*New Order Received*\n\n` +
        `*Customer Details*\n` +
        `First Name: ${firstName}\n` +
        `Last Name: ${lastName}\n` +
        `Address: ${address}\n` +
        `Street: ${street}\n` +
        `City: ${city}\n` +
        `State: ${state}\n` +
        `Country: ${country}\n` +
        `Pincode: ${pincode}\n` +
        `Phone: ${phone}\n` +
        `Email: ${emailAddress}\n\n` +
        `*Order Details*\n` +
        `Product: ${name}\n` +
        `Pages: ${pages}\n` +
        `Total Amount: ₹${price}\n\n` +
        `*Payment Details*\n` +
        `Order ID: ${paymentResult.orderId}\n` +
        `Payment ID: ${paymentResult.paymentId}`;
        

        const whatsappNumber = "9074062012"; // REPLACE WITH YOUR NUMBER
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

        
        // Redirect after a brief delay to show loading message
        const timer = setTimeout(() => {
            window.location.href = whatsappUrl;
        }, 1500);

        return () => clearTimeout(timer);
    }, [billingDetails, productDetails, paymentResult, navigate]);

    return (
        <div className="container mx-auto p-4 text-center min-h-screen flex flex-col justify-center items-center">
            <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-green-500 mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold mb-2">Order Successful!</h3>
                <p className="mb-4">Redirecting you to WhatsApp...</p>
                <div className="bg-gray-50 p-4 rounded-lg text-left">
                    <p className="text-sm">If you're not redirected automatically:</p>
                    <button 
                        onClick={() => navigate("/")}
                        className="text-blue-500 hover:text-blue-700 text-sm font-medium mt-2"
                    >
                        ← Return to Home
                    </button>
                </div>
            </div>
        </div>
    );
}

// // import React, { useState } from "react";

// // export default function Checkout() {
// //   const [billingDetails, setBillingDetails] = useState({
// //     firstName: "",
// //     lastName: "",
// //     state: "",
// //     country: "",
// //     address: "",
// //     street: "",
// //     city: "",
// //     pincode: "",
// //     phone: "",
// //     emailAddress: "",
// //   });

// //   const cartTotal = 1250;

// //   const handleInputChange = (e) => {
// //     const { name, value } = e.target;
// //     setBillingDetails((prev) => ({
// //       ...prev,
// //       [name]: value,
// //     }));
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     console.log("Checkout Data:", billingDetails);
// //   };

// //   return (
// //     <div className="container mx-auto p-4 md:p-6">
// //       <h2 className="text-2xl text-center font-semibold mb-6">Checkout</h2>

// //       <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
// //          <div>
// //           <h3 className="text-lg font-semibold mb-4 leading-loose">Billing Details</h3>
// //           <form className="space-y-4">
// //             <div className="flex flex-col md:flex-row md:space-x-4">
// //               <div className="w-full">
// //                 <label className="block text-sm font-medium">First Name</label>
// //                 <input
// //                   type="text"
// //                   name="firstName"
// //                   value={billingDetails.firstName}
// //                   onChange={handleInputChange}
// //                   className="w-full border rounded-md px-3 py-2 bg-[#F5EFE2] border-[#DDCEBC]"
// //                   required
// //                 />
// //               </div>
// //               <div className="w-full">
// //                 <label className="block text-sm font-medium">Last Name</label>
// //                 <input
// //                   type="text"
// //                   name="lastName"
// //                   value={billingDetails.lastName}
// //                   onChange={handleInputChange}
// //                   className="w-full border rounded-md px-3 py-2 bg-[#F5EFE2] border-[#DDCEBC]"
// //                   required
// //                 />
// //               </div>
// //             </div>
// //             <div>
// //               <label className="block text-sm font-medium">Address</label>
// //               <input
// //                 type="text"
// //                 name="address"
// //                 value={billingDetails.address}
// //                 onChange={handleInputChange}
// //                 className="w-full border rounded-md px-3 py-2 bg-[#F5EFE2] border-[#DDCEBC]"
// //                 required
// //               />
// //             </div>
// //             <div>
// //               <label className="block text-sm font-medium">Street</label>
// //               <input
// //                 type="text"
// //                 name="street"
// //                 value={billingDetails.street}
// //                 onChange={handleInputChange}
// //                 className="w-full border rounded-md px-3 py-2 bg-[#F5EFE2] border-[#DDCEBC]"
// //                 required
// //               />
// //             </div>
// //             <div>
// //               <label className="block text-sm font-medium">Town/City</label>
// //               <input
// //                 type="text"
// //                 name="city"
// //                 value={billingDetails.city}
// //                 onChange={handleInputChange}
// //                 className="w-full border rounded-md px-3 py-2 bg-[#F5EFE2] border-[#DDCEBC]"
// //                 required
// //               />
// //             </div>
// //             <div>
// //               <label className="block text-sm font-medium">State</label>
// //               <input
// //                 type="text"
// //                 name="state"
// //                 value={billingDetails.state}
// //                 onChange={handleInputChange}
// //                 className="w-full border rounded-md px-3 py-2 bg-[#F5EFE2] border-[#DDCEBC]"
// //                 required
// //               />
// //             </div>
// //           </form>
// //         </div>

// //          <div>
// //           <form className="space-y-4 md:mt-12">
// //             <div>
// //               <label className="block text-sm font-medium">Country/Region</label>
// //               <input
// //                 type="text"
// //                 name="country"
// //                 value={billingDetails.country}
// //                 onChange={handleInputChange}
// //                 className="w-full border rounded-md px-3 py-2 bg-[#F5EFE2] border-[#DDCEBC]"
// //                 required
// //               />
// //             </div>
// //             <div>
// //               <label className="block text-sm font-medium">Pincode</label>
// //               <input
// //                 type="text"
// //                 name="pincode"
// //                 value={billingDetails.pincode}
// //                 onChange={handleInputChange}
// //                 className="w-full border rounded-md px-3 py-2 bg-[#F5EFE2] border-[#DDCEBC]"
// //                 required
// //               />
// //             </div>
// //             <div>
// //               <label className="block text-sm font-medium">Phone</label>
// //               <input
// //                 type="text"
// //                 name="phone"
// //                 value={billingDetails.phone}
// //                 onChange={handleInputChange}
// //                 className="w-full border rounded-md px-3 py-2 bg-[#F5EFE2] border-[#DDCEBC]"
// //                 required
// //               />
// //             </div>
// //             <div>
// //               <label className="block text-sm font-medium">Email Address</label>
// //               <input
// //                 type="email"
// //                 name="emailAddress"
// //                 value={billingDetails.emailAddress}
// //                 onChange={handleInputChange}
// //                 className="w-full border rounded-md px-3 py-2 bg-[#F5EFE2] border-[#DDCEBC]"
// //                 required
// //               />
// //             </div>
// //             <div>
// //               <label className="block text-sm font-medium">Additional Information</label>
// //               <textarea
// //                 name="additional"
// //                 value={billingDetails.additional}
// //                 onChange={handleInputChange}
// //                 className="w-full border rounded-md px-3 py-2 bg-[#F5EFE2] border-[#DDCEBC]"
// //                 placeholder="Additional information"
// //                 rows="4"
// //               />
// //             </div>
// //           </form>
// //         </div>

// //         {/* Cart Totals */}
// //         <div className="bg-[#F9F1E7] md:h-[300px] md:w-[300px] md:m-14 rounded-xl p-6 flex flex-col justify-between">
// //           <h3 className="text-lg text-center font-bold mb-6">Cart Totals</h3>
// //           <div className="space-y-4">
// //             <div className="flex justify-between">
// //               <span className="text-sm">Mini Album 1</span>
// //               <span>Rs {cartTotal}</span>
// //             </div>
// //             <div className="flex justify-between">
// //               <span className="text-sm font-semibold">Subtotal:</span>
// //               <span>Rs {cartTotal}</span>
// //             </div>
// //             <hr />
// //             <div className="flex justify-between font-semibold">
// //               <span>Total:</span>
// //               <span>Rs {cartTotal}</span>
// //             </div>
// //           </div>
// //           <div className="flex justify-center mt-6">
// //             <button
// //               onClick={handleSubmit}
// //               className="border border-black text-black rounded-xl font-semibold px-6 py-2 hover:bg-black hover:text-white transition"
// //             >
// //               Order Now
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }


// // import React, { useState } from "react";
// // import { useLocation } from "react-router-dom";

// // export default function Checkout() {

// //   const location = useLocation();
// //   const { name, price, pages } = location.state || {};


// //   const [billingDetails, setBillingDetails] = useState({
// //     firstName: "",
// //     lastName: "",
// //     state: "",
// //     country: "",
// //     address: "",
// //     street: "",
// //     city: "",
// //     pincode: "",
// //     phone: "",
// //     emailAddress: "",
// //     additional: "",
// //   });

// //   const cartTotal = 1250;

// //   const handleInputChange = (e) => {
// //     const { name, value } = e.target;
// //     setBillingDetails((prev) => ({
// //       ...prev,
// //       [name]: value,
// //     }));
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     console.log("Checkout Data:", billingDetails);
// //   };

// //   return (
// //     <div className="container mx-auto p-4 md:p-6">
// //       <h2 className="text-2xl text-center font-semibold mb-6">Checkout</h2>

// //       <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
// //         {/* Billing Details */}
// //         <div className="space-y-6">
// //           <h3 className="text-lg font-semibold">Billing Details</h3>
// //           <form className="space-y-4">
// //             <div className="flex flex-col md:flex-row gap-4">
// //               <div className="w-full">
// //                 <label className="block text-sm font-medium mb-1">First Name</label>
// //                 <input
// //                   type="text"
// //                   name="firstName"
// //                   value={billingDetails.firstName}
// //                   onChange={handleInputChange}
// //                   className="w-full border rounded-md px-3 py-2 bg-[#F5EFE2] border-[#DDCEBC]"
// //                   required
// //                 />
// //               </div>
// //               <div className="w-full">
// //                 <label className="block text-sm font-medium mb-1">Last Name</label>
// //                 <input
// //                   type="text"
// //                   name="lastName"
// //                   value={billingDetails.lastName}
// //                   onChange={handleInputChange}
// //                   className="w-full border rounded-md px-3 py-2 bg-[#F5EFE2] border-[#DDCEBC]"
// //                   required
// //                 />
// //               </div>
// //             </div>
// //             <div>
// //               <label className="block text-sm font-medium mb-1">Address</label>
// //               <input
// //                 type="text"
// //                 name="address"
// //                 value={billingDetails.address}
// //                 onChange={handleInputChange}
// //                 className="w-full border rounded-md px-3 py-2 bg-[#F5EFE2] border-[#DDCEBC]"
// //                 required
// //               />
// //             </div>
// //             <div>
// //               <label className="block text-sm font-medium mb-1">Street</label>
// //               <input
// //                 type="text"
// //                 name="street"
// //                 value={billingDetails.street}
// //                 onChange={handleInputChange}
// //                 className="w-full border rounded-md px-3 py-2 bg-[#F5EFE2] border-[#DDCEBC]"
// //                 required
// //               />
// //             </div>
// //             <div>
// //               <label className="block text-sm font-medium mb-1">Town/City</label>
// //               <input
// //                 type="text"
// //                 name="city"
// //                 value={billingDetails.city}
// //                 onChange={handleInputChange}
// //                 className="w-full border rounded-md px-3 py-2 bg-[#F5EFE2] border-[#DDCEBC]"
// //                 required
// //               />
// //             </div>
// //             <div>
// //               <label className="block text-sm font-medium mb-1">State</label>
// //               <input
// //                 type="text"
// //                 name="state"
// //                 value={billingDetails.state}
// //                 onChange={handleInputChange}
// //                 className="w-full border rounded-md px-3 py-2 bg-[#F5EFE2] border-[#DDCEBC]"
// //                 required
// //               />
// //             </div>
// //           </form>
// //         </div>

// //         {/* Additional Details */}
// //         <div className="space-y-6">
// //           <h3 className="text-lg font-semibold">Additional Details</h3>
// //           <form className="space-y-4">
// //             <div>
// //               <label className="block text-sm font-medium mb-1">Country/Region</label>
// //               <input
// //                 type="text"
// //                 name="country"
// //                 value={billingDetails.country}
// //                 onChange={handleInputChange}
// //                 className="w-full border rounded-md px-3 py-2 bg-[#F5EFE2] border-[#DDCEBC]"
// //                 required
// //               />
// //             </div>
// //             <div>
// //               <label className="block text-sm font-medium mb-1">Pincode</label>
// //               <input
// //                 type="text"
// //                 name="pincode"
// //                 value={billingDetails.pincode}
// //                 onChange={handleInputChange}
// //                 className="w-full border rounded-md px-3 py-2 bg-[#F5EFE2] border-[#DDCEBC]"
// //                 required
// //               />
// //             </div>
// //             <div>
// //               <label className="block text-sm font-medium mb-1">Phone</label>
// //               <input
// //                 type="text"
// //                 name="phone"
// //                 value={billingDetails.phone}
// //                 onChange={handleInputChange}
// //                 className="w-full border rounded-md px-3 py-2 bg-[#F5EFE2] border-[#DDCEBC]"
// //                 required
// //               />
// //             </div>
// //             <div>
// //               <label className="block text-sm font-medium mb-1">Email Address</label>
// //               <input
// //                 type="email"
// //                 name="emailAddress"
// //                 value={billingDetails.emailAddress}
// //                 onChange={handleInputChange}
// //                 className="w-full border rounded-md px-3 py-2 bg-[#F5EFE2] border-[#DDCEBC]"
// //                 required
// //               />
// //             </div>
// //             <div>
// //               <label className="block text-sm font-medium mb-1">Additional Information</label>
// //               <textarea
// //                 name="additional"
// //                 value={billingDetails.additional}
// //                 onChange={handleInputChange}
// //                 className="w-full border rounded-md px-3 py-2 bg-[#F5EFE2] border-[#DDCEBC]"
// //                 placeholder="Additional information"
// //                 rows="4"
// //               />
// //             </div>
// //           </form>
// //         </div>

// //         {/* Cart Totals */}
// //         <div className="bg-[#F9F1E7]  md:h-[350px]  md:w-[300px] md:m-14  rounded-xl p-6 flex flex-col justify-between lg:mt-20">
// //           <h3 className="text-lg text-center font-bold mb-6">Cart Totals</h3>
// //           <div className="space-y-4">

// //           <div className="flex justify-between ">
// //               <span>No of Pages:</span>
// //               <span>{pages}</span>
// //             </div>

// //             <div className="flex justify-between font-semibold">
// //               <span className="text-sm">{name}</span>
// //               <span>Rs {price}</span>
// //             </div>

// //             <div className="flex justify-between font-semibold">
// //               <span className="text-sm font-semibold">Subtotal:</span>
// //               <span>Rs {price}</span>
// //             </div>
// //             <hr />
// //             <div className="flex justify-between font-semibold">
// //               <span>Total:</span>
// //               <span>Rs {price}</span>
// //             </div>

// //           </div>
// //           <div className="flex justify-center mt-6">
// //             <button
// //               onClick={handleSubmit}
// //               className="border border-black text-black rounded-xl font-semibold px-6 py-2 hover:bg-black hover:text-white transition"
// //             >
// //               Order Now
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// //Checkout.jsx

// import React, { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { handlePayment } from "../services/razorpayService";

// export default function Checkout() {
//     const location = useLocation();
//     const navigate = useNavigate();
//     const { name, price, pages } = location.state || {};

//     const [billingDetails, setBillingDetails] = useState({
//         firstName: "",
//         lastName: "",
//         state: "",
//         country: "",
//         address: "",
//         street: "",
//         city: "",
//         pincode: "",
//         phone: "",
//         emailAddress: "",
//         additional: "",
//     });

//     const [submitError, setSubmitError] = useState(null);
//     const [showSuccess, setShowSuccess] = useState(false);
//     const [isProcessing, setIsProcessing] = useState(false);
//     const [paymentResult, setPaymentResult] = useState(null);

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setBillingDetails((prev) => ({
//             ...prev,
//             [name]: value,
//         }));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setSubmitError(null);
//         setIsProcessing(true);
    
//         try {
//             // Validate required fields
//             const requiredFields = [
//                 "firstName", "lastName", "address", "street",
//                 "city", "state", "country", "pincode",
//                 "phone", "emailAddress"
//             ];
    
//             const missingFields = requiredFields.filter(field => !billingDetails[field].trim());
    
//             if (missingFields.length > 0) {
//                 throw new Error("Please fill in all required fields");
//             }
    
//             // Validate email format
//             const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//             if (!emailRegex.test(billingDetails.emailAddress)) {
//                 throw new Error("Please enter a valid email address");
//             }
    
//             // Validate phone number (basic check for 10 digits)
//             if (!/^\d{10}$/.test(billingDetails.phone)) {
//                 throw new Error("Phone number must be 10 digits");
//             }
    
//             // Create payment order and open Razorpay
//             const payment = await handlePayment({
//                 amount: price,
//                 first_name: billingDetails.firstName,
//                 last_name: billingDetails.lastName,
//                 phone: billingDetails.phone,
//                 email: billingDetails.emailAddress,
//                 product_name: name,
//                 pages: pages,
//                 currency: "INR"
//             });
    
//             if (!payment.success) {
//                 throw new Error(payment.error || "Payment was not successful");
//             }
    
//             // Now, only after successful payment, save order in DB
//             const response = await axios.post("http://localhost:4000/api/checkout", {
//                 first_name: billingDetails.firstName,
//                 last_name: billingDetails.lastName,
//                 address: billingDetails.address,
//                 street: billingDetails.street,
//                 city: billingDetails.city,
//                 state: billingDetails.state,
//                 country: billingDetails.country,
//                 pincode: billingDetails.pincode,
//                 phone: billingDetails.phone,
//                 email: billingDetails.emailAddress,
//                 product_name: name,
//                 pages: pages,
//                 total_amount: price,
//                 razorpay_payment_id: payment.paymentId,
//                 razorpay_order_id: payment.orderId
//             });
    
//             setPaymentResult(payment);
//             setShowSuccess(true);
    
//         } catch (error) {
//             console.error("Checkout failed:", error);
//             setSubmitError(
//                 error.response?.data?.message ||
//                 error.message ||
//                 "Checkout failed. Please try again."
//             );
//         } finally {
//             setIsProcessing(false);
//         }
//     };
    


//     if (showSuccess) {
//         return (
//             <div className="container mx-auto p-4 md:p-6">
//                 <div className="text-center py-8">
//                     <h3 className="text-xl font-semibold text-green-600 mb-2">Order Placed Successfully!</h3>
//                     <p className="mb-4">Thank you for your order. We'll contact you soon.</p>
//                     <div className="bg-gray-100 p-4 rounded-lg max-w-md mx-auto text-left">
//                         <p><strong>Order ID:</strong> {paymentResult?.orderId}</p>
//                         <p><strong>Payment ID:</strong> {paymentResult?.paymentId}</p>
//                         <p><strong>Amount:</strong> ₹{price}</p>
//                     </div>
//                     <button
//                         onClick={() => navigate("/")}
//                         className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition"
//                     >
//                         Back to Home
//                     </button>
//                 </div>
//             </div>
//         );
//     }

//     return (
//         <div className="container mx-auto p-4 md:p-6">
//             <h2 className="text-2xl text-center font-semibold mb-6">Checkout</h2>

//             {submitError && (
//                 <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
//                     {submitError}
//                 </div>
//             )}

//             <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//                 {/* Billing Details */}
//                 <div className="space-y-6">
//                     <h3 className="text-lg font-semibold">Billing Details</h3>
//                     <form id="checkout-form" className="space-y-4" onSubmit={handleSubmit}>
//                         <div className="flex flex-col md:flex-row gap-4">
//                             <div className="w-full">
//                                 <label className="block text-sm font-medium mb-1">First Name*</label>
//                                 <input
//                                     type="text"
//                                     name="firstName"
//                                     value={billingDetails.firstName}
//                                     onChange={handleInputChange}
//                                     className="w-full border rounded-md px-3 py-2 bg-[#F5EFE2] border-[#DDCEBC]"
//                                     required
//                                 />
//                             </div>
//                             <div className="w-full">
//                                 <label className="block text-sm font-medium mb-1">Last Name*</label>
//                                 <input
//                                     type="text"
//                                     name="lastName"
//                                     value={billingDetails.lastName}
//                                     onChange={handleInputChange}
//                                     className="w-full border rounded-md px-3 py-2 bg-[#F5EFE2] border-[#DDCEBC]"
//                                     required
//                                 />
//                             </div>
//                         </div>
//                         <div>
//                             <label className="block text-sm font-medium mb-1">Address*</label>
//                             <input
//                                 type="text"
//                                 name="address"
//                                 value={billingDetails.address}
//                                 onChange={handleInputChange}
//                                 className="w-full border rounded-md px-3 py-2 bg-[#F5EFE2] border-[#DDCEBC]"
//                                 required
//                             />
//                         </div>
//                         <div>
//                             <label className="block text-sm font-medium mb-1">Street*</label>
//                             <input
//                                 type="text"
//                                 name="street"
//                                 value={billingDetails.street}
//                                 onChange={handleInputChange}
//                                 className="w-full border rounded-md px-3 py-2 bg-[#F5EFE2] border-[#DDCEBC]"
//                                 required
//                             />
//                         </div>
//                         <div>
//                             <label className="block text-sm font-medium mb-1">Town/City*</label>
//                             <input
//                                 type="text"
//                                 name="city"
//                                 value={billingDetails.city}
//                                 onChange={handleInputChange}
//                                 className="w-full border rounded-md px-3 py-2 bg-[#F5EFE2] border-[#DDCEBC]"
//                                 required
//                             />
//                         </div>
//                         <div>
//                             <label className="block text-sm font-medium mb-1">State*</label>
//                             <input
//                                 type="text"
//                                 name="state"
//                                 value={billingDetails.state}
//                                 onChange={handleInputChange}
//                                 className="w-full border rounded-md px-3 py-2 bg-[#F5EFE2] border-[#DDCEBC]"
//                                 required
//                             />
//                         </div>
//                     </form>
//                 </div>

//                 {/* Additional Details */}
//                 <div className="space-y-6">
//                     <h3 className="text-lg font-semibold">Additional Details</h3>
//                     <form className="space-y-4">
//                         <div>
//                             <label className="block text-sm font-medium mb-1">Country/Region*</label>
//                             <input
//                                 type="text"
//                                 name="country"
//                                 value={billingDetails.country}
//                                 onChange={handleInputChange}
//                                 className="w-full border rounded-md px-3 py-2 bg-[#F5EFE2] border-[#DDCEBC]"
//                                 required
//                             />
//                         </div>
//                         <div>
//                             <label className="block text-sm font-medium mb-1">Pincode*</label>
//                             <input
//                                 type="text"
//                                 name="pincode"
//                                 value={billingDetails.pincode}
//                                 onChange={handleInputChange}
//                                 className="w-full border rounded-md px-3 py-2 bg-[#F5EFE2] border-[#DDCEBC]"
//                                 required
//                             />
//                         </div>
//                         <div>
//                             <label className="block text-sm font-medium mb-1">Phone*</label>
//                             <input
//                                 type="tel"
//                                 name="phone"
//                                 value={billingDetails.phone}
//                                 onChange={handleInputChange}
//                                 className="w-full border rounded-md px-3 py-2 bg-[#F5EFE2] border-[#DDCEBC]"
//                                 required
//                                 pattern="[0-9]{10}"
//                             />
//                         </div>
//                         <div>
//                             <label className="block text-sm font-medium mb-1">Email Address*</label>
//                             <input
//                                 type="email"
//                                 name="emailAddress"
//                                 value={billingDetails.emailAddress}
//                                 onChange={handleInputChange}
//                                 className="w-full border rounded-md px-3 py-2 bg-[#F5EFE2] border-[#DDCEBC]"
//                                 required
//                             />
//                         </div>
//                         <div>
//                             <label className="block text-sm font-medium mb-1">Additional Information</label>
//                             <textarea
//                                 name="additional"
//                                 value={billingDetails.additional}
//                                 onChange={handleInputChange}
//                                 className="w-full border rounded-md px-3 py-2 bg-[#F5EFE2] border-[#DDCEBC]"
//                                 placeholder="Additional information"
//                                 rows="4"
//                             />
//                         </div>
//                     </form>
//                 </div>

//                 {/* Cart Totals */}
//                 <div className="bg-[#F9F1E7] md:h-[350px] md:w-[300px] md:m-14 rounded-xl p-6 flex flex-col justify-between lg:mt-20">
//                     <h3 className="text-lg text-center font-bold mb-6">Cart Totals</h3>
//                     <div className="space-y-4">
//                         <div className="flex justify-between">
//                             <span>No of Pages:</span>
//                             <span>{pages}</span>
//                         </div>
//                         <div className="flex justify-between font-semibold">
//                             <span className="text-sm">{name}</span>
//                             <span>₹{price}</span>
//                         </div>
//                         <div className="flex justify-between font-semibold">
//                             <span className="text-sm font-semibold">Subtotal:</span>
//                             <span>₹{price}</span>
//                         </div>
//                         <hr />
//                         <div className="flex justify-between font-semibold">
//                             <span>Total:</span>
//                             <span>₹{price}</span>
//                         </div>
//                     </div>
//                     <div className="flex justify-center mt-6">
//                         <button
//                             type="submit"
//                             form="checkout-form"
//                             disabled={isProcessing}
//                             className={`border border-black text-black rounded-xl font-semibold px-6 py-2 hover:bg-black hover:text-white transition ${isProcessing ? "opacity-50 cursor-not-allowed" : ""
//                                 }`}
//                         >
//                             {isProcessing ? "Processing..." : "Order Now"}
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }


// import React, { useState } from "react";

// export default function Checkout() {
//   const [billingDetails, setBillingDetails] = useState({
//     firstName: "",
//     lastName: "",
//     state: "",
//     country: "",
//     address: "",
//     street: "",
//     city: "",
//     pincode: "",
//     phone: "",
//     emailAddress: "",
//   });

//   const cartTotal = 1250;

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setBillingDetails((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Checkout Data:", billingDetails);
//   };

//   return (
//     <div className="container mx-auto p-4 md:p-6">
//       <h2 className="text-2xl text-center font-semibold mb-6">Checkout</h2>

//       <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//          <div>
//           <h3 className="text-lg font-semibold mb-4 leading-loose">Billing Details</h3>
//           <form className="space-y-4">
//             <div className="flex flex-col md:flex-row md:space-x-4">
//               <div className="w-full">
//                 <label className="block text-sm font-medium">First Name</label>
//                 <input
//                   type="text"
//                   name="firstName"
//                   value={billingDetails.firstName}
//                   onChange={handleInputChange}
//                   className="w-full border rounded-md px-3 py-2 bg-[#F5EFE2] border-[#DDCEBC]"
//                   required
//                 />
//               </div>
//               <div className="w-full">
//                 <label className="block text-sm font-medium">Last Name</label>
//                 <input
//                   type="text"
//                   name="lastName"
//                   value={billingDetails.lastName}
//                   onChange={handleInputChange}
//                   className="w-full border rounded-md px-3 py-2 bg-[#F5EFE2] border-[#DDCEBC]"
//                   required
//                 />
//               </div>
//             </div>
//             <div>
//               <label className="block text-sm font-medium">Address</label>
//               <input
//                 type="text"
//                 name="address"
//                 value={billingDetails.address}
//                 onChange={handleInputChange}
//                 className="w-full border rounded-md px-3 py-2 bg-[#F5EFE2] border-[#DDCEBC]"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium">Street</label>
//               <input
//                 type="text"
//                 name="street"
//                 value={billingDetails.street}
//                 onChange={handleInputChange}
//                 className="w-full border rounded-md px-3 py-2 bg-[#F5EFE2] border-[#DDCEBC]"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium">Town/City</label>
//               <input
//                 type="text"
//                 name="city"
//                 value={billingDetails.city}
//                 onChange={handleInputChange}
//                 className="w-full border rounded-md px-3 py-2 bg-[#F5EFE2] border-[#DDCEBC]"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium">State</label>
//               <input
//                 type="text"
//                 name="state"
//                 value={billingDetails.state}
//                 onChange={handleInputChange}
//                 className="w-full border rounded-md px-3 py-2 bg-[#F5EFE2] border-[#DDCEBC]"
//                 required
//               />
//             </div>
//           </form>
//         </div>

//          <div>
//           <form className="space-y-4 md:mt-12">
//             <div>
//               <label className="block text-sm font-medium">Country/Region</label>
//               <input
//                 type="text"
//                 name="country"
//                 value={billingDetails.country}
//                 onChange={handleInputChange}
//                 className="w-full border rounded-md px-3 py-2 bg-[#F5EFE2] border-[#DDCEBC]"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium">Pincode</label>
//               <input
//                 type="text"
//                 name="pincode"
//                 value={billingDetails.pincode}
//                 onChange={handleInputChange}
//                 className="w-full border rounded-md px-3 py-2 bg-[#F5EFE2] border-[#DDCEBC]"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium">Phone</label>
//               <input
//                 type="text"
//                 name="phone"
//                 value={billingDetails.phone}
//                 onChange={handleInputChange}
//                 className="w-full border rounded-md px-3 py-2 bg-[#F5EFE2] border-[#DDCEBC]"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium">Email Address</label>
//               <input
//                 type="email"
//                 name="emailAddress"
//                 value={billingDetails.emailAddress}
//                 onChange={handleInputChange}
//                 className="w-full border rounded-md px-3 py-2 bg-[#F5EFE2] border-[#DDCEBC]"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium">Additional Information</label>
//               <textarea
//                 name="additional"
//                 value={billingDetails.additional}
//                 onChange={handleInputChange}
//                 className="w-full border rounded-md px-3 py-2 bg-[#F5EFE2] border-[#DDCEBC]"
//                 placeholder="Additional information"
//                 rows="4"
//               />
//             </div>
//           </form>
//         </div>

//         {/* Cart Totals */}
//         <div className="bg-[#F9F1E7] md:h-[300px] md:w-[300px] md:m-14 rounded-xl p-6 flex flex-col justify-between">
//           <h3 className="text-lg text-center font-bold mb-6">Cart Totals</h3>
//           <div className="space-y-4">
//             <div className="flex justify-between">
//               <span className="text-sm">Mini Album 1</span>
//               <span>Rs {cartTotal}</span>
//             </div>
//             <div className="flex justify-between">
//               <span className="text-sm font-semibold">Subtotal:</span>
//               <span>Rs {cartTotal}</span>
//             </div>
//             <hr />
//             <div className="flex justify-between font-semibold">
//               <span>Total:</span>
//               <span>Rs {cartTotal}</span>
//             </div>
//           </div>
//           <div className="flex justify-center mt-6">
//             <button
//               onClick={handleSubmit}
//               className="border border-black text-black rounded-xl font-semibold px-6 py-2 hover:bg-black hover:text-white transition"
//             >
//               Order Now
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// import React, { useState } from "react";
// import { useLocation } from "react-router-dom";

// export default function Checkout() {

//   const location = useLocation();
//   const { name, price, pages } = location.state || {};


//   const [billingDetails, setBillingDetails] = useState({
//     firstName: "",
//     lastName: "",
//     state: "",
//     country: "",
//     address: "",
//     street: "",
//     city: "",
//     pincode: "",
//     phone: "",
//     emailAddress: "",
//     additional: "",
//   });

//   const cartTotal = 1250;

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setBillingDetails((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Checkout Data:", billingDetails);
//   };

//   return (
//     <div className="container mx-auto p-4 md:p-6">
//       <h2 className="text-2xl text-center font-semibold mb-6">Checkout</h2>

//       <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//         {/* Billing Details */}
//         <div className="space-y-6">
//           <h3 className="text-lg font-semibold">Billing Details</h3>
//           <form className="space-y-4">
//             <div className="flex flex-col md:flex-row gap-4">
//               <div className="w-full">
//                 <label className="block text-sm font-medium mb-1">First Name</label>
//                 <input
//                   type="text"
//                   name="firstName"
//                   value={billingDetails.firstName}
//                   onChange={handleInputChange}
//                   className="w-full border rounded-md px-3 py-2 bg-[#F5EFE2] border-[#DDCEBC]"
//                   required
//                 />
//               </div>
//               <div className="w-full">
//                 <label className="block text-sm font-medium mb-1">Last Name</label>
//                 <input
//                   type="text"
//                   name="lastName"
//                   value={billingDetails.lastName}
//                   onChange={handleInputChange}
//                   className="w-full border rounded-md px-3 py-2 bg-[#F5EFE2] border-[#DDCEBC]"
//                   required
//                 />
//               </div>
//             </div>
//             <div>
//               <label className="block text-sm font-medium mb-1">Address</label>
//               <input
//                 type="text"
//                 name="address"
//                 value={billingDetails.address}
//                 onChange={handleInputChange}
//                 className="w-full border rounded-md px-3 py-2 bg-[#F5EFE2] border-[#DDCEBC]"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium mb-1">Street</label>
//               <input
//                 type="text"
//                 name="street"
//                 value={billingDetails.street}
//                 onChange={handleInputChange}
//                 className="w-full border rounded-md px-3 py-2 bg-[#F5EFE2] border-[#DDCEBC]"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium mb-1">Town/City</label>
//               <input
//                 type="text"
//                 name="city"
//                 value={billingDetails.city}
//                 onChange={handleInputChange}
//                 className="w-full border rounded-md px-3 py-2 bg-[#F5EFE2] border-[#DDCEBC]"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium mb-1">State</label>
//               <input
//                 type="text"
//                 name="state"
//                 value={billingDetails.state}
//                 onChange={handleInputChange}
//                 className="w-full border rounded-md px-3 py-2 bg-[#F5EFE2] border-[#DDCEBC]"
//                 required
//               />
//             </div>
//           </form>
//         </div>

//         {/* Additional Details */}
//         <div className="space-y-6">
//           <h3 className="text-lg font-semibold">Additional Details</h3>
//           <form className="space-y-4">
//             <div>
//               <label className="block text-sm font-medium mb-1">Country/Region</label>
//               <input
//                 type="text"
//                 name="country"
//                 value={billingDetails.country}
//                 onChange={handleInputChange}
//                 className="w-full border rounded-md px-3 py-2 bg-[#F5EFE2] border-[#DDCEBC]"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium mb-1">Pincode</label>
//               <input
//                 type="text"
//                 name="pincode"
//                 value={billingDetails.pincode}
//                 onChange={handleInputChange}
//                 className="w-full border rounded-md px-3 py-2 bg-[#F5EFE2] border-[#DDCEBC]"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium mb-1">Phone</label>
//               <input
//                 type="text"
//                 name="phone"
//                 value={billingDetails.phone}
//                 onChange={handleInputChange}
//                 className="w-full border rounded-md px-3 py-2 bg-[#F5EFE2] border-[#DDCEBC]"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium mb-1">Email Address</label>
//               <input
//                 type="email"
//                 name="emailAddress"
//                 value={billingDetails.emailAddress}
//                 onChange={handleInputChange}
//                 className="w-full border rounded-md px-3 py-2 bg-[#F5EFE2] border-[#DDCEBC]"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium mb-1">Additional Information</label>
//               <textarea
//                 name="additional"
//                 value={billingDetails.additional}
//                 onChange={handleInputChange}
//                 className="w-full border rounded-md px-3 py-2 bg-[#F5EFE2] border-[#DDCEBC]"
//                 placeholder="Additional information"
//                 rows="4"
//               />
//             </div>
//           </form>
//         </div>

//         {/* Cart Totals */}
//         <div className="bg-[#F9F1E7]  md:h-[350px]  md:w-[300px] md:m-14  rounded-xl p-6 flex flex-col justify-between lg:mt-20">
//           <h3 className="text-lg text-center font-bold mb-6">Cart Totals</h3>
//           <div className="space-y-4">

//           <div className="flex justify-between ">
//               <span>No of Pages:</span>
//               <span>{pages}</span>
//             </div>

//             <div className="flex justify-between font-semibold">
//               <span className="text-sm">{name}</span>
//               <span>Rs {price}</span>
//             </div>

//             <div className="flex justify-between font-semibold">
//               <span className="text-sm font-semibold">Subtotal:</span>
//               <span>Rs {price}</span>
//             </div>
//             <hr />
//             <div className="flex justify-between font-semibold">
//               <span>Total:</span>
//               <span>Rs {price}</span>
//             </div>

//           </div>
//           <div className="flex justify-center mt-6">
//             <button
//               onClick={handleSubmit}
//               className="border border-black text-black rounded-xl font-semibold px-6 py-2 hover:bg-black hover:text-white transition"
//             >
//               Order Now
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

//checkout.jsx

import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { handlePayment } from "../services/razorpayService";

export default function Checkout() {
    const location = useLocation();
    const navigate = useNavigate();
    const { name, price, pages } = location.state || {};

    const [billingDetails, setBillingDetails] = useState({
        firstName: "",
        lastName: "",
        state: "",
        country: "",
        address: "",
        street: "",
        city: "",
        pincode: "",
        phone: "",
        emailAddress: "",
        additional: "",
    });

    const [submitError, setSubmitError] = useState(null);
    const [isProcessing, setIsProcessing] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setBillingDetails((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitError(null);
        setIsProcessing(true);
    
        try {
            const requiredFields = [
                "firstName", "lastName", "address", "street",
                "city", "state", "country", "pincode",
                "phone", "emailAddress"
            ];
    
            const missingFields = requiredFields.filter(field => !billingDetails[field].trim());
            if (missingFields.length > 0) {
                throw new Error("Please fill in all required fields");
            }
    
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(billingDetails.emailAddress)) {
                throw new Error("Please enter a valid email address");
            }
    
            if (!/^\d{10}$/.test(billingDetails.phone)) {
                throw new Error("Phone number must be 10 digits");
            }
    
            // 🔁 Start Payment First
            const result = await handlePayment({
                amount: price,
                first_name: billingDetails.firstName,
                last_name: billingDetails.lastName,
                phone: billingDetails.phone,
                email: billingDetails.emailAddress,
                product_name: name,
                pages: pages,
                currency: "INR"
            });
    
            if (!result.success) {
                throw new Error(result.error || "Payment failed");
            }
    
            // ✅ Only after payment succeeds, call checkout API
            const response = await axios.post("http://localhost:4000/api/checkout", {
                first_name: billingDetails.firstName,
                last_name: billingDetails.lastName,
                address: billingDetails.address,
                street: billingDetails.street,
                city: billingDetails.city,
                state: billingDetails.state,
                country: billingDetails.country,
                pincode: billingDetails.pincode,
                phone: billingDetails.phone,
                email: billingDetails.emailAddress,
                product_name: name,
                pages: pages,
                total_amount: price,
                payment_id: result.paymentId,
                order_id: result.orderId,
            });
    
            // 🟢 Navigate after successful payment + backend checkout
            navigate("/whatsapp-redirect", {
                state: {
                    billingDetails,
                    productDetails: { name, price, pages },
                    paymentResult: result
                }
            });
    
        } catch (error) {
            console.error("Checkout failed:", error);
            setSubmitError(
                error.response?.data?.message ||
                error.message ||
                "Checkout failed. Please try again."
            );
        } finally {
            setIsProcessing(false);
        }
    };
    

    return (
        <div className="container mx-auto p-4 md:p-6">
            <h2 className="text-2xl text-center font-semibold mb-6">Checkout</h2>

            {submitError && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                    {submitError}
                </div>
            )}

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {/* Billing Details */}
                <div className="space-y-6">
                    <h3 className="text-lg font-semibold">Billing Details</h3>
                    <form id="checkout-form" className="space-y-4" onSubmit={handleSubmit}>
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="w-full">
                                <label className="block text-sm font-medium mb-1">First Name*</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={billingDetails.firstName}
                                    onChange={handleInputChange}
                                    className="w-full border rounded-md px-3 py-2 bg-[#F5EFE2] border-[#DDCEBC]"
                                    required
                                />
                            </div>
                            <div className="w-full">
                                <label className="block text-sm font-medium mb-1">Last Name*</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={billingDetails.lastName}
                                    onChange={handleInputChange}
                                    className="w-full border rounded-md px-3 py-2 bg-[#F5EFE2] border-[#DDCEBC]"
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Address*</label>
                            <input
                                type="text"
                                name="address"
                                value={billingDetails.address}
                                onChange={handleInputChange}
                                className="w-full border rounded-md px-3 py-2 bg-[#F5EFE2] border-[#DDCEBC]"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Street*</label>
                            <input
                                type="text"
                                name="street"
                                value={billingDetails.street}
                                onChange={handleInputChange}
                                className="w-full border rounded-md px-3 py-2 bg-[#F5EFE2] border-[#DDCEBC]"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Town/City*</label>
                            <input
                                type="text"
                                name="city"
                                value={billingDetails.city}
                                onChange={handleInputChange}
                                className="w-full border rounded-md px-3 py-2 bg-[#F5EFE2] border-[#DDCEBC]"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">State*</label>
                            <input
                                type="text"
                                name="state"
                                value={billingDetails.state}
                                onChange={handleInputChange}
                                className="w-full border rounded-md px-3 py-2 bg-[#F5EFE2] border-[#DDCEBC]"
                                required
                            />
                        </div>
                    </form>
                </div>

                {/* Additional Details */}
                <div className="space-y-6">
                    <h3 className="text-lg font-semibold">Additional Details</h3>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">Country/Region*</label>
                            <input
                                type="text"
                                name="country"
                                value={billingDetails.country}
                                onChange={handleInputChange}
                                className="w-full border rounded-md px-3 py-2 bg-[#F5EFE2] border-[#DDCEBC]"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Pincode*</label>
                            <input
                                type="text"
                                name="pincode"
                                value={billingDetails.pincode}
                                onChange={handleInputChange}
                                className="w-full border rounded-md px-3 py-2 bg-[#F5EFE2] border-[#DDCEBC]"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Phone*</label>
                            <input
                                type="tel"
                                name="phone"
                                value={billingDetails.phone}
                                onChange={handleInputChange}
                                className="w-full border rounded-md px-3 py-2 bg-[#F5EFE2] border-[#DDCEBC]"
                                required
                                pattern="[0-9]{10}"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Email Address*</label>
                            <input
                                type="email"
                                name="emailAddress"
                                value={billingDetails.emailAddress}
                                onChange={handleInputChange}
                                className="w-full border rounded-md px-3 py-2 bg-[#F5EFE2] border-[#DDCEBC]"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Additional Information</label>
                            <textarea
                                name="additional"
                                value={billingDetails.additional}
                                onChange={handleInputChange}
                                className="w-full border rounded-md px-3 py-2 bg-[#F5EFE2] border-[#DDCEBC]"
                                placeholder="Additional information"
                                rows="4"
                            />
                        </div>
                    </form>
                </div>

                {/* Cart Totals */}
                <div className="bg-[#F9F1E7] md:h-[350px] md:w-[300px] md:m-14 rounded-xl p-6 flex flex-col justify-between lg:mt-20">
                    <h3 className="text-lg text-center font-bold mb-6">Cart Totals</h3>
                    <div className="space-y-4">
                        <div className="flex justify-between">
                            <span>No of Pages:</span>
                            <span>{pages}</span>
                        </div>
                        <div className="flex justify-between font-semibold">
                            <span className="text-sm">{name}</span>
                            <span>₹{price}</span>
                        </div>
                        <div className="flex justify-between font-semibold">
                            <span className="text-sm font-semibold">Subtotal:</span>
                            <span>₹{price}</span>
                        </div>
                        <hr />
                        <div className="flex justify-between font-semibold">
                            <span>Total:</span>
                            <span>₹{price}</span>
                        </div>
                    </div>
                    <div className="flex justify-center mt-6">
                        <button
                            type="submit"
                            form="checkout-form"
                            disabled={isProcessing}
                            className={`border border-black text-black rounded-xl font-semibold px-6 py-2 hover:bg-black hover:text-white transition ${
                                isProcessing ? "opacity-50 cursor-not-allowed" : ""
                            }`}
                        >
                            {isProcessing ? "Processing..." : "Order Now"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
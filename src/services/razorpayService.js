// //razorpayService.js

// import axios from "axios";

// // Load Razorpay script dynamically
// export const loadRazorpayScript = () => {
//   return new Promise((resolve) => {
//     if (window.Razorpay) {
//       console.log("Razorpay already loaded");
//       return resolve(true);
//     }

//     const script = document.createElement("script");
//     script.src = "https://checkout.razorpay.com/v1/checkout.js";
//     script.async = true;
//     script.onload = () => {
//       console.log("Razorpay SDK loaded successfully");
//       resolve(true);
//     };
//     script.onerror = () => {
//       console.error("Failed to load Razorpay SDK");
//       resolve(false);
//     };
//     document.body.appendChild(script);
//   });
// };

// // Main payment handling function
// export const handlePayment = (paymentData) => {
//     return new Promise(async (resolve) => {
//       try {
//         // 1. Load Razorpay SDK
//         const scriptLoaded = await loadRazorpayScript();
//         if (!scriptLoaded) {
//           resolve({ 
//             success: false, 
//             error: "Failed to load payment gateway. Please try again." 
//           });
//           return;
//         }
  
//         // 2. Create order on backend
//         const { data: orderData } = await axios.post(
//           "http://localhost:4000/api/payment/create-order",
//           {
//             amount: paymentData.amount,
//             currency: paymentData.currency || "INR",
//             receipt: `order_${Date.now()}`,
//             notes: {
//               product_name: paymentData.product_name,
//               customer_name: `${paymentData.first_name} ${paymentData.last_name}`,
//               pages: paymentData.pages
//             }
//           }
//         );
  
//         if (!orderData.success || !orderData.order) {
//           resolve({ 
//             success: false, 
//             error: orderData.error || "Failed to create payment order" 
//           });
//           return;
//         }
  
//         // 3. Setup payment options
//         const options = {
//           key: "rzp_test_h60o1aP10Gf6wK",
//           amount: orderData.order.amount,
//           currency: orderData.order.currency,
//           name: "Your Company Name",
//           description: `Payment for ${paymentData.product_name || 'Order'}`,
//           order_id: orderData.order.id,
//           handler: (response) => {
//             resolve({
//               success: true,
//               paymentId: response.razorpay_payment_id,
//               orderId: orderData.order.id,
//               amount: orderData.order.amount,
//               currency: orderData.order.currency
//             });
//           },
//           prefill: {
//             name: `${paymentData.first_name} ${paymentData.last_name}`,
//             email: paymentData.email,
//             contact: paymentData.phone
//           },
//           notes: {
//             product: paymentData.product_name,
//             customer_name: `${paymentData.first_name} ${paymentData.last_name}`,
//             pages: paymentData.pages
//           },
//           theme: {
//             color: "#3399cc"
//           },
//           modal: {
//             ondismiss: () => {
//               // This is called when modal is closed by user
//               resolve({
//                 success: false,
//                 error: "Payment window closed by user"
//               });
//             }
//           }
//         };
  
//         // Add UPI payment options for INR currency
//         if ((paymentData.currency || "INR") === "INR") {
//           options.method = { upi: true };
//           options.upi = { intent: true };
//         }
  
//         // 4. Open Razorpay payment modal
//         const rzp = new window.Razorpay(options);
        
//         rzp.on("payment.failed", (response) => {
//           resolve({
//             success: false,
//             error: response.error.description || "Payment failed"
//           });
//         });
  
//         rzp.open();
  
//       } catch (error) {
//         console.error("Payment processing error:", error);
//         resolve({
//           success: false,
//           error: error.response?.data?.error || "Payment processing failed"
//         });
//       }
//     });
//   };


//razorpayService.js

import axios from "axios";

// Load Razorpay script dynamically
export const loadRazorpayScript = () => {
  return new Promise((resolve) => {
    if (window.Razorpay) {
      console.log("Razorpay already loaded");
      return resolve(true);
    }

    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => {
      console.log("Razorpay SDK loaded successfully");
      resolve(true);
    };
    script.onerror = () => {
      console.error("Failed to load Razorpay SDK");
      resolve(false);
    };
    document.body.appendChild(script);
  });
};

// Main payment handling function
export const handlePayment = (paymentData) => {
    return new Promise(async (resolve) => {
      try {
        // 1. Load Razorpay SDK
        const scriptLoaded = await loadRazorpayScript();
        if (!scriptLoaded) {
          resolve({ 
            success: false, 
            error: "Failed to load payment gateway. Please try again." 
          });
          return;
        }
  
        // 2. Create order on backend
        const { data: orderData } = await axios.post(
          "http://localhost:4000/api/payment/create-order",
          {
            amount: paymentData.amount,
            currency: paymentData.currency || "INR",
            receipt: `order_${Date.now()}`,
            notes: {
              product_name: paymentData.product_name,
              customer_name: `${paymentData.first_name} ${paymentData.last_name}`,
              pages: paymentData.pages
            }
          }
        );
  
        if (!orderData.success || !orderData.order) {
          resolve({ 
            success: false, 
            error: orderData.error || "Failed to create payment order" 
          });
          return;
        }
  
        // 3. Setup payment options
        const options = {
          key: "rzp_test_h60o1aP10Gf6wK",
          amount: orderData.order.amount,
          currency: orderData.order.currency,
          name: "Your Company Name",
          description: `Payment for ${paymentData.product_name || 'Order'}`,
          order_id: orderData.order.id,
          handler: (response) => {
            resolve({
              success: true,
              paymentId: response.razorpay_payment_id,
              orderId: orderData.order.id,
              amount: orderData.order.amount,
              currency: orderData.order.currency
            });
          },
          prefill: {
            name: `${paymentData.first_name} ${paymentData.last_name}`,
            email: paymentData.email,
            contact: paymentData.phone
          },
          notes: {
            product: paymentData.product_name,
            customer_name: `${paymentData.first_name} ${paymentData.last_name}`,
            pages: paymentData.pages
          },
          theme: {
            color: "#3399cc"
          },
          modal: {
            ondismiss: () => {
              // This is called when modal is closed by user
              resolve({
                success: false,
                error: "Payment window closed by user"
              });
            }
          }
        };
  
        // Add UPI payment options for INR currency
        if ((paymentData.currency || "INR") === "INR") {
          options.method = { upi: true };
          options.upi = { intent: true };
        }
  
        // 4. Open Razorpay payment modal
        const rzp = new window.Razorpay(options);
        
        rzp.on("payment.failed", (response) => {
          resolve({
            success: false,
            error: response.error.description || "Payment failed"
          });
        });
  
        rzp.open();
  
      } catch (error) {
        console.error("Payment processing error:", error);
        resolve({
          success: false,
          error: error.response?.data?.error || "Payment processing failed"
        });
      }
    });
  };
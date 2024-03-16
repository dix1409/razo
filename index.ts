import express from "express";
import bodyParser from "body-parser";
const app = express();
const port = 4000;

app.use(bodyParser.json());

// Endpoint to receive webhook events from Razorpay
app.post("/razorpay/webhook", (req, res) => {
  const event = req.body.event; // Event type
  const payload = req.body.payload; // Event data

  // Handle different event types
  switch (event) {
    case "payment.captured":
      handlePaymentCaptured(payload);
      break;
    case "order.paid":
      handleOrderPaid(payload);
      break;
    // Handle other event types as needed
    default:
      console.log(`Unhandled event type: ${event}`);
      break;
  }

  // Respond to Razorpay with a 200 OK status
  res.sendStatus(200);
});

// Function to handle payment captured event
function handlePaymentCaptured(payload) {
  console.log("Payment Captured:", payload);
  // Your logic to handle payment captured event
}

// Function to handle order paid event
function handleOrderPaid(payload) {
  console.log("Order Paid:", payload);
  // Your logic to handle order paid event
}

app.listen(port, () => {
  console.log(`Webhook server listening at http://localhost:${port}`);
});

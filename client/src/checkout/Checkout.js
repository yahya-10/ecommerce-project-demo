import { useState } from "react";

import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";

import CardInput from "./CardInput";

const Checkout = () => {
  const [email, setEmail] = useState("");

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    const response = await axios.post("http://localhost:5000/payment", {
      email: email,
    });
    const clientSecret = response.data["client_secret"];

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          email: email,
        },
      },
    });

    if (result.error) {
      console.log(result.error.message);
    } else {
      if (result.paymentIntent.status === "succeeded") {
        console.log("Money is in the Bank");
      }
    }
  };

  // console.log("data", userData);

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <CardInput />
      <button disabled={!stripe}>Submit</button>
    </form>
  );
};

export default Checkout;

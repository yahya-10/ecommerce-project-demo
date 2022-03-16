import { useState } from "react";

import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";

import CardInput from "./CardInput";
import Steps from "../component/user_profile/Steps";

/**
 *@private
 * This component handles the payment.
 * An alert-message will popup if everything went right
 *
 */

const Checkout = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState({
    emailError: "",
    paymentError: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    // Disable form submission until Stripe.js has loaded.
    if (!stripe || !elements) return;
    if (!email) {
      setError({ emailError: "This field is required" });
      return;
    } else {
      setError("");
    }

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
      setError({ paymentError: result.error.message });
    } else {
      if (result.paymentIntent.status === "succeeded") {
        alert(`${email} Transaction Succeeded`);
        console.log(result);
      }
    }
    setIsLoading(false);
  };

  return (
    <>
      <Steps stage={"04"} />
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <label
              htmlFor="email"
              className="mt-3 block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <div className="border-b border-gray-300 focus-within:border-indigo-600">
              <input
                type="text"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full border-0 border-b border-transparent bg-gray-50 focus:border-indigo-600 focus:ring-0 sm:text-sm"
                placeholder="your_email@gmail.com"
              />
              {error && <p style={{ color: "red" }}>{error.emailError}</p>}
            </div>
            <div className="mt-3">
              <CardInput />
            </div>
            {error && <p style={{ color: "red" }}>{error.paymentError}</p>}
            <button
              className=" mt-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              disabled={!stripe}
            >
              {isLoading ? "processing..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Checkout;

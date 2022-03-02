import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";

// import Checkout from "./Checkout";

const Checkout = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    const result = await stripe.confirmPayment({
      elements,
      confirmParams: {},
    });

    if (result.error) console.log(result.error.message);
  };
  console.log("stripe", stripe);
  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <button disabled={!stripe}>Submit</button>
    </form>
  );
};

export default Checkout;

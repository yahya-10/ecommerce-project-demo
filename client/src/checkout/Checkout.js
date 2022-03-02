import {
  useStripe,
  useElements,
  PaymentElement,
  CardElement,
} from "@stripe/react-stripe-js";

const Checkout = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    if (!error) {
      try {
        let { id } = paymentMethod;
        const response = await fetch("http://localhost:5000/payment", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            amount: 2000,
            paymentMethod: id,
            currency: "USD",
          }),
        }).then((data) => data.json());

        if (response.data.success) {
          console.log("Successful payment");
        }
      } catch (error) {
        console.log("error", error);
      }
    }
  };

  // console.log("data", userData);

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <button disabled={!stripe}>Submit</button>
    </form>
  );
};

export default Checkout;

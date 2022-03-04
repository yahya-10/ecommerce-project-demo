import ReactDOM from "react-dom";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import { BrowserRouter } from "react-router-dom";

import App from "./App";
import "./index.css";
import "@stripe/stripe-js";

/**
 * -Entry point of the react application.
 * -`Elements` a stripe wrapper gives access to all the stripe object in every part of the application.
 */

const stripePromise = loadStripe(`${process.env.REACT_APP_STRIPE_KEY}`);

// const options = {
//   // passing the client secret obtained from the server
//   clientSecret: "{{CLIENT_SECRET}}",
// };

ReactDOM.render(
  <Elements stripe={stripePromise}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Elements>,
  document.getElementById("root")
);

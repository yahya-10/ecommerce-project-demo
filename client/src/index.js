import ReactDOM from "react-dom";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import { BrowserRouter } from "react-router-dom";

import App from "./App";
import "./index.css";

const stripePromise = loadStripe(
  "pk_test_51ISLrtEXKHL1myveddk8qi9zjGfZIGQKNQFxxTPpJonoe2yWyE6wqf6WKUW1ajR2eNr3WiFdHaDKLAfVylaiDsrv00HOOnLeO1"
);

const options = {
  // passing the client secret obtained from the server
  clientSecret: "{{CLIENT_SECRET}}",
};

ReactDOM.render(
  <BrowserRouter>
    <Elements stripe={stripePromise} options={options}>
      <App />
    </Elements>
  </BrowserRouter>,
  document.getElementById("root")
);

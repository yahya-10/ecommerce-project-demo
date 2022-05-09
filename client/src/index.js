import React, { Suspense } from "react";
import ReactDOM from "react-dom";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "./utils/i18n";

import App from "./App";
import Loader from "./utils/loader/Loader";
import store from "./features/store";
import * as serviceWorker from "./serviceWorker";
import "./index.css";
import "@stripe/stripe-js";

/**
 * -Entry point of the react application.
 * -`Elements` a stripe wrapper gives access to all the stripe object in every part of the application.
 */

const stripePromise = loadStripe(`${process.env.REACT_APP_STRIPE_KEY}`);
// const stripePromise = loadStripe(
//   `pk_test_51ISLrtEXKHL1myveddk8qi9zjGfZIGQKNQFxxTPpJonoe2yWyE6wqf6WKUW1ajR2eNr3WiFdHaDKLAfVylaiDsrv00HOOnLeO1`
// );

ReactDOM.render(
  // Suspense works well with React.lazy to improve the ux.
  <Suspense fallback={<Loader />}>
    <Provider store={store}>
      <Elements stripe={stripePromise}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Elements>
    </Provider>
  </Suspense>,
  document.getElementById("root")
);

serviceWorker.register();

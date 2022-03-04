import { CardElement } from "@stripe/react-stripe-js";

/**
 * Prebuilt UI component for validating user's payment.
 * @private
 * @param {object}  options -  CSS styles
 * @returns Component
 */

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      iconColor: "#c4f0ff",
      color: "black",
      fontWeight: 500,
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "16px",
      fontSmoothing: "antialiased",

      ":-webkit-autofill": {
        color: "#fce883",
      },
      "::placeholder": {
        color: "#87BBFD",
      },
    },
    invalid: {
      iconColor: "#FFC7EE",
      color: "#FFC7EE",
    },
  },
};

const CardInput = () => {
  return <CardElement options={CARD_ELEMENT_OPTIONS} />;
};

export default CardInput;

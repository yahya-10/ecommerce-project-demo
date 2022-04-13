const express = require("express");
const cors = require("cors");
const tokenGenerator = require("uuid-token-generator");
require("dotenv").config();
const bodyParser = require("body-parser");
const stripe = require("stripe")(process.env.STRIPE_KEY);
// const stripe = require("stripe")(
//   `sk_test_51ISLrtEXKHL1myveQ8KgiE0l01ycxXpvWqixDUiRKJlZxedvq8SqPokQUNiiivhZZxEKvtfwfZSCSO7RVdMI5BeT000E9AV1mQ`
// );

const app = express();

/**
 * Middleware that enables cross-origin resourse sharing
 */
app.use(cors());

/**
 * Middleware that parses the request body before handlers
 */
app.use(bodyParser.urlencoded({ extended: true }));

const tokGen = new tokenGenerator();

/**
 * User login Endpoint
 */
app.use("/login", cors(), (req, res) => {
  try {
    res.send({
      //Generate unique token to verify user's identity
      token: tokGen.generate(),
    });
  } catch (error) {
    console.error(error);
  }
});

/**
 * First time User registration Endpoint
 */
app.use("/register", cors(), (req, res) => {
  try {
    res.send({
      token: tokGen.generate(),
    });
  } catch (error) {
    console.error(error);
  }
});

/**
 * Payment Endpoint
 */
app.post("/payment", async (req, res) => {
  const { email } = req.body;
  //Collect payment from customers
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 5000,
    currency: "USD",
    receipt_email: email,
    metadata: {
      integration_check: "accept_a_payment",
    },
  });

  //Send the "client_secret" to react to finish payment
  res.json({
    client_secret: paymentIntent["client_secret"],
  });
});

/**
 * Create the web server at the specified port.
 */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`app is listening on port ${PORT}`);
});

const express = require("express");
const cors = require("cors");
require("dotenv").config();
const bodyParser = require("body-parser");
const stripe = require("stripe")(process.env.STRIPE_KEY);

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/login", cors(), (req, res) => {
  try {
    res.send({
      token: "testToken123",
    });
  } catch (error) {
    console.error(error);
  }
});

app.use("/register", cors(), (req, res) => {
  try {
    res.send({
      token: "testToken123",
    });
  } catch (error) {
    console.error(error);
  }
});

app.post("/payment", async (req, res) => {
  const { email } = req.body;
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 5000,
    currency: "USD",
    receipt_email: email,
    metadata: {
      integration_check: "accept_a_payment",
    },
  });

  res.json({
    client_secret: paymentIntent["client_secret"],
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`app is listening on port ${PORT}`);
});

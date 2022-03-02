const express = require("express");
const cors = require("cors");
require("dotenv").config();
const bodyParser = require("body-parser");
const stripe = require("stripe")(process.env.STRIPE_KEY);

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/login", (req, res) => {
  try {
    res.send({
      token: "test123",
    });
  } catch (error) {
    console.error(error);
  }
});

app.post("/payment", async (req, res) => {
  const { amount, id, currency } = req.body;
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      paymentMethod: id,
      currency,
    });

    res.json({
      clientSecret: paymentIntent.client_secret,
      success: true,
    });
  } catch (error) {
    console.error(error);
    res.json({
      message: error.message,
      success: false,
    });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`app is listening on port ${PORT}`);
});

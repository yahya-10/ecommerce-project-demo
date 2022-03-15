const express = require("express");
const cors = require("cors");
const tokenGenerator = require("uuid-token-generator");
require("dotenv").config();
const bodyParser = require("body-parser");
// const stripe = require("stripe")(process.env.STRIPE_KEY);
const stripe = require("stripe")(
  `sk_test_51ISLrtEXKHL1myveQ8KgiE0l01ycxXpvWqixDUiRKJlZxedvq8SqPokQUNiiivhZZxEKvtfwfZSCSO7RVdMI5BeT000E9AV1mQ`
);

const app = express();

// Prevent form cross-origin blocking
app.use(cors());

// Parse the data
app.use(bodyParser.urlencoded({ extended: true }));

// Route that enables the user to login
app.use("/login", cors(), (req, res) => {
  try {
    const tokGen = new tokenGenerator();
    res.send({
      token: tokGen.generate(),
    });
  } catch (error) {
    console.error(error);
  }
});

// Route that enables the user to register
app.use("/register", cors(), (req, res) => {
  try {
    const tokGen = new tokenGenerator();
    res.send({
      token: tokGen.generate(),
    });
  } catch (error) {
    console.error(error);
  }
});

// Payment route
app.post("/payment", async (req, res) => {
  const { email } = req.body;
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 5000,
    currency: "USD",
    receipt_email: email,
    metadata: {
      integration_check: "accept_a_payment",
    },
    // usage: "on_session",
  });

  res.json({
    client_secret: paymentIntent["client_secret"],
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`app is listening on port ${PORT}`);
});

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

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

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`app is tistening on port ${PORT}`);
});

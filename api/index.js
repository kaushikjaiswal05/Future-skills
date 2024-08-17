const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/api", routes);

app.get("/ping", (req, res) => {
  res.send("Server is running");
});

const mongoURI ="mongodb+srv://kaushikjaiswal024:K4aBoiJ6Ga8VylA8@future-skills.e26jq.mongodb.net/";

mongoose.connect(mongoURI).then(() => {
    console.log("Connected to MongoDB Atlas");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB Atlas", err);
    process.exit(1);
  });

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

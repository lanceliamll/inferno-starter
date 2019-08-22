const express = require("express");
const connectDB = require("./config/db");
const bodyParser = require("body-parser");
const cors = require("cors");

//Connect to Mongo
connectDB();

const app = express();

//Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server Started on http://localhost:${PORT}`)
);

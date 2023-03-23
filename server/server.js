require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const test = require("./router/test");
const cors = require("cors");
const app = express();

const { PORT, MONGO_URI } = process.env;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());
app.use("/api", test);

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Successfully connected to mongodb'))
  .catch(e => console.error(e));

// const port = 5000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
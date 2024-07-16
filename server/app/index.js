const express = require("express");
const app = express();
const router = express.Router();
const connectDB = require("./db/config");
require("dotenv").config();
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");

// middleware
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

// todo: importing routes
const movieRoutes = require("./routes/movieRoutes");

//! Starting Database
connectDB();

const port = process.env.PORT || 3001;

//routes
router.use("/apiv1/movies", movieRoutes);

// building react app * http://localhost:3001

router.use(express.static(path.join(__dirname, "../../client/build")));

router.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});

module.exports = { app, port, router };

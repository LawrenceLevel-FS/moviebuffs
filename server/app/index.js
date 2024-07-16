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

// * http://localhost:3001
router.get("/", (req, res) => {
  res.status(200).json({ message: `${req.method} - ` });
});

// building react app
app.use(express.static(path.join(__dirname, "../../client/build")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});

//routes
router.use("/apiv1/movies", movieRoutes);

module.exports = { app, port, router };

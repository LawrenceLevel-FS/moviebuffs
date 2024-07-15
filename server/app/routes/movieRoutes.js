// importing router
const router = require("express").Router();
// importing instructor controllers
const {
  getAllMovies,
  getOneMovieById,
  createNewMovie,
  updateMovieById,
  deleteMovieById,
} = require("../controller/movieController");

// * http://localhost:3001/apiv1/movies

// ?@GET all Movies
router.get("/", getAllMovies);

// ?@GET Movies by ID
router.get("/:id", getOneMovieById);

// ?@POST Movies
router.post("/", createNewMovie);

// ?@UPDATE Movies by ID
router.patch("/:id", updateMovieById);

// ?@DELETE Movies by ID
router.delete("/:id", deleteMovieById);

module.exports = router;

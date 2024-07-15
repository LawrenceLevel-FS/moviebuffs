const Movie = require("../models/Moive");

// * @GET all Movies
const getAllMovies = async (req, res) => {
  const movies = await Movie.find();

  try {
    res.status(201).json({ movies: movies });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// * @GET Movies by ID
const getOneMovieById = async (req, res) => {
  const id = req.params.id;

  try {
    const movie = await Movie.findById(id);
    if (!movie) {
      return res.status(404).json({ message: "Movie not found" });
    }
    res.status(200).json(movie);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// * @POST Movies
const createNewMovie = async (req, res) => {
  const { movie } = req.body;
  try {
    const newMovie = await Movie.create(movie);

    res.status(201).json({ movie: newMovie });
  } catch (error) {
    res.status(500).json({ message: error.message, movie: movie });
  }
};

// * @UPDATE Movies by ID
const updateMovieById = async (req, res) => {
  const id = req.params.id;
  try {
    const updateMovie = await Movie.findByIdAndUpdate(id, req.body, {
      upsert: true,
    });
    res.status(200).json({
      method: `Method - ${req.method}`,
      message: "Update successful",
      data: updateMovie,
    });
    if (!updateMovie) {
      return res.status(404).json({ message: "Movie not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// * @DELETE Movies by ID
const deleteMovieById = async (req, res) => {
  const id = req.params.id;
  try {
    const deleteMovie = await Movie.findByIdAndDelete(id);
    res.status(200).json({
      method: `Method - ${req.method}`,
      message: "Deleted successful",
    });
    if (!deleteMovie) {
      return res.status(404).json({ message: "Movie not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllMovies,
  getOneMovieById,
  createNewMovie,
  updateMovieById,
  deleteMovieById,
};

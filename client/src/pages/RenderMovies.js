import { useEffect, useState } from "react";

const RenderMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const [values, setValues] = useState({
    title: "",
    director: "",
    releaseYear: "",
  });

  // let ignore = false;
  useEffect(() => {
    getMovies();
  }, []);

  const API_BASE =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3001"
      : process.env.REACT_APP_BASE_URL;

  //get all movies
  const getMovies = async () => {
    setLoading(true);
    try {
      await fetch(`${API_BASE}/apiv1/movies`)
        .then((res) => res.json())
        .then((data) => {
          setMovies(data.movies);
          console.log(movies, "in fetch");
        });
    } catch (error) {
      setError(error.message || "Unexpected Error");
      console.log(movies, "in catch");
    } finally {
      setLoading(false);
      console.log(movies, "in Finally!");
    }
  };

  // add movie
  const addMovie = async (e) => {
    e.preventDefault();
    console.log(JSON.stringify(values));
    setLoading(true);
    try {
      await fetch(`${API_BASE}/apiv1/movies/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      }).then((res) => res.json().then((data) => console.log(data)));
    } catch (error) {
      setError(error.message || "Unexpected Error");
    } finally {
      setLoading(false);
    }
  };
  const handleChanges = (e) => {
    e.persist();

    setValues((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

  // delete btn
  const deleteCard = async (e) => {
    setLoading(true);
    try {
      await fetch(`${API_BASE}/apiv1/movies/${e.target.parentNode.id}`, {
        method: "DELETE",
      }).then((res) => res.json().then((data) => setMovies(data.movies)));
    } catch (error) {
      setError(error.message || "Unexpected Error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 style={{ marginTop: "2rem", textAlign: "center" }}>Movies</h1>
      <div className="form-area">
        <form id="form">
          <div id="form-content">
            <label>
              Title:{" "}
              <input
                type="text"
                name="title"
                value={values.title}
                onChange={handleChanges}
              />
            </label>
            <label>
              director:{" "}
              <input
                type="text"
                name="director"
                value={values.director}
                onChange={handleChanges}
              />
            </label>
            <label>
              releaseYear:{" "}
              <input
                type="text"
                name="releaseYear"
                value={values.releaseYear}
                onChange={handleChanges}
              />
            </label>
            <button onClick={addMovie}>Submit</button>
          </div>
        </form>
      </div>
      <div id="movie-area">
        <ul id="movie-id">
          {movies &&
            movies.map((movie) => {
              return (
                <li id={movie._id} key={movie._id}>
                  <h1>{movie.title}</h1>
                  <p>{movie.director}</p>
                  <p>{movie.releaseYear}</p>
                  <button onClick={deleteCard} style={{ color: "red" }}>
                    Delete
                  </button>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};
export default RenderMovies;

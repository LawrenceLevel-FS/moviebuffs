import { useEffect, useState } from "react";

const RenderMovies = () => {
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;
    if (!ignore) {
      getMovies();
    }
    ignore = true;
  }, []);

  const API_BASE =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3001"
      : process.env.REACT_APP_BASE_URL;

  const getMovies = async () => {
    setLoading(true);
    try {
      await fetch(`${API_BASE}/apiv1/movies`).then((res) =>
        res.json().then((data) => {
          setMovies(data);
        })
      );
    } catch (error) {
      setError(error.message || "Unexpected Error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Movies</h1>
      <div className="form-area">
        <form id="form">
          <div>
            <label>
              Title: <input type="text" name="title" />
            </label>
            <label>
              director: <input type="text" name="director" />
            </label>
            <label>
              releaseYear: <input type="text" name="releaseYear" />
            </label>
          </div>
        </form>
      </div>
      <div id="movie-area">
        <ul>
          {movies.movies.map((movie) => {
            return (
              <li>
                <h1>{movie.title}</h1>
                <p>{movie.director}</p>
                <p>{movie.releaseYear}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default RenderMovies;

import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import RenderMovies from "./pages/RenderMovies";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/movies" element={<RenderMovies />} />
      </Routes>
    </>
  );
}

export default App;

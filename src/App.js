import "./App.css";
import FooterC from "./Components/Footer/Footer";
import { moviesData } from "./Constantes/MoviesData";
import MovieList from "./Components/Movies/MovieList";
import NavbarC from "./Components/Navbar/Navbar";
import { useState } from "react";
import Add from "./Components/Add/Add";

function App() {
  //declare a state to add a new movie by the user
  const [movie, setMovie] = useState(moviesData);
  //Add new movie function
  const addMovie = (newMovie) => {
    setMovie([newMovie, ...movie]);
  };
  //declare a state to search a movie by the user
  const [text, setText] = useState("");
  const [newRating, setRating] = useState(0);
  //search by title function
  const handleSearch = (e) => {
    e.preventDefault();
    setText(e.target.value);
  };
  //search by rating function
  const handleRating = (e, newRating) => {
    setRating(newRating);
  };

  return (
    <div className="App">
      <NavbarC
        handleSearch={handleSearch}
        handleRating={handleRating}
        text={text}
        newRating={newRating}
      />
      <Add addMovie={addMovie} />
      <MovieList items={movie} text={text} newRating={newRating} />
      <FooterC />
    </div>
  );
}

export default App;

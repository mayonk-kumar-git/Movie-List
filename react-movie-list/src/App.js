import React, { useEffect, useState } from "react";
import { Container } from "semantic-ui-react";
import "./App.css";
import MovieForm from "./components/MovieForm";
import Movies from "./components/Movies";

function App() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    //the base url is added as a proxy in the package.json file at line no. 28 -- below "eslintConfig" and above "browserslist" attribute
    fetch("/movies").then((response) =>
      response.json().then((data) => {
        setMovies(data.movies);
      })
    );
  }, []);

  return (
    <Container style={{ marginTop: 40 }}>
      {/* [...currentMovies, movie] will add the movies to the end of the list and [movie, ...currentMovies] will add it to the front/top of the movie list */}
      <MovieForm
        onNewMovie={(movie) =>
          setMovies((currentMovies) => [movie, ...currentMovies])
        }
      />
      <Movies movies={movies} />
    </Container>
  );
}

export default App;

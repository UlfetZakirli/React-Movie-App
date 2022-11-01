import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useEffect, useState } from 'react';
import MovieList from "./components/MovieList";
import MovieListHeading from "./components/MovieListHeading";
import SearchBox from "./components/SearchBox";
import AddFavourite from './components/AddFavourite';
import RemoveFavourite from './components/RemoveFavourite';
const App = () => {
  const [movies, setMovies] = useState([])
  const [searchValue, setSearchValue] = useState("")
  const [favourites, setFavourites] = useState([])
  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=ae26803d`
    const res = await fetch(url)
    const data = await res.json()
    setMovies(data.Search)
  }
  useEffect(() => {
    getMovieRequest(searchValue)
  }, [searchValue])

  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem('movie-app'))
    setFavourites(storage)
  }, [])


  const handleAddFavourite = (movie) => {
    const checkImdbId = favourites.map(item => item.imdbID)
    if (!checkImdbId.includes(movie.imdbID)) {
      const newFavourite = [...favourites, movie]
      setFavourites(newFavourite)
      saveToLocalStorage(newFavourite)
    } else {
      alert("This movie is already exist")
    }




  }
  const handleRemoveFavourite = (movie) => {
    const newFacourite = favourites.filter((item) => item.imdbID !== movie.imdbID)
    setFavourites(newFacourite)
    saveToLocalStorage(newFacourite)

  }

  const saveToLocalStorage = (favMovie) => {
    localStorage.setItem('movie-app', JSON.stringify(favMovie))
  }
  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading title="Movies" />
        <SearchBox setSearchValue={setSearchValue} />
      </div>
      <div className="row">
        <MovieList movies={movies} MovieIcon={AddFavourite} handleClickIcon={handleAddFavourite} />
      </div>
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading title="Favourites" />
      </div>
      <div className="row">
        <MovieList movies={favourites} MovieIcon={RemoveFavourite} handleClickIcon={handleRemoveFavourite} />
      </div>
    </div>
  );
}

export default App;

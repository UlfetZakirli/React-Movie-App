import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import "./App.css";
import MovieList from "./components/MovieList";
import MovieListHeading from './components/MovieListHeading';
import SearchBox from "./components/SearchBox";
import AddFavourite from './components/AddFavourite';
import RemoveFavourite from './components/RemoveFavourite';

function App() {
  const [movies, setMovies] = useState([])
  const [searchValue, setSearchValue] = useState("")
  const [favourites, setFavourites] = useState([])

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=ae26803d`
    const res = await fetch(url)
    const data = await res.json()
    setMovies(data.Search)
    console.log(data.Search);
  }

  useEffect(() => {
    getMovieRequest(searchValue)
  }, [searchValue])
  
  useEffect(()=>{
    let newFav=JSON.parse(localStorage.getItem('react-movie-fav-app'))
    setFavourites(newFav)
  },[])

 

  const saveToLocalStorage=(fav)=>{
    localStorage.setItem('react-movie-fav-app',JSON.stringify(fav))
  }

  const addToFavourites = (movie) => {
    const newFavourites = [ ...favourites,movie ]
    setFavourites(newFavourites)
    saveToLocalStorage(newFavourites)

  }
 

  const removeFromFavourites=(movie)=>{
    const newFavourites=favourites.filter((item)=>item.imdbID!==movie.imdbID)
    setFavourites(newFavourites)
    saveToLocalStorage(newFavourites)
  }

  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading="Movies" />
        <SearchBox setSearchValue={setSearchValue} />
      </div>
      <div className="row">
        <MovieList  myFavourites={addToFavourites} movies={movies} componentFavourites={AddFavourite} />
      </div>
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading="Favourites" />
      </div>
      <div className="row">
        <MovieList myFavourites={removeFromFavourites}  movies={favourites} componentFavourites={RemoveFavourite} />
      </div>
    </div>
  );
}

export default App;

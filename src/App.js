import {useEffect,useState} from "react";
import SearchIcon from "./search.svg";
import "./App.css";
import  MovieCard from "./Moviecard.jsx";


//627ea05c
const API_URL = `http://www.omdbapi.com/?i=tt3896198&apikey=627ea05c`;
const movie ={
  "Title": "Back to the Future",
    "Year": "1985",
      "imdbID": "tt0088763",
        "Type": "movie",
          "Poster": "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
}

 const App  = () => {
  const  [movies,setMovies] = useState([])
  const [searchTerm ,setSearchTerm]= useState("")
  const searchMovies = async (title) => {
   const response = await fetch(`${API_URL}&s=${title}`)
   const data = await response.json();
   setMovies(data.Search);
   }
   

    useEffect(() => {
     searchMovies('Back to the Future');
    },[]);
  return (
    <div className ="App">
    <center><h1>SeriesCrank</h1></center>
    <div className ="Search">
      <input 
         placeholder="Search for Movies" 
      value ={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} 
      />
      <img
      src={SearchIcon} 
      alt="Search"
      onClick={() => searchMovies(searchTerm  )}
      />
      
    </div>
    {
      movies?.length > 0
    ?(

    < div className="container">
      {movies.map((movie) => ( 
        <MovieCard movie={movie} />
      ))}
    </div>
    ) : (
      <div className="empty">
        <h2>No Movies Found</h2>
        </div>
    )

    }
    
  
    </div>
  
  
  )
  }

export default App;


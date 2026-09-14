// MOVIE API https://www.omdbapi.com/?i=tt3896198&apikey=891c5a4e
let movieList = [];
const movieListElement = document.querySelector(".movie__list");


async function movies(title){
  const moviesFetch = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=891c5a4e&s=${title}`);

  const moviesData = await moviesFetch.json();

  movieList = moviesData.Search;
  
  movieListElement.innerHTML = movieList.map((movie) =>{
    return `<div class="movie">
      <h4 class="Title">Title: ${movie.Title}</h3>
      <h4 class="Year">Year: ${movie.Year}</h4>
      <h4 class="imdbID">Imdb ID: ${movie.imdbID}</h4>
      <img src="${movie.Poster}" class="Poster">
    </div>
    `;
  }).join("");
}



function searchTitle() {
  const searchInput = document.querySelector("#searchInput");

  const title = searchInput.value;

  function titleHere(){
    const resultsFor = document.querySelector(".titleHere");

    resultsFor.innerHTML = title;
  }
  titleHere();
  movies(title);
}



function filterMovies(event){
  const sort = event.target.value;

  if(sort === "AZ"){
    movieList.sort((a, b) => a.Title.localeCompare(b.Title));
  }

  if(sort === "ZA"){
    movieList.sort((a, b) => b.Title.localeCompare(a.Title));
  }

  if(sort === "OldNew"){
    movieList.sort((a, b) => Number(a.Year) - Number(b.Year) );
  }

  if(sort === "NewOld"){
    movieList.sort((a, b) => Number(b.Year) - Number(a.Year));
  }

  movieListElement.innerHTML = movieList.map(movie =>{
    return `<div class="movie">
      <h4 class="Title">Title: ${movie.Title}</h3>
      <h4 class="Year">Year: ${movie.Year}</h4>
      <h4 class="imdbID">Imdb ID: ${movie.imdbID}</h4>
      <img src="${movie.Poster}" class="Poster">
    </div>
    `;
  }).join("");
}
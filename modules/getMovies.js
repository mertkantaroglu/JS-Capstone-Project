const getMovie = async () => {
  const response = await fetch('https://api.tvmaze.com/shows');
  const getMovie = await response.json();
  const listOfMovies = getMovie.slice(5, 13);
  return listOfMovies;
};

export default getMovie;

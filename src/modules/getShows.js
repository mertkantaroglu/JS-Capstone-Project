const getShows = async () => {
  const response = await fetch('https://api.tvmaze.com/shows');
  const getShows = await response.json();
  const listOfMovies = getShows.slice(0, 30);
  return listOfMovies;
};

export default getShows;

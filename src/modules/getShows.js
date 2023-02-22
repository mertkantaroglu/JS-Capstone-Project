const getShows = async () => {
  const response = await fetch('https://api.tvmaze.com/shows');
  const getShows = await response.json();
  const listOfShows = getShows.slice(0, 30);
  return listOfShows;
};

export default getShows;

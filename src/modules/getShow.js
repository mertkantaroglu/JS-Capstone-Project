import displayShow from "./displayShow.js";

const api = 'https://api.tvmaze.com/singlesearch/shows';

const getItems = async (url) => {
  const result = await fetch(url);
  const data = await result.json();
  return data;
};

export const getShow = async () => {
  await getItems(api)
    .then((data) => displayShow(data.results))
    .catch((err) => new Error(err));
};

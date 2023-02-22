import { ShowLikes } from './ShowLikes.js';

const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Z6mlbf0VYcyGDmGWWyyR/likes/';
const getAddedLikes = async () => {
  let likes = [];
  const response = await fetch(url);
  likes = await response.json();
  ShowLikes(likes);
};

export default getAddedLikes;

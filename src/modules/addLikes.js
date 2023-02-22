import { displayLikes } from './displayLikes.js';

// Get Likes
const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/rdCMW54T0sQtFphOfxh4/likes/';

export const getLikes = async () => {
  let likes = [];
  const response = await fetch(url);
  likes = await response.json();
  displayLikes(likes);
};

export const addLike = async (id) => {
  await fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  getLikes();
};
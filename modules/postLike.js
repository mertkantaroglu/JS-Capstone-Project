import getAddedLikes from './getLike.js';

const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Z6mlbf0VYcyGDmGWWyyR/likes/';

const addLike = async (id) => {
  await fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  getAddedLikes();
};

export default addLike;

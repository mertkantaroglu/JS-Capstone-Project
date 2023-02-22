// Display Likes
const displayLikes = async (likes) => {
  likes.forEach((like) => {
    const elementid = `show-${like.item_id}`;
    const displayLike = document.getElementById(elementid);
    if (displayLike !== null) {
      const likeNumbers = displayLike.querySelector('.like-numbers');
      likeNumbers.innerHTML = `${like.likes}`;
    }
  });
};

const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/rdCMW54T0sQtFphOfxh4/likes/';

// Get Likes
export const getLikes = async () => {
  let likes = [];
  const response = await fetch(url);
  likes = await response.json();
  displayLikes(likes);
};
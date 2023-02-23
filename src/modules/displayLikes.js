export async function displayLikes(likes) {
  // eslint-disable-next-line
  for (const like of likes) {
    const elementId = `show-${like.item_id}`;
    const displayLike = document.getElementById(elementId);
    if (displayLike) {
      const likeNumbers = displayLike.querySelector('.like-numbers');
      likeNumbers.textContent = like.likes.toString();
    }
  }
}

export const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/rdCMW54T0sQtFphOfxh4/likes/';
export const getLikes = async () => {
  let likes = [];
  const response = await fetch(url);
  likes = await response.json();
  displayLikes(likes);
};
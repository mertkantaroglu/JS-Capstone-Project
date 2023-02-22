import './index.css';
import displayShows from './modules/displayShows.js';
import getShows from './modules/getShows.js';
import commentPopup from './modules/commentPopup.js';
import getLikes from './modules/getLike.js';
import addLike from './modules/addLikes.js';

const showContainer = document.querySelector('.movie-section');
const popupContainer = document.querySelector('.popup-display');

const addEvents = () => {
  const likeIcon = document.querySelectorAll('.fa-heart');
  likeIcon.forEach((item) => {
    item.addEventListener('click', () => {
      addLike(item.dataset.id);
    });
  });
};

window.addEventListener('load', async () => {
  const shows = await getShows();
  displayShows(shows);
  addEvents();
  getLikes();

  document.addEventListener('click', async (e) => {
    const commentButton = e.target.closest('.comment-btn');
    const closeButton = e.target.closest('.close-icon');

    if (commentButton) {
      const selectedShow = shows.filter(
        (it) => it.id.toString() === commentButton.id.toString(),
      )[0];
      const {
        id, image, name, language, genres, rating, schedule,
      } = selectedShow;
      showContainer.style.display = 'none';
      popupContainer.style.display = 'flex';
      commentPopup(id, image, name, language, genres, rating, schedule);
    }

    if (closeButton) {
      popupContainer.style.display = 'none';
      showContainer.style.display = 'flex';
      addEvents();
      getLikes();
    }
  });
});

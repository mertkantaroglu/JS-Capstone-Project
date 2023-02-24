import './index.css';
// import { loadShows } from './modules/renderWindow.js';

// loadShows();

import displayShows from './modules/displayShows.js';
import getShows from './modules/getShows.js';
import commentPopup from './modules/commentPopup.js';
import { getLikes } from './modules/displayLikes.js';
import addLikes from './modules/addLikes.js';
import getShowCount from './modules/showCounter.js';

const showContainer = document.querySelector('.show-section');
const popupContainer = document.querySelector('.popup-display');

const addEvents = () => {
  const likeIcons = document.querySelectorAll('.fa-heart');
  likeIcons.forEach((likeIcon) => {
    likeIcon.addEventListener('click', () => {
      addLikes(likeIcon.dataset.id);
    });
  });
};

async function loadShows() {
  const shows = await getShows();
  displayShows(shows);
  addEvents();
  getLikes();

  const showLink = document.querySelector('.show');
  showLink.innerHTML = `Home (${getShowCount()})`;

  document.addEventListener('click', async (e) => {
    const commentButton = e.target.closest('.comment-btn');
    const closeButton = e.target.closest('.close-icon');

    if (commentButton) {
      // eslint-disable-next-line
      const selectedShow = shows.find((show) => show.id === parseInt(commentButton.id));
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
}

window.addEventListener('load', loadShows);

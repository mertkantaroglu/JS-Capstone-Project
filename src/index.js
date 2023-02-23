import './index.css';
import displayShows from './modules/displayShows.js';
import getShows from './modules/getShows.js';
import commentPopup from './modules/commentPopup.js';
import { getLikes } from './modules/displayLikes';
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

window.addEventListener('load', async () => {
  const shows = await getShows();
  displayShows(shows);
  addEvents();
  getLikes();

  const showLink = document.querySelector('.show');
  showLink.innerHTML = `Home (${getShowCount()})`;
  getShowCount();

  document.addEventListener('click', async (e) => {
    const commentButton = e.target.closest('.comment-btn');
    const closeButton = e.target.closest('.close-icon');

    if (commentButton) {
      const selectedShow = shows.find((show) => show.id === parseInt(commentButton.id));
      const {
        id, image, name, language, genres, rating, schedule,
      } = selectedShow;
      showContainer.classList.add('close');
      popupContainer.classList.add('flex');
      commentPopup(id, image, name, language, genres, rating, schedule);
    }    

    if (closeButton) {
      popupContainer.classList.add('close');
      popupContainer.classList.remove('flex');
      showContainer.classList.remove('close');
      showContainer.classList.add('flex');
      addEvents();
      getLikes();
    }
  });
});

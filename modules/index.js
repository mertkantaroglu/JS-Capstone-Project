import './style.css';
import getLike from './modules/getLike.js';
import postLike from './modules/postLike.js';
import homePage from './modules/homePage.js';
import getMovie from './modules/getMovies.js';
import renderPopup from './modules/renderPopup.js';

const showContainer = document.querySelector('.movie-section');
const popupContainer = document.querySelector('.popup-display');
const addEvents = () => {
  const likeIcon = document.querySelectorAll('.fa-heart');
  likeIcon.forEach((element) => {
    element.addEventListener('click', () => {
      postLike(element.dataset.id);
    });
  });
};

window.addEventListener('load', async () => {
  const shows = await getMovie();
  homePage(shows);
  addEvents();
  getLike();

  document.addEventListener('click', async (e) => {
    const button = e.target.closest('.comments-btn');
    const closeButton = e.target.closest('.close-icon');

    if (button) {
      const selectedShow = shows.filter(
        (it) => it.id.toString() === button.id.toString(),
      )[0];
      const {
        id, image, name, language, genres, rating, schedule,
      } = selectedShow;
      showContainer.style.display = 'none';
      popupContainer.style.display = 'flex';
      renderPopup(id, image, name, language, genres, rating, schedule);
    }

    if (closeButton) {
      popupContainer.style.display = 'none';
      showContainer.style.display = 'flex';
      // renderHomePage(shows);
      addEvents();
      getLike();
    }
  });
});

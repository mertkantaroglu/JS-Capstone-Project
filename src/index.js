import './index.css';
import homePage from './modules/homePage.js';
import getShows from './modules/getShows.js';
import commentPopup from './modules/commentPopup.js';

const showContainer = document.querySelector('.movie-section');
const popupContainer = document.querySelector('.popup-display');

window.addEventListener('load', async () => {
  const shows = await getShows();
  homePage(shows);

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
      commentPopup(id, image, name, language, genres, rating, schedule);
    }

    if (closeButton) {
      popupContainer.style.display = 'none';
      showContainer.style.display = 'flex';
    }
  });
});

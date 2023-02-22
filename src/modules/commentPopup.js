import { showComment, getComments } from './comments.js';

const popupContainer = document.querySelector('.popup-display');

const commentPopup = async (
  id, image, name, language, genres, rating, schedule,
) => {
  popupContainer.innerHTML = '';

  popupContainer.innerHTML += `
    <div class="show-${id} show-image-container">
      <div class="close-icon">X</div>
      <img src=${image.original} alt="" class="show-img" />
      <h2 class="show-popup-title">${name}</h2>
      </div>
    <div class="show-features">
    <h3 class="show-info">Show Info</h3>
      <p>Language: ${language}</p>
      <p>Genre: ${genres.join(',')}</p> 
      <p>Rating: ${rating.average}</p>
      <p>Schedule: ${schedule.time} on ${schedule.days}s</p>
      <div class="comments-container"></div
  `;

  const commentsContainer = document.querySelector('.show-features .comments-container');
  const comments = await getComments(id);

  showComment(comments, commentsContainer);
};

export default commentPopup;
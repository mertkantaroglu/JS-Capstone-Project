import { showComment, getComments, commentFormInput } from './comments.js';

const popupContainer = document.querySelector('.popup-display');

async function commentPopup(id, image, name, language, genres, rating, schedule) {
  popupContainer.innerHTML = `
    <div class="show-${id} show-image-container">
      <div class="close-icon">X</div>
      <img src="${image.original}" alt="" class="show-img" />
      <h2 class="show-popup-title">${name}</h2>
    </div>
    <div class="show-features">
      <h3 class="show-info">Show Info</h3>
      <p>Language: ${language}</p>
      <p>Genre: ${genres.join(', ')}</p>
      <p>Rating: ${rating.average}</p>
      <p>Schedule: ${schedule.time} on ${schedule.days}</p>
      <div class="comments-container"></div>
    </div>
  `;

  const commentsContainer = popupContainer.querySelector('.comments-container');
  const comments = await getComments(id);

  showComment(comments, commentsContainer);
  commentFormInput(id, commentsContainer);
}

export default commentPopup;

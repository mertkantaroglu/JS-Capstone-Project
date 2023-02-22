import {
  formComment, showComment, getAddedComments,
} from './comments.js';

const popupContainer = document.querySelector('.popup-display');

const renderPopup = async (
  id,
  image,
  name,
  language,
  genres,
  rating,
  schedule,
) => {
  popupContainer.innerHTML = '';

  popupContainer.innerHTML += `
   <div class="show-${id} movie-img-sect">
     <div class="close-icon">X</div>
     <img src=${image.original} alt="" class="movie-img" />
     <h2 class="movie-popup-title">${name}</h2>
     </div>
   <div class="movie-features">
   <h3 class="padd movie-info">Movie Info</h3>
     <p class="padd" >Language: ${language}</p>
     <p class="padd" >Genre: ${genres.join(',')}</p> 
     <p class="padd">Rating: ${rating.average}</p>
     <p class="padd" >Schedule: ${schedule.time} on ${schedule.days}s</p>
     <div class="comments-container"></div
 `;

  const commentsContainer = document.querySelector('.movie-features .comments-container');
  const comments = await getAddedComments(id);

  showComment(comments, commentsContainer);
  formComment(id, commentsContainer);
};

export default renderPopup;

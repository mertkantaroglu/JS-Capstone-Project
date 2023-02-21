const popupContainer = document.querySelector('.popup-display');

const commentPopup = async (
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
   <div class="show-${id} show-image-container">
     <div class="close-icon">X</div>
     <img src=${image.original} alt="" class="movie-img" />
     <h2 class="movie-popup-title">${name}</h2>
     </div>
   <div class="movie-features">
   <h3 class="movie-info">Movie Info</h3>
     <p>Language: ${language}</p>
     <p>Genre: ${genres.join(',')}</p> 
     <p>Rating: ${rating.average}</p>
     <p>Schedule: ${schedule.time} on ${schedule.days}s</p>
     <div class="comments-container"></div
 `;

  const commentsContainer = document.querySelector('.movie-features .comments-container');
};

export default commentPopup;

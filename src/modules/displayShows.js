const showContainer = document.querySelector('.show-section');

const displayShows = async (shows) => {
  showContainer.innerHTML = '';
  shows.forEach((show) => {
    showContainer.innerHTML += `
      <li id="show-${show.id}" class="single-movie">
        <img src=${show.image.medium} alt="movie-image" class="image-pic" />
        <div class="likes">
          <h4 class="movie-title">${show.name}</h4>
          <div class="heart">
            <i class="fa-sharp fa-regular fa-heart" data-id=${show.id}></i>            
            <p data-id = "${show.id}"> <span class="like-numbers"></span></p>
          </div>
        </div>
        <div class="description">
          <button class="comment-btn" id=${show.id}>Comments</button>
        </div>
      </li>
    `;
  });
};

export default displayShows;

const showContainer = document.querySelector('.show-section');

const displayShows = async (shows) => {
  showContainer.innerHTML = '';
  shows.forEach((item) => {
    showContainer.innerHTML += `
      <li id="show-${item.id}" class="single-movie">
        <img src=${item.image.medium} alt="movie-image" class="image-pic" />
        <div class="likes">
          <h4 class="movie-title">${item.name}</h4>
          <div class="heart">
            <i class="fa-sharp fa-regular fa-heart" data-id=${item.id}></i>            
            <p data-id = "${item.id}"> <span class="like-numbers"></span></p>
          </div>
        </div>
        <div class="description">
          <button class="comment-btn" id=${item.id}>Comments</button>
        </div>
      </li>
    `;
  });
};

export default displayShows;

const showContainer = document.querySelector('.movie-section');

const homePage = async (shows) => {
  showContainer.innerHTML = '';
  shows.forEach((item) => {
    showContainer.innerHTML += `
        <li id="show-${item.id}" class="single-movie">
        <img src=${item.image.medium} alt="movie-image" class="image-pic" />
        <h4 class="movie-title">${item.name}</h4>
        <div class="description">
          <div class="likes">
            <i class="fa-sharp fa-regular fa-heart" data-id=${item.id}></i>            
            <p data-id = "${item.id}"> <span class="like-count"></span></p>
          </div>
          <button class="comments-btn" id=${item.id}>Comments</button>
          </div>
      </li>
    `;
  });
};

export default homePage;

const showContainer = document.querySelector('.show-container');

const displayShow = (list) => {
  const showList = list
    .map(
      (show, index) => `<article class="card">
          <div class="show-image">
            <img src="${show.image.original}" alt="Card image" class="card__image" id="${index}"/>
          </div>
          <div class="show-info">
              <p>show</p>
            <div class="likes-container">
              <button type="submit" class="btn">
                <i class="fa-regular fa-heart"></i>
              </button>
              <h5 class="likes">0 likes</h5>
            </div>
          </div>
          <div class="comment-section">
            <button type="submit" class="btn-comment">Comments</button>
          </div>
        </article>`,
    ).join('');

  showContainer.innerHTML = showList;
};

export default displayShow;
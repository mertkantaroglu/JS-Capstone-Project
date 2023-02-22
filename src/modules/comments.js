const addComment = (id, name, text) => {
  if (name.value !== '' && text.value !== '') {
    addNewComment(id, name.value, text.value);
    name.value = '';
    text.value = '';
  }
};

export const commentFormInput = (newCommentId, commentInfo) => {
  const commentTitle = document.createElement('div');
  commentTitle.classList.add('form-container');
  commentTitle.innerHTML = '<h4> Add a Comment </h4>';
  const form = document.createElement('form');
  form.classList.add('form-content');
  form.innerHTML = `<input type="text" class="username" placeholder="Your name" required >
   <textarea class="text" name="text" id="" cols="20" rows="6" placeholder="Your Comment" required ></textarea>
   <button class="comment-btn" type="button">Comment</button>`;
  const commentButton = form.querySelector('.comment-btn');
  const userName = form.querySelector('.username');
  const text = form.querySelector('.text');
  commentButton.addEventListener('click', (event) => {
    event.preventDefault();
    addComment(newCommentId, userName, text);
  });
  commentTitle.appendChild(form);
  commentInfo.appendChild(commentTitle);
};

export const showComment = (data, commentInfo) => {
  commentInfo.innerHTML = '';
  const commentTitle = document.createElement('h4');
  // commentTitle.innerHTML = `Comments (${counter(data)})`;
  commentInfo.appendChild(commentTitle);
  const commentItem = document.createElement('div');
  commentItem.classList.add('comment-items');
  if (!data.error) {
    data.forEach((element) => {
      const item = document.createElement('p');
      item.innerHTML = `<span>${element.creation_date} ${element.username}: ${element.comment}</span>`;
      commentItem.appendChild(item);
    });
  }
  commentInfo.appendChild(commentItem);
};

const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/rdCMW54T0sQtFphOfxh4/comments?item_id=${}';

export const getComments = async (id) => {
  const request = new Request(url + id);
  const response = await fetch(request);
  const comment = await response.json();
  return comment;
};

const addNewComment = async (id, name, text) => {
  const url = '';
  const request = new Request(url);
  await fetch(request, {
    method: 'POST',
    body: JSON.stringify({ item_id: id, username: name, comment: text }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const array = await getComments(id);
  const dataCard = document.querySelector('.comments-container');

  showComment(array, dataCard);
};
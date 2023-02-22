const addComment = (id, name, msg) => {
  if (name.value !== '' && msg.value !== '') {
    // eslint-disable-next-line no-use-before-define
    addnewComent(id, name.value, msg.value);
    name.value = '';
    msg.value = '';
  }
};

const formComment = (newcommetId, node) => {
  const commentTitle = document.createElement('div');
  commentTitle.classList.add('form-container');
  commentTitle.innerHTML = '<h4> Add a Comment </h4>';
  const form = document.createElement('form');
  form.classList.add('form-content');
  form.innerHTML = `<input type="text" class="username" placeholder="Your name" required >
   <textarea class="msg" name="msg" id="" cols="20" rows="6" placeholder="Your Comment" required ></textarea>
   <button class="btncomment" type="button">Comment</button>`;
  const btncomment = form.querySelector('.btncomment');
  const username = form.querySelector('.username');
  const msg = form.querySelector('.msg');
  btncomment.addEventListener('click', (e) => {
    e.preventDefault();
    addComment(newcommetId, username, msg);
  });
  commentTitle.appendChild(form);
  node.appendChild(commentTitle);
};

// counter for number of comments for a single item
const counter = (comment) => {
  let counter = comment.length;
  if (comment.error) {
    counter = 0;
  }
  return counter;
};

// function to Display comments given for a single item
const showComment = (data, node) => {
  node.innerHTML = '';
  const head = document.createElement('h4');
  head.innerHTML = `Comments (${counter(data)})`;
  node.appendChild(head);
  const commentitem = document.createElement('div');
  commentitem.classList.add('comment-items');
  if (!data.error) {
    data.forEach((element) => {
      const item = document.createElement('p');
      item.innerHTML = `<span>${element.creation_date} ${element.username}: ${element.comment}</span>`;
      commentitem.appendChild(item);
    });
  }
  node.appendChild(commentitem);
};

// address for comments API
const link = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Z6mlbf0VYcyGDmGWWyyR/comments?item_id=';

// get number of comments from the given API
const getAddedComments = async (id) => {
  const request = new Request(link + id);
  const response = await fetch(request);
  const comment = await response.json();
  return comment;
  // console.log(comment);
};

const addnewComent = async (id, name, msg) => {
  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Z6mlbf0VYcyGDmGWWyyR/comments';
  const request = new Request(url);
  await fetch(request, {
    method: 'POST',
    body: JSON.stringify({ item_id: id, username: name, comment: msg }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const arr = await getAddedComments(id);
  const dataCard = document.querySelector('.comments-container');

  showComment(arr, dataCard);
};

module.exports = {
  counter, formComment, showComment, getAddedComments,
};
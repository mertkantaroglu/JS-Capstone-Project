export const showComment = (data, node) => {
  node.innerHTML = '';
  const commentTitle = document.createElement('h4');
  // commentTitle.innerHTML = `Comments (${counter(data)})`;
  node.appendChild(commentTitle);
  const commentItem = document.createElement('div');
  commentItem.classList.add('comment-items');
  if (!data.error) {
    data.forEach((element) => {
      const item = document.createElement('p');
      item.innerHTML = `<span>${element.creation_date} ${element.username}: ${element.comment}</span>`;
      commentItem.appendChild(item);
    });
  }
  node.appendChild(commentItem);
};

const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/rdCMW54T0sQtFphOfxh4/comments?item_id=${}';

export const getComments = async (id) => {
  const request = new Request(url + id);
  const response = await fetch(request);
  const comment = await response.json();
  return comment;
};
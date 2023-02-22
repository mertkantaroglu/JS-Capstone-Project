import { addnewComent } from './comments.js';

const newComment = (id, name, msg) => {
  if (name.value !== '' && msg.value !== '') {
    addnewComent(id, name.value, msg.value);
    name.value = '';
    msg.value = '';
  }
};

export default newComment;
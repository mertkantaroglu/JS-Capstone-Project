const getShowCount = () => {
  const getShowCount = document.querySelector('.main-section');
  const count = getShowCount.childElementCount;
  return count;
};

export default getShowCount;

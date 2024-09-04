const getRandomArrayElement = (items) =>
  items[Math.floor(Math.random() * items.length)];

const getRandomNumber = () => Math.floor(Math.random() * 100);

export {
  getRandomArrayElement,
  getRandomNumber,
};

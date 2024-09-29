const getRandomArrayElement = (items) =>
  items[Math.floor(Math.random() * items.length)];

const getRandomNumber = () => Math.floor(Math.random() * 100);

const updateItem = (items, update) => items.map((item) => item.id === update.id ? update : item);

export {
  getRandomArrayElement,
  getRandomNumber,
  updateItem,
};

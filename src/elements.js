const pageHeaderElement = document.querySelector('.page-header');
const pageMainElement = document.querySelector('.page-main');

const tripInfoContainer = pageHeaderElement.querySelector('.trip-main');
const filterListContainer = pageHeaderElement.querySelector('.trip-controls__filters');
const contentContainer = pageMainElement.querySelector('.trip-events');

export {
  tripInfoContainer,
  filterListContainer,
  contentContainer,
};

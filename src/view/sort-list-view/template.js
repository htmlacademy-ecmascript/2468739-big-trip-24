import { SORT_TYPES } from '../../constants';

function createSortItemTemplate() {
  return SORT_TYPES.map(
    (type) => `<div class="trip-sort__item  trip-sort__item--${type}">
        <input id="sort-${type}" class="trip-sort__input  visually-hidden" type="radio"
        name="trip-sort" value="sort-${type}"
        ${type === 'offer' || type === 'event' ? 'disabled' : ''}
        ${type === 'day' ? 'checked' : ''}>
        <label class="trip-sort__btn" for="sort-${type}">
          ${type === 'offer' ? 'offers' : type}
        </label>
      </div>`
  ).join('');
}

function createSortListTemplate() {
  return `<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
            ${createSortItemTemplate()}
          </form>`;
}

export {
  createSortListTemplate,
};

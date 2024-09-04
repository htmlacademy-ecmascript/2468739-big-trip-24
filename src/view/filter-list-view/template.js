import { FILTER_TYPES } from '../../constants';

function createFilterItemTemplate() {
  return FILTER_TYPES.map(
    (type) => `<div class="trip-filters__filter">
    <input id="filter-${type}" class="trip-filters__filter-input  visually-hidden"
      type="radio" name="trip-filter" value=${type} ${type === 'past' ? 'checked' : ''}>
    <label class="trip-filters__filter-label" for="filter-${type}">${type}</label>
  </div>`
  ).join('');
}

function createFilterListTemplate() {
  return `<form class="trip-filters" action="#" method="get">
            ${createFilterItemTemplate()}
            <button class="visually-hidden" type="submit">Accept filter</button>
          </form>`;
}

export {
  createFilterListTemplate,
};

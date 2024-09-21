function createFilterItemTemplate({type, count}) {
  return `<div class="trip-filters__filter">
    <input
      id="filter-${type}"
      class="trip-filters__filter-input  visually-hidden"
      type="radio"
      name="trip-filter"
      value=${type}
      ${type === 'past' ? 'checked' : ''}
      ${count === 0 ? 'disabled' : ''}
    >
    <label class="trip-filters__filter-label" for="filter-${type}">${type}</label>
  </div>`;
}

function createFilterListTemplate(filters) {
  return `<form class="trip-filters" action="#" method="get">
          ${filters.map((filter) => createFilterItemTemplate(filter)).join('')}
            <button class="visually-hidden" type="submit">Accept filter</button>
          </form>`;
}

export {
  createFilterListTemplate,
};

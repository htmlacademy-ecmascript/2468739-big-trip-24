import { SortType } from '../../constants';

function createSortItemTemplate(type, currentType) {
  return `<div class="trip-sort__item  trip-sort__item--${type}">
         <input id="sort-${type}"
                class="trip-sort__input
                visually-hidden"
                type="radio"
                name="trip-sort"
                value="sort-${type}"
                data-sort-type = ${type}
                ${type === SortType.OFFER || type === SortType.EVENT ? 'disabled' : ''}
                ${type === currentType ? 'checked' : ''}
          >
         <label class="trip-sort__btn" for="sort-${type}">
           ${type === SortType.OFFER ? 'offers' : type}
         </label>
       </div>`;
}

function createSortListTemplate(sorts, currentType) {
  return `<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
            ${sorts.map((type) => createSortItemTemplate(type, currentType)).join('')}
          </form>`;
}

export {
  createSortListTemplate,
};

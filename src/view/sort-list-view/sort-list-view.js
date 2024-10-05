import { SortType } from '../../constants';
import AbstractView from '../../framework/view/abstract-view';
import { createSortListTemplate } from './template';

export default class SortListView extends AbstractView {
  #sorts = [];

  #activeSortTypes = [
    SortType.DEFAULT,
    SortType.TIME,
    SortType.PRICE,
  ];

  #sorType = null;

  #handleSortClick = null;

  constructor({sorts, onSortClick, sortType}) {
    super();
    this.#sorts = sorts;
    this.#sorType = sortType;
    this.#handleSortClick = onSortClick;
    this.element.addEventListener('click', this.#sortClickHandler);
  }

  get template() {
    return createSortListTemplate(this.#sorts, this.#sorType);
  }

  #sortClickHandler = (evt) => {
    const type = evt.target.dataset.sortType;

    if (type === this.#sorType) {
      return;
    }

    if (!this.#activeSortTypes.includes(type)) {
      return;
    }

    evt.preventDefault();
    this.#handleSortClick(type);
  };
}

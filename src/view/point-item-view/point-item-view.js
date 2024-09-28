import AbstractView from '../../framework/view/abstract-view';
import { createPointItemTemplate } from './template';

export default class PointItemView extends AbstractView {
  #handleEditClick = null;
  #handleFavoriteClick = null;

  constructor({pointData, onEditClick, onFavoriteClick}) {
    super();
    this.pointData = pointData;
    this.#handleEditClick = onEditClick;
    this.#handleFavoriteClick = onFavoriteClick;
    this.element
      .querySelector('.event__rollup-btn')
      .addEventListener('click', this.#editClickHandler);
    this.element
      .querySelector('.event__favorite-btn')
      .addEventListener('click', this.#favoriteClickHandler);
  }

  #editClickHandler = (evt) => {
    evt.preventDefault();
    this.#handleEditClick();
  };

  #favoriteClickHandler = (evt) => {
    evt.preventDefault();
    this.#handleFavoriteClick();
  };

  get template() {
    return createPointItemTemplate({ pointData: this.pointData });
  }
}

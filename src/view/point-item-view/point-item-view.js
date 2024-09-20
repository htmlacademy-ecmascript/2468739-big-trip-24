import AbstractView from '../../framework/view/abstract-view';
import { createPointItemTemplate } from './template';

export default class PointItemView extends AbstractView {
  #handleEditClick = null;

  constructor({pointData, onEditClick}) {
    super();
    this.pointData = pointData;
    this.#handleEditClick = onEditClick;
    this.element
      .querySelector('.event__rollup-btn')
      .addEventListener('click', this.#editClickHandler);
  }

  #editClickHandler = (evt) => {
    evt.preventDefault();
    this.#handleEditClick();
  };

  get template() {
    return createPointItemTemplate({ pointData: this.pointData });
  }
}

import AbstractView from '../../framework/view/abstract-view';
import { createEditPointFormTemplate } from './template';

export default class EditPointFormView extends AbstractView {
  #handleFormSubmit = null;
  #handleCloseEditClick = null;

  constructor({pointData, onFormSubmit, onCloseEditClick}) {
    super();
    this.point = pointData;
    this.#handleFormSubmit = onFormSubmit;
    this.element
      .querySelector('.event__save-btn')
      .addEventListener('submit', this.#formSubmitHandler);
    this.#handleCloseEditClick = onCloseEditClick;
    this.element
      .querySelector('.event__rollup-btn')
      .addEventListener('click', this.#closeEditClickHandler);
  }

  get template() {
    return createEditPointFormTemplate({ pointData: this.point });
  }

  #formSubmitHandler = (evt) => {
    evt.preventDefault();
    this.#handleFormSubmit();
  };

  #closeEditClickHandler = (evt) => {
    evt.preventDefault();
    this.#handleCloseEditClick();
  };
}

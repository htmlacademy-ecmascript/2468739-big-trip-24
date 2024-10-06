import AbstractStatefulView from '../../framework/view/abstract-stateful-view';
import { createEditPointFormTemplate } from './template';

export default class EditPointFormView extends AbstractStatefulView {
  #handleFormSubmit = null;
  #handleCloseEditClick = null;
  #handlePointTypeClick = null;
  #handleDestinationChange = null;

  constructor(
    {
      pointData,
      onFormSubmit,
      onCloseEditClick,
      onPointTypeClick,
      onDestinationChange,
    }) {
    super();
    this._setState(EditPointFormView.parsePointToState(pointData));
    this.#handleFormSubmit = onFormSubmit;
    this.#handleCloseEditClick = onCloseEditClick;
    this.#handlePointTypeClick = onPointTypeClick;
    this.#handleDestinationChange = onDestinationChange;
    this._restoreHandlers();
  }

  get template() {
    return createEditPointFormTemplate({ state: this._state });
  }

  reset(pointData) {
    this.updateElement(EditPointFormView.parsePointToState(pointData));
  }

  _restoreHandlers() {
    this.element
      .querySelector('.event__save-btn')
      .addEventListener('submit', this.#formSubmitHandler);
    this.element
      .querySelector('.event__rollup-btn')
      .addEventListener('click', this.#closeEditClickHandler);
    this.element
      .querySelector('.event__type-group')
      .addEventListener('click', this.#pointTypeClickHandler);
    this.element
      .querySelector('.event__input--destination')
      .addEventListener('change', this.#destinationChangeHandler);
  }

  #formSubmitHandler = (evt) => {
    evt.preventDefault();
    this.#handleFormSubmit();
  };

  #closeEditClickHandler = (evt) => {
    evt.preventDefault();
    this.#handleCloseEditClick();
  };

  #pointTypeClickHandler = (evt) => {
    const trimType = evt.target.textContent.trim();
    if (trimType === this._state.type) {
      return;
    }

    evt.preventDefault();
    const offers = this.#handlePointTypeClick(trimType);
    this.updateElement({type:trimType, offers});
  };

  #destinationChangeHandler = (evt) => {
    const destinationName = evt.target.value;
    if (!destinationName || destinationName === this._state.destination) {
      return;
    }
    const destination = this.#handleDestinationChange(destinationName);
    this.updateElement({destination});
  };

  static parsePointToState(pointData) {
    return {...pointData};
  }

  static parseStateToPoint(state) {
    return {...state};
  }
}

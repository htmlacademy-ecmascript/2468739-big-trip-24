import AbstractStatefulView from '../../framework/view/abstract-stateful-view';
import { createEditPointFormTemplate } from './template';
import flatpickr from 'flatpickr';

import 'flatpickr/dist/flatpickr.min.css';

export default class EditPointFormView extends AbstractStatefulView {
  #handleFormSubmit = null;
  #handleCloseEditClick = null;
  #handlePointTypeClick = null;
  #handleDestinationChange = null;
  #startDatepicker = null;
  #endDatepicker = null;

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

  removeElement() {
    super.removeElement();

    if (this.#startDatepicker) {
      this.#startDatepicker.destroy();
      this.#startDatepicker = null;
    }

    if (this.#endDatepicker) {
      this.#endDatepicker.destroy();
      this.#endDatepicker = null;
    }
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

    this.#setDatepicker();
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

  #startDateChangeHandler = ([selectedDate]) => {
    this.updateElement({dateFrom: selectedDate});
  };

  #endDateChangeHandler = ([selectedDate]) => {
    this.updateElement({dateTo: selectedDate});
  };

  #setDatepicker() {
    this.#startDatepicker = flatpickr(
      this.element.querySelector('#event-start-time-1'),
      {
        dateFormat: 'j/m/y H:i',
        defaultDate: this._state.dateFrom,
        enableTime: true,
        maxDate: this._state.dateTo,
        onClose: this.#startDateChangeHandler,
      });

    this.#endDatepicker = flatpickr(
      this.element.querySelector('#event-end-time-1'),
      {
        dateFormat: 'j/m/y H:i',
        defaultDate: this._state.dateTo,
        enableTime: true,
        minDate: this._state.dateFrom,
        onClose: this.#endDateChangeHandler,
      });

  }

  static parsePointToState(pointData) {
    return {...pointData};
  }

  static parseStateToPoint(state) {
    return {...state};
  }
}

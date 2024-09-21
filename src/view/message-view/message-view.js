import AbstractView from '../../framework/view/abstract-view';

function createMessageTemplate(message) {
  return `<p class="trip-events__msg">${message}</p>`;
}

export default class FilterListView extends AbstractView {
  #message = null;

  constructor({message}) {
    super();
    this.#message = message;
  }

  get template() {
    return createMessageTemplate(this.#message);
  }
}

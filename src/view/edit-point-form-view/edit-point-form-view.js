import { createElement } from '../../render';
import { createEditPointFormTemplate } from './template';

export default class EditPointFormView {
  getTemplate() {
    return createEditPointFormTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}

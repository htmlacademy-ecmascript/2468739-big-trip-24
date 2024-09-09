import { createElement } from '../../render';
import { createEditPointFormTemplate } from './template';

export default class EditPointFormView {

  constructor({pointData}) {
    this.point = pointData;
  }

  getTemplate() {
    return createEditPointFormTemplate({ pointData: this.point });
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

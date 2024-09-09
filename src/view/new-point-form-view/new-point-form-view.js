import { createElement } from '../../render';
import { createNewPointFormTemplate } from './template';

export default class NewPointFormView {

  constructor({pointData}) {
    this.point = pointData;
  }

  getTemplate() {
    return createNewPointFormTemplate({ pointData: this.point });
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

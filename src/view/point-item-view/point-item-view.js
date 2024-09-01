import { createElement } from '../../render';
import { createPointItemTemplate } from './template';

export default class PointItemView {
  getTemplate() {
    return createPointItemTemplate();
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

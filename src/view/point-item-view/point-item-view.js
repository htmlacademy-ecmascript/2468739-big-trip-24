import { createElement } from '../../render';
import { createPointItemTemplate } from './template';

export default class PointItemView {

  constructor(pointData) {
    this.pointData = pointData;
  }

  getTemplate() {
    return createPointItemTemplate({ pointData: this.pointData });
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

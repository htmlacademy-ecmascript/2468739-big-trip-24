import AbstractView from '../../framework/view/abstract-view';
import { createPointItemTemplate } from './template';

export default class PointItemView extends AbstractView {

  constructor(pointData) {
    super();
    this.pointData = pointData;
  }

  get template() {
    return createPointItemTemplate({ pointData: this.pointData });
  }
}

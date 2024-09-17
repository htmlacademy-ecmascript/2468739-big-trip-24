import AbstractView from '../../framework/view/abstract-view';
import { createNewPointFormTemplate } from './template';

export default class NewPointFormView extends AbstractView {

  constructor({pointData}) {
    super();
    this.point = pointData;
  }

  get template() {
    return createNewPointFormTemplate({ pointData: this.point });
  }
}

import AbstractView from '../../framework/view/abstract-view';
import { createEditPointFormTemplate } from './template';

export default class EditPointFormView extends AbstractView {

  constructor({pointData}) {
    super();
    this.point = pointData;
  }

  get template() {
    return createEditPointFormTemplate({ pointData: this.point });
  }
}

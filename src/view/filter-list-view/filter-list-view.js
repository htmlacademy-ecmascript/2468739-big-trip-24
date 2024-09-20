import AbstractView from '../../framework/view/abstract-view';
import { createFilterListTemplate } from './template';
export default class FilterListView extends AbstractView {

  get template() {
    return createFilterListTemplate();
  }
}

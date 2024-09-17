import AbstractView from '../../framework/view/abstract-view';
import { createSortListTemplate } from './template';

export default class SortListView extends AbstractView {
  get template() {
    return createSortListTemplate();
  }
}

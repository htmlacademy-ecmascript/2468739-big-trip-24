import AbstractView from '../../framework/view/abstract-view';
import { generateFilter } from '../../mock/filters';
import { createFilterListTemplate } from './template';
export default class FilterListView extends AbstractView {
  #filters = null;

  constructor({points}) {
    super();
    this.#filters = generateFilter(points);
  }

  get template() {
    return createFilterListTemplate(this.#filters);
  }
}

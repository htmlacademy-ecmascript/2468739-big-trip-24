import AbstractView from '../../framework/view/abstract-view';
import { createTripInfoTemplate } from './template';

export default class TripInfoView extends AbstractView {
  get template() {
    return createTripInfoTemplate();
  }
}

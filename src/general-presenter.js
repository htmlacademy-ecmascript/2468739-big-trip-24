import { render, RenderPosition } from './render';
import TripInfoView from './view/trip-info-view';

export default class GeneralPresenter {

  constructor({pageHeaderContainer, pageMainContainer}) {
    this.pageHeaderContainer = pageHeaderContainer;
    this.pageMainContainer = pageMainContainer;
  }

  init() {
    const tripInfoContainer = this.pageHeaderContainer.querySelector('.trip-main');
    render(new TripInfoView(), tripInfoContainer, RenderPosition.AFTERBEGIN);
  }
}

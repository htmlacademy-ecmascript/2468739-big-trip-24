import { render, RenderPosition } from '../render';
import FilterListView from '../view/filter-list-view/filter-list-view';
import TripInfoView from '../view/trip-info-view/trip-info-view';
import SortListView from '../view/sort-list-view/sort-list-view';
import PointListView from '../view/point-list-view/point-list-view';
import PointItemView from '../view/point-item-view/point-item-view';
import MessageView from '../view/message-view/message-view';
import EditPointFormView from '../view/edit-point-form-view/edit-point-form-view';
import NewPointFormView from '../view/new-point-form-view/new-point-form-view';
import { getElementByProperty } from '../utils';

export default class GeneralPresenter {
  constructor({ pageHeaderContainer, pageMainContainer, generalModel }) {
    this.pageHeaderContainer = pageHeaderContainer;
    this.pageMainContainer = pageMainContainer;
    this.generalModel = generalModel;
  }

  init() {
    this.points = this.generalModel.getPoints();
    this.destinations = this.generalModel.getDestinations();
    this.offers = this.generalModel.getOffers();

    const tripInfoContainer =
      this.pageHeaderContainer.querySelector('.trip-main');
    const filterListContainer = this.pageHeaderContainer.querySelector(
      '.trip-controls__filters'
    );
    const contentContainer =
      this.pageMainContainer.querySelector('.trip-events');
    const pointListComponent = new PointListView();

    render(new TripInfoView(), tripInfoContainer, RenderPosition.AFTERBEGIN);
    render(new FilterListView(), filterListContainer, RenderPosition.BEFOREEND);
    render(new SortListView(), contentContainer, RenderPosition.BEFOREEND);
    render(pointListComponent, contentContainer, RenderPosition.BEFOREEND);
    render(
      new EditPointFormView(),
      pointListComponent.getElement(),
      RenderPosition.BEFOREEND
    );
    render(
      new NewPointFormView(),
      pointListComponent.getElement(),
      RenderPosition.BEFOREEND
    );
    for (let i = 0; i < 3; i++) {
      const destinationName = getElementByProperty(this.destinations, 'id' , this.points[i].destination).name;
      const allTypeOffers = getElementByProperty(this.offers, 'type', this.points[i].type).offers;
      const pointOffers = allTypeOffers.filter((offer) => this.points[i].offers.includes(offer.id));

      render(
        new PointItemView({ ...this.points[i], destination: destinationName, offers: pointOffers }),
        pointListComponent.getElement(),
        RenderPosition.BEFOREEND
      );
    }
    render(new MessageView(), contentContainer, RenderPosition.BEFOREEND);
  }
}

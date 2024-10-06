import { remove, render, RenderPosition } from '../framework/render';
import FilterListView from '../view/filter-list-view/filter-list-view';
import TripInfoView from '../view/trip-info-view/trip-info-view';
import SortListView from '../view/sort-list-view/sort-list-view';
import PointListView from '../view/point-list-view/point-list-view';
import MessageView from '../view/message-view/message-view';
import { MessageType, POINT_COUNT, SortType } from '../constants';
import PointPresenter from './point-presenter';
import { updateItem } from '../utils/common';
import { sortItems } from '../utils/sort';

export default class GeneralPresenter {
  #generalModel = null;

  #tripInfoContainer = null;
  #filterListContainer = null;
  #contentContainer = null;

  #pointListComponent = new PointListView();
  #sortListComponent = null;
  #tripInfoComponent = null;
  #filterListComponent = null;

  #points = [];
  #pointPresenters = new Map();

  #offers = [];
  #destinations = [];

  #sorts = [];

  constructor({
    tripInfoContainer,
    filterListContainer,
    contentContainer,
    generalModel
  }) {
    this.#generalModel = generalModel;
    this.#tripInfoContainer = tripInfoContainer;
    this.#filterListContainer = filterListContainer;
    this.#contentContainer = contentContainer;
  }

  init() {
    this.#points = [...this.#generalModel.points];
    this.#offers = [...this.#generalModel.offers];
    this.#destinations = [...this.#generalModel.destinations];
    this.#sortPoints(SortType.DEFAULT);
    this.#sorts = Object.values(SortType);

    this.#renderTripInfo();
    this.#renderFilter();
    this.#renderSort(this.#sorts, SortType.DEFAULT);

    if (!this.#points.length) {
      this.#renderMessage();
      return;
    }

    this.#renderPointList();
  }

  #sortPoints(type) {
    sortItems(type, this.#points);
  }

  #clearPointList() {
    this.#pointPresenters.forEach((presenter) => presenter.destroy());
    this.#pointPresenters.clear();
  }

  #destroySortList() {
    remove(this.#sortListComponent);
  }

  #renderPoint(pointData) {
    const pointPresenter = new PointPresenter(
      {
        pointContainer: this.#pointListComponent.element,
        onDataChange: this.#handlePointChange,
        onModeChange: this.#handleModeChange,
        onPointTypeChange: this.#handlePointTypeChange,
        onDestinationChange: this.#handleDestinationChange,
      }
    );

    this.#pointPresenters.set(pointData.id, pointPresenter);
    pointPresenter.init(pointData);
  }

  #renderPoints(from, to) {
    this.#points
      .slice(from, to)
      .forEach((point) => this.#renderPoint(point));
  }

  #renderPointList() {
    render(this.#pointListComponent, this.#contentContainer);
    this.#renderPoints(0, POINT_COUNT);
  }

  #renderTripInfo() {
    this.#tripInfoComponent = new TripInfoView();
    render(this.#tripInfoComponent, this.#tripInfoContainer, RenderPosition.AFTERBEGIN);
  }

  #renderFilter() {
    this.#filterListComponent = new FilterListView({points: this.#points});
    render(this.#filterListComponent, this.#filterListContainer);
  }

  #renderSort(sorts, sortType) {
    this.#sortListComponent = new SortListView({sorts, onSortClick: this.#handleSortClick, sortType});
    render(this.#sortListComponent, this.#contentContainer);
  }

  #renderMessage() {
    render(new MessageView({message: MessageType.NOT_POINT}), this.#contentContainer);
  }

  #handleSortClick = (type) => {
    this.#clearPointList();
    this.#destroySortList();
    this.#renderSort(this.#sorts, type);
    this.#sortPoints(type);
    this.#renderPointList();
  };

  #handleModeChange = () => {
    this.#pointPresenters.forEach((presenter) => presenter.resetView());
  };

  #handlePointChange = (updatedPoint) => {
    this.#points = updateItem(this.#points, updatedPoint);
    this.#pointPresenters.get(updatedPoint.id).init(updatedPoint);
  };

  #handlePointTypeChange = (selectedPointType) => this.#offers.find((offer) => offer.type === selectedPointType).offers;

  #handleDestinationChange = (selectedDestination) => this.#destinations
    .find((destination) => destination.name === selectedDestination);
}

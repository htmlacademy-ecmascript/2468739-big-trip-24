import { render, RenderPosition } from '../framework/render';
import FilterListView from '../view/filter-list-view/filter-list-view';
import TripInfoView from '../view/trip-info-view/trip-info-view';
import SortListView from '../view/sort-list-view/sort-list-view';
import PointListView from '../view/point-list-view/point-list-view';
import MessageView from '../view/message-view/message-view';
import { MessageType, POINT_COUNT } from '../constants';
import PointPresenter from './point-presenter';
import { updateItem } from '../utils/common';

export default class GeneralPresenter {
  #generalModel = null;

  #tripInfoContainer = null;
  #filterListContainer = null;
  #contentContainer = null;

  #pointListComponent = new PointListView();

  #points = [];
  #pointPresenters = new Map();

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

    this.#renderTripInfo();
    this.#renderFilter();
    this.#renderSort();

    if (!this.#points.length) {
      this.#renderMessage();
      return;
    }

    this.#renderPointList();
  }

  #handleModeChange = () => {
    this.#pointPresenters.forEach((presenter) => presenter.resetView());
  };

  #clearPointList() {
    this.#pointPresenters.forEach((presenter) => presenter.destroy());
    this.#pointPresenters.clear();
  }

  #renderPoint(pointData) {
    const pointPresenter = new PointPresenter(
      {
        pointContainer: this.#pointListComponent.element,
        onDataChange: this.#handlePointChange,
        onModeChange: this.#handleModeChange,
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
    render(new TripInfoView(), this.#tripInfoContainer, RenderPosition.AFTERBEGIN);
  }

  #renderFilter() {
    render(new FilterListView({points: this.#points}), this.#filterListContainer);
  }

  #renderSort() {
    render(new SortListView(), this.#contentContainer);
  }

  #renderMessage() {
    render(new MessageView({message: MessageType.NOT_POINT}), this.#contentContainer);
  }

  #handlePointChange = (updatedPoint) => {
    this.#points = updateItem(this.#points, updatedPoint);
    this.#pointPresenters.get(updatedPoint.id).init(updatedPoint);
  };
}

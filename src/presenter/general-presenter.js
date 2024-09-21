import { render, RenderPosition, replace } from '../framework/render';
import FilterListView from '../view/filter-list-view/filter-list-view';
import TripInfoView from '../view/trip-info-view/trip-info-view';
import SortListView from '../view/sort-list-view/sort-list-view';
import PointListView from '../view/point-list-view/point-list-view';
import PointItemView from '../view/point-item-view/point-item-view';
import MessageView from '../view/message-view/message-view';
import EditPointFormView from '../view/edit-point-form-view/edit-point-form-view';
import { getRandomArrayElement } from '../utils/common';

export default class GeneralPresenter {
  #pageHeaderContainer = null;
  #pageMainContainer = null;
  #generalModel = null;
  #tripInfoContainer = null;
  #filterListContainer = null;
  #contentContainer = null;

  #pointListComponent = new PointListView();

  constructor({ pageHeaderContainer, pageMainContainer, generalModel }) {
    this.#pageHeaderContainer = pageHeaderContainer;
    this.#pageMainContainer = pageMainContainer;
    this.#generalModel = generalModel;
    this.#tripInfoContainer =
      this.#pageHeaderContainer.querySelector('.trip-main');
    this.#filterListContainer = this.#pageHeaderContainer.querySelector(
      '.trip-controls__filters'
    );
    this.#contentContainer =
      this.#pageMainContainer.querySelector('.trip-events');
  }

  getRandomPoint() {
    return getRandomArrayElement(this.points);
  }

  #renderPoint(pointData) {
    const onDocumentKeydown = (evt) => {
      if (evt.key !== 'Escape') {
        return;
      }
      evt.preventDefault();
      replaceFormToPoint();
      document.removeEventListener('keydown', onDocumentKeydown);
    };

    const pointItemComponent = new PointItemView(
      {
        pointData,
        onEditClick: () => {
          replacePointToForm();
        },
      }
    );
    const editPointFormComponent = new EditPointFormView(
      {
        pointData,
        onFormSubmit: () => {
          replaceFormToPoint();
        },
        onCloseEditClick: () => {
          replaceFormToPoint();
          document.removeEventListener('keydown', onDocumentKeydown);
        },
      }
    );

    function replacePointToForm() {
      replace(editPointFormComponent, pointItemComponent);
      document.addEventListener('keydown', onDocumentKeydown);
    }

    function replaceFormToPoint() {
      replace(pointItemComponent, editPointFormComponent);
    }

    render(pointItemComponent, this.#pointListComponent.element);
  }

  init() {
    this.points = [...this.#generalModel.points];

    render(new TripInfoView(), this.#tripInfoContainer, RenderPosition.AFTERBEGIN);
    render(new FilterListView({points: this.points}), this.#filterListContainer);
    render(new SortListView(), this.#contentContainer);
    render(this.#pointListComponent, this.#contentContainer);

    for (let i = 0; i < 3; i++) {
      this.#renderPoint(this.points[i]);
    }
    render(new MessageView(), this.#contentContainer);
  }
}

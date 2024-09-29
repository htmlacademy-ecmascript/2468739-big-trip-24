import { PointMode } from '../constants';
import { remove, render, replace } from '../framework/render';
import EditPointFormView from '../view/edit-point-form-view/edit-point-form-view';
import PointItemView from '../view/point-item-view/point-item-view';

export default class PointPresenter {
  #pointData = null;

  #pointContainer = null;
  #handleDataChange = null;
  #handleModeChange = null;

  #pointItemComponent = null;
  #editPointFormComponent = null;

  #mode = PointMode.DEFAULT;

  constructor({pointContainer, onDataChange, onModeChange}) {
    this.#pointContainer = pointContainer;
    this.#handleDataChange = onDataChange;
    this.#handleModeChange = onModeChange;
  }

  init(pointData) {
    this.#pointData = pointData;

    const prevPointItemComponent = this.#pointItemComponent;
    const prevEditPointFormComponent = this.#editPointFormComponent;

    this.#pointItemComponent = new PointItemView(
      {
        pointData: this.#pointData,
        onEditClick: this.#handleEditClick,
        onFavoriteClick: this.#handleFavoriteClick,
      }
    );

    this.#editPointFormComponent = new EditPointFormView(
      {
        pointData: this.#pointData,
        onFormSubmit: this.#handleFormSubmit,
        onCloseEditClick: this.#handleEditClick,
      }
    );

    if (prevPointItemComponent === null || prevEditPointFormComponent === null) {
      render(this.#pointItemComponent, this.#pointContainer);
      return;
    }

    if (this.#mode === PointMode.DEFAULT) {
      replace(this.#pointItemComponent, prevPointItemComponent);
    }

    if (this.#mode === PointMode.EDIT) {
      replace(this.#editPointFormComponent, prevEditPointFormComponent);
    }

  }

  resetView() {
    if (this.#mode !== PointMode.DEFAULT) {
      this.#replaceFormToPoint();
    }
  }

  destroy() {
    remove(this.#pointItemComponent);
    remove(this.#editPointFormComponent);
  }

  #replacePointToForm() {
    replace(this.#editPointFormComponent, this.#pointItemComponent);
    document.addEventListener('keydown', this.#escKeyDownHandler);
    this.#handleModeChange();
    this.#mode = PointMode.EDIT;
  }

  #replaceFormToPoint() {
    replace(this.#pointItemComponent, this.#editPointFormComponent);
    this.#mode = PointMode.DEFAULT;
  }

  #handleFavoriteClick = () => {
    this.#handleDataChange({...this.#pointData, isFavorite: !this.#pointData.isFavorite});
  };

  #handleEditClick = () => {
    if (this.#mode === PointMode.DEFAULT) {
      this.#replacePointToForm();
      this.#mode = PointMode.EDIT;
      return;
    }

    this.#replaceFormToPoint();
    document.removeEventListener('keydown', this.#escKeyDownHandler);
    this.#mode = PointMode.DEFAULT;
  };

  #handleFormSubmit = () => {
    this.#replaceFormToPoint();
  };

  #escKeyDownHandler = (evt) => {
    if (evt.key !== 'Escape') {
      return;
    }
    evt.preventDefault();
    this.#replaceFormToPoint();
    document.removeEventListener('keydown', this.#escKeyDownHandler);
  };
}

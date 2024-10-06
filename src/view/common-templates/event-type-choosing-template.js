import { EVENT_TYPES } from '../../constants';

function createEventTypeChoosingItemTemplate(typeItem, checkedType) {
  return `<div class="event__type-item">
            <input id="event-ty${typeItem}-1" class="event__type-input  visually-hidden" type="radio"
                name="event-type" value="${typeItem}" ${typeItem === checkedType ? 'checked' : ''}>
            <label
              class="event__type-label  event__type-label--${typeItem}"
              for="event-type-${typeItem}-1"
            >
              ${typeItem}
            </label>
          </div>`;
}

function createEventTypeChoosingTemplate(checkedType) {
  return `<div class="event__type-wrapper">
            <label class="event__type  event__type-btn" for="event-type-toggle-1">
              <span class="visually-hidden">Choose event type</span>
              <img class="event__type-icon" width="17" height="17" src="img/icons/${checkedType}.png" alt="Event type icon">
            </label>
            <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

            <div class="event__type-list">
              <fieldset class="event__type-group">
                <legend class="visually-hidden">Event type</legend>
                ${EVENT_TYPES.map((typeItem) => createEventTypeChoosingItemTemplate(typeItem, checkedType)).join('')}
              </fieldset>
            </div>
          </div>`;
}

export {
  createEventTypeChoosingTemplate,
};

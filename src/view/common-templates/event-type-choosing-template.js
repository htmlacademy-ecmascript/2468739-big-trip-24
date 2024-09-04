import { EVENT_TYPES } from '../../constants';

function createEventTypeChoosingItemTemplate() {
  return EVENT_TYPES.map((type) => `<div class="event__type-item">
            <input id="event-ty${type}-1" class="event__type-input  visually-hidden" type="radio"
                name="event-type" value="${type}" ${type === 'flight' ? 'checked' : ''}>
            <label class="event__type-label  event__type-label--${type}" for="event-type-${type}-1">${type}</label>
          </div>`).join('');
}

function createEventTypeChoosingTemplate() {
  return `<div class="event__type-wrapper">
            <label class="event__type  event__type-btn" for="event-type-toggle-1">
              <span class="visually-hidden">Choose event type</span>
              <img class="event__type-icon" width="17" height="17" src="img/icons/flight.png" alt="Event type icon">
            </label>
            <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

            <div class="event__type-list">
              <fieldset class="event__type-group">
                <legend class="visually-hidden">Event type</legend>
                ${createEventTypeChoosingItemTemplate()}
              </fieldset>
            </div>
          </div>`;
}

export {
  createEventTypeChoosingTemplate,
};

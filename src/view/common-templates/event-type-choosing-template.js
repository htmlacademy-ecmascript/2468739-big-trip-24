import { EVENT_TYPES } from '../../constants';

function createEventTypeChoosingItemTemplate(type) {
  return EVENT_TYPES.map((typeItem) => `<div class="event__type-item">
            <input id="event-ty${typeItem}-1" class="event__type-input  visually-hidden" type="radio"
                name="event-type" value="${typeItem}" ${typeItem === type ? 'checked' : ''}>
            <label class="event__type-label  event__type-label--${typeItem}" for="event-type-${typeItem}-1">${typeItem}</label>
          </div>`).join('');
}

function createEventTypeChoosingTemplate(type) {
  return `<div class="event__type-wrapper">
            <label class="event__type  event__type-btn" for="event-type-toggle-1">
              <span class="visually-hidden">Choose event type</span>
              <img class="event__type-icon" width="17" height="17" src="img/icons/${type}.png" alt="Event type icon">
            </label>
            <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

            <div class="event__type-list">
              <fieldset class="event__type-group">
                <legend class="visually-hidden">Event type</legend>
                ${createEventTypeChoosingItemTemplate(type)}
              </fieldset>
            </div>
          </div>`;
}

export {
  createEventTypeChoosingTemplate,
};

import { DATE_FORMAT, DateTimeFormat, FAVORITE_CLASS_NAME, TIME_FORMAT } from '../../constants';
import { getDurationEvent, humanizeDate } from '../../utils';

function createEventDateTemplate(humanizedDate, humanizedEventDateTime) {
  return `<time class="event__date" datetime="${humanizedEventDateTime}">${humanizedDate}</time>`;
}

function createEventTypeTemplate(type, destination) {
  return `<div class="event__type">
            <img class="event__type-icon" width="42" height="42" src="img/icons/${type}.png"
              alt="Event type icon">
          </div>
          <h3 class="event__title">${type} ${destination}</h3>`;
}

function createEventSheduleTemplate(
  humanizedStartTime,
  humanizedEndTime,
  durationEvent
) {
  return `<div class="event__schedule">
            <p class="event__time">
              <time class="event__start-time" datetime="${DateTimeFormat.SHEDULE_EVENT}">${humanizedStartTime}</time>
                &mdash;
              <time class="event__end-time" datetime="${DateTimeFormat.SHEDULE_EVENT}">${humanizedEndTime}</time>
            </p>
            <p class="event__duration">${durationEvent}</p>
          </div>`;
}

function createEventPriceTemplate(basePrice) {
  return `<p class="event__price">
            &euro;&nbsp;<span class="event__price-value">${basePrice}</span>
          </p>`;
}

function createEventOfferTemplate({title, price}) {
  return `<li class="event__offer">
            <span class="event__offer-title">${title}</span>
              &plus;&euro;&nbsp;
            <span class="event__offer-price">${price}</span>
          </li>`;
}

function createEventOffersTemplate(offers) {
  return `<h4 class="visually-hidden">Offers:</h4>
          <ul class="event__selected-offers">
          ${offers.map(createEventOfferTemplate).join('')}
          </ul>`;
}

function createEventFavoriteButtonTemplate(isFavorite) {
  return `<button class="event__favorite-btn ${isFavorite ? FAVORITE_CLASS_NAME : ''}" type="button">
            <span class="visually-hidden">Add to favorite</span>
              <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
                <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
              </svg>
          </button>`;
}

function createEventRollupButtonTemplate() {
  return `<button class="event__rollup-btn" type="button">
            <span class="visually-hidden">Open event</span>
          </button>`;
}

function createPointItemTemplate({ pointData }) {
  const { basePrice, dateFrom, dateTo, type, destination, offers, isFavorite } = pointData;

  const humanizedDate = humanizeDate(dateFrom, DATE_FORMAT);
  const humanizedEventDateTime = humanizeDate(dateFrom, DateTimeFormat.EVENT);
  const humanizedStartTime = humanizeDate(dateFrom, TIME_FORMAT);
  const humanizedEndTime = humanizeDate(dateTo, TIME_FORMAT);
  const durationEvent = getDurationEvent(dateFrom, dateTo);

  return `<li class="trip-events__item">
            <div class="event">
              ${createEventDateTemplate(humanizedDate, humanizedEventDateTime)}
              ${createEventTypeTemplate(type, destination)}
              ${createEventSheduleTemplate(humanizedStartTime,humanizedEndTime,durationEvent)}
              ${createEventPriceTemplate(basePrice)}
              ${createEventOffersTemplate(offers)}
              ${createEventFavoriteButtonTemplate(isFavorite)}
              ${createEventRollupButtonTemplate()}
            </div>
          </li>`;
}

export { createPointItemTemplate };

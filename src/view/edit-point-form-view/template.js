import { createDestinationBlockTemplate } from '../common-templates/destination-block-template';
import { createDestinationChoosingTemplate } from '../common-templates/destination-choosing-template';
import { createEventPriceTemplate } from '../common-templates/event-price-template';
import { createEventTimeTemplate } from '../common-templates/event-time-template';
import { createEventTypeChoosingTemplate } from '../common-templates/event-type-choosing-template';
import { createOfferBlockTemplate } from '../common-templates/offer-block-template';

function createEditPointFormTemplate() {
  return `<form class="event event--edit" action="#" method="post">
            <header class="event__header">
              ${createEventTypeChoosingTemplate()}
              ${createDestinationChoosingTemplate()}
              ${createEventTimeTemplate()}
              ${createEventPriceTemplate()}

              <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
              <button class="event__reset-btn" type="reset">Delete</button>
              <button class="event__rollup-btn" type="button">
                <span class="visually-hidden">Open event</span>
              </button>
            </header>
            <section class="event__details">
              ${createOfferBlockTemplate()}
              ${createDestinationBlockTemplate()}
            </section>
          </form>`;
}

export {
  createEditPointFormTemplate,
};

function createOfferBlockTemplate(allOffers) {
  return allOffers.length !== 0 ? `<section class="event__section  event__section--offers">
            <h3 class="event__section-title  event__section-title--offers">Offers</h3>
            <div class="event__available-offers">
              ${allOffers.map(({title, price, checked}) => `<div class="event__offer-selector">
                <input class="event__offer-checkbox  visually-hidden"
                      id="event-offer-${title}"
                      type="checkbox"
                      name="event-offer-${title}"
                      ${checked ? 'checked' : ''}>
                <label class="event__offer-label" for="event-offer-${title}">
                  <span class="event__offer-title">${title}</span>
                  &plus;&euro;&nbsp;
                  <span class="event__offer-price">${price}</span>
                </label>
              </div>`).join('')}
          </section>` : '';
}

export {
  createOfferBlockTemplate,
};

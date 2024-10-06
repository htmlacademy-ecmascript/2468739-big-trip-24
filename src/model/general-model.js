import { POINT_COUNT } from '../constants';
import { getDestinations } from '../mock/destinations';
import { getOffers } from '../mock/offers';
import { getRandomPoint } from '../mock/points';

export default class GeneralModel{
  #offers = getOffers();
  #destinations = getDestinations();
  #points = Array.from({length: POINT_COUNT}, () => {
    const randomPoint = getRandomPoint();
    const pointDestination = this.#destinations.find((destination) => destination.id === randomPoint.destination);
    const pointAllOffers = this.#offers
      .find((offer) => offer.type === randomPoint.type).offers
      .map((offer) => {
        if (randomPoint.offers.includes(offer.id)) {
          return {...offer, checked: true};
        }
        return {...offer, checked: false};
      });

    return {...randomPoint, destination: pointDestination, offers: pointAllOffers};
  });

  get points() {
    return this.#points;
  }

  get offers() {
    return this.#offers;
  }

  get destinations() {
    return this.#destinations;
  }
}

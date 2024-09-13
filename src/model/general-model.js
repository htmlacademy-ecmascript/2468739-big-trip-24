import { POINT_COUNT } from '../constants';
import { getDestinations } from '../mock/destinations';
import { getOffers } from '../mock/offers';
import { getRandomPoint } from '../mock/points';

export default class GeneralModel{
  points = Array.from({length: POINT_COUNT}, getRandomPoint);
  destinations = getDestinations();
  offers = getOffers();

  getPoints() {
    return this.points;
  }

  getDestinations() {
    return this.destinations;
  }

  getOffers() {
    return this.offers;
  }
}

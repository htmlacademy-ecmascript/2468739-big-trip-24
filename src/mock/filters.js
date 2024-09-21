import { filter } from '../utils/filter';

const generateFilter = (points) => Object.entries(filter)
  .map(([filterType, getCount]) => ({
    type: filterType,
    count: getCount(points),
  }));

export {
  generateFilter,
};

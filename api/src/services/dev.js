import Dev from '../models/Dev';

const createDev = async dev => {
  const newDev = await Dev.create(dev);
  return newDev;
};

export default {
  createDev
};

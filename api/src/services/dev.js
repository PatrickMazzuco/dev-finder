import Dev from '../models/Dev';

exports.createDev = async dev => {
  const newDev = await Dev.create(dev);
  return newDev;
};

exports.findDev = async query => {
  const dev = await Dev.findOne(query);
  return dev;
};

exports.findDevs = async query => {
  const devs = await Dev.find(query);
  return devs;
};

exports.getAll = async () => {
  const devs = await Dev.find();
  return devs;
};

import devService from '../services/dev';
import parseStringAsArray from '../utils/parseStringAsArray';

exports.search = async (req, res) => {
  const { techs, latitude, longitude } = req.query;
  const techArray = parseStringAsArray(techs);

  try {
    const devs = await devService.findDevs({
      techs: {
        $in: techArray
      },
      location: {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: [longitude, latitude]
          },
          $maxDistance: 10000
        }
      }
    });
    return res.json({ devs });
  } catch (err) {
    return res.status(400).json({ message: 'Server error' });
  }
};

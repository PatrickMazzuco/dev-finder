import devService from '../services/dev';
import github from '../utils/githubAPI';

exports.createDev = async (req, res) => {
  const { githubUsername, techs, latitude, longitude } = req.body;

  if (!githubUsername) {
    return res.status(400).json({ message: 'Username required' });
  }

  const devExists = devService.findDev({ githubUsername });

  if (devExists) {
    return res.status(400).json({ message: 'User already registered' });
  }

  const apiResponse = await github.get(`/users/${githubUsername}`);
  const { name, avatar_url: avatarUrl, bio } = apiResponse.data;

  const techArray = techs.split(',').map(tech => tech.trim());

  const location = {
    type: 'Point',
    coordinates: [longitude, latitude]
  };

  const dev = {
    githubUsername,
    name,
    bio,
    avatarUrl,
    techs: techArray,
    location
  };

  try {
    const newDev = await devService.createDev(dev);
    return res.status(201).send(newDev);
  } catch (err) {
    console.error(err);
    return res.status(500).send({ message: 'Server Error' });
  }
};

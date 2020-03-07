import devService from '../services/dev';
import github from '../utils/githubAPI';

const createDev = async (req, res) => {
  const { githubUsername, techs } = req.body;

  if (!githubUsername) {
    return res.status(400).json({ message: 'Username required' });
  }

  const apiResponse = await github.get(`/users/${githubUsername}`);
  const { name, avatar_url: avatarUrl, bio } = apiResponse.data;

  const techArray = techs.split(',').map(tech => tech.trim());

  const dev = {
    githubUsername,
    name,
    bio,
    avatarUrl,
    techs: techArray
  };

  try {
    const newDev = await devService.createDev(dev);
    return res.status(201).send(newDev);
  } catch (err) {
    console.error(err);
    return res.status(500).send({ message: 'Server Error' });
  }
};

export default {
  createDev
};

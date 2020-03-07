import devService from '../services/dev';
import github from '../utils/githubAPI';

const createDev = async (req, res) => {
  const { githubUsername, techs } = req.body;

  const apiResponse = await github.get(`/users/${githubUsername}`);
  const { name = login, avatar_url: avatarUrl, bio } = apiResponse.data;

  const techArray = techs.split(',').map(tech => tech.trim());
  console.log(name, avatarUrl, bio, techArray);

  const dev = {
    githubUsername,
    name,
    bio,
    avatarUrl,
    techs
  };
};

export default {
  createDev
};

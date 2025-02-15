import React, { useState, useEffect } from 'react';

import './styles.css';

const DevForm = ({ onSubmit }) => {
  const [githubUsername, setGithubUsername] = useState('');
  const [techs, setTechs] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
      },
      err => {},
      {
        timeout: 30000
      }
    );
  });

  const handleSubmit = async e => {
    e.preventDefault();
    await onSubmit({
      githubUsername,
      techs,
      latitude,
      longitude
    });

    setGithubUsername('');
    setTechs('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-block">
        <label htmlFor="github_username">Github Username</label>
        <input
          name="github_username"
          id="github_username"
          required
          value={githubUsername}
          onChange={e => setGithubUsername(e.target.value)}
        />
      </div>

      <div className="input-block">
        <label htmlFor="techs">Technologies</label>
        <input
          name="techs"
          id="techs"
          required
          value={techs}
          onChange={e => setTechs(e.target.value)}
        />
      </div>

      <div className="input-group">
        <div className="input-block">
          <label htmlFor="latitude">Latitude</label>
          <input
            type="number"
            name="latitude"
            id="latitude"
            required
            value={latitude}
            onChange={e => setLatitude(e.target.value)}
          />
        </div>

        <div className="input-block">
          <label htmlFor="longitude">Longitude</label>
          <input
            type="number"
            name="longitude"
            id="longitude"
            required
            value={longitude}
            onChange={e => setLongitude(e.target.value)}
          />
        </div>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default DevForm;

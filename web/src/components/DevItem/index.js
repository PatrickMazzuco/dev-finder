import React from 'react';

import './styles.css';

const DevItem = ({ dev }) => {
  return (
    <li className="dev-item">
      <header>
        <img src={dev.avatarUrl} alt={dev.githubUsername} />
        <div className="user-info">
          <strong>{dev.name || dev.githubUsername}</strong>
          <span>{dev.techs.join(', ')}</span>
        </div>
      </header>
      <p>{dev.bio}</p>
      <a href={`https://github.com/${dev.githubUsername}`}>Github profile</a>
    </li>
  );
};

export default DevItem;

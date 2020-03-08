import React from 'react';
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

const App = () => {
  return (
    <div id="app">
      <aside>
        <strong>Sign Up</strong>
        <form action="">
          <div className="input-block">
            <label htmlFor="github_username">Github Username</label>
            <input name="github_username" id="github_username" />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Technologies</label>
            <input name="techs" id="techs" />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" />
            </div>
          </div>

          <button type="submit">Submit</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars2.githubusercontent.com/u/32601286?s=460&v=4"
                alt="PatrickMazzuco"
              />
              <div className="user-info">
                <strong>PatrickMazzuco</strong>
                <span>NodeJS, ReactJS</span>
              </div>
            </header>
            <p>Software Engineering student at PUCRS</p>
            <a href="https://github.com/PatrickMazzuco">Github profile</a>
          </li>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars2.githubusercontent.com/u/32601286?s=460&v=4"
                alt="PatrickMazzuco"
              />
              <div className="user-info">
                <strong>PatrickMazzuco</strong>
                <span>NodeJS, ReactJS</span>
              </div>
            </header>
            <p>Software Engineering student at PUCRS</p>
            <a href="https://github.com/PatrickMazzuco">Github profile</a>
          </li>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars2.githubusercontent.com/u/32601286?s=460&v=4"
                alt="PatrickMazzuco"
              />
              <div className="user-info">
                <strong>PatrickMazzuco</strong>
                <span>NodeJS, ReactJS</span>
              </div>
            </header>
            <p>Software Engineering student at PUCRS</p>
            <a href="https://github.com/PatrickMazzuco">Github profile</a>
          </li>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars2.githubusercontent.com/u/32601286?s=460&v=4"
                alt="PatrickMazzuco"
              />
              <div className="user-info">
                <strong>PatrickMazzuco</strong>
                <span>NodeJS, ReactJS</span>
              </div>
            </header>
            <p>Software Engineering student at PUCRS</p>
            <a href="https://github.com/PatrickMazzuco">Github profile</a>
          </li>
        </ul>
      </main>
    </div>
  );
};

export default App;

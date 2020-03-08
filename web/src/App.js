import React from 'react';
import './global.css';
import './App.css';
import './Sidebar.css';

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
      <main></main>
    </div>
  );
};

export default App;

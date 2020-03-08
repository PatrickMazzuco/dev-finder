import React, { useEffect, useState } from 'react';
import api from './services/api';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

import DevForm from './components/DevForm';
import DevItem from './components/DevItem';

const App = () => {
  const [devs, setDevs] = useState([]);

  const handleSubmit = async data => {
    const apiResponse = await api.post('/devs', data);

    setDevs([...devs, apiResponse.data]);
  };

  useEffect(() => {
    const loadDevs = async () => {
      const apiResponse = await api.get('/devs');
      setDevs(apiResponse.data);
    };
    loadDevs();
  }, []);

  return (
    <div id="app">
      <aside>
        <strong>Sign Up</strong>
        <DevForm onSubmit={handleSubmit} />
      </aside>
      <main>
        <ul>
          {devs.map(dev => (
            <DevItem key={dev.githubUsername} dev={dev} />
          ))}
        </ul>
      </main>
    </div>
  );
};

export default App;

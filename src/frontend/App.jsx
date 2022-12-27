import React from 'react';
import axios from 'axios';

import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import './App.css';

const App = () => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    axios.get('/api/todos').then(({ data: todos }) => console.log(todos));
  }, []);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount(count => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </div>
  );
};

export default App;

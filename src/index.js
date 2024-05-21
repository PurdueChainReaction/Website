import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './components/Main';
import { BrowserRouter as Router } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <React.StrictMode>
      <Main />
    </React.StrictMode>
  </Router>
);

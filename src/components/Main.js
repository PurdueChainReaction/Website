import React from 'react';
import { Routes, Route } from 'react-router-dom';

import App from './App';
import History from './History';

function Main() {
  return (
    <Routes>
      <Route exact path='/' element={<App />}></Route>
      <Route exact path='/history' element={<History />}></Route>
    </Routes>
  );
}

export default Main;
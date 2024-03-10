import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './pages/Menu';
import Counter from './pages/Counter';
import Lottery from './pages/Lottery';
import './font/WaukeganHustle-Regular.ttf';
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/lottery" element={<Lottery />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

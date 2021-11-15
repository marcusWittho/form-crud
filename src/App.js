import React from 'react';
import './styles/AppStyles.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Create from './components/Create';
import Read from './components/Read';
import Update from './components/Update';

function App() {
  return (
    <BrowserRouter>
      <div className="main">
        <Link to="/create" className="animaleft">
          <h2 className="main-header">
            React CRUD
          </h2>
        </Link>

        <Routes>
          <Route path="/create" element={ <Create /> } />
          <Route path="/read" element={ <Read /> } />
          <Route path="/update" element={ <Update /> } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

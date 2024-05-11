import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Appbar from './components/Appbar';
import User from './components/User';
import Login from './components/Login';
import Fonc from './components/fonc';
import Mang from './components/mang'; // Assurez-vous que cette importation pointe vers le bon composant

function App() {
  return (
    <Router>
      <div className="App">
        <Appbar />
        <br />
        <br />
        <Routes>
          <Route path="/" element={<User />} />
          <Route path="/login" element={<Login />} />
          <Route path="/fonc" element={<Fonc />} />
          <Route path="/mang" element={<Mang />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

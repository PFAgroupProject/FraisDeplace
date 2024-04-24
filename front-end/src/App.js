// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Appbar from './components/Appbar';
import User from './components/User';
import Login from './components/Login'; // Importation du composant Login

function App() {
    return (
        <Router>
            <div className="App">
                <Appbar/>
                <br />
                <br />
                <Routes>
                    <Route path="/" element={<User />} />
                    <Route path="/login" element={<Login />} /> {/* Utilisation du composant Login */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;

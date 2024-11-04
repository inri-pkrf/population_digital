import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import '../componentsCss/App.css';

import Home from "./Home";
import Intro from "./Intro";
import Header from "./Header";
import Menu from "./Menu"

function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path="/" element={<Intro/>} />
                <Route path="/home" element={<Home/>} />
                <Route path="/menu" element={<Menu/>} />
            </Routes>
        </div>
    );
}


function AppWrapper() {
    return (
        <Router>
            <App />
        </Router>
    );
}


export default AppWrapper;
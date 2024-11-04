import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Home from "./Home"
import Intro from "./Intro"
import Header from "./Header"

import '../componentsCss/App.css';

function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path="/" element={<Intro/>} />
                <Route path="/home" element={<Home/>} />
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
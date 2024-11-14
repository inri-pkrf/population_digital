import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import '../componentsCss/App.css';

import Home from "./Home";
import Intro from "./Intro";
import Header from "./Header";
import Menu from "./Menu"
import DiagramStep1 from "./DiagramStep1";
import DiagramStep2 from "./DiagramStep2";
import DiagramStep3 from "./DiagramStep3";
import Relations from "./Relations";
import Operation from "./Operation";
import Agamim from "./Agamim";


function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path="/" element={<Intro/>} />
                <Route path="/home" element={<Home/>} />
                <Route path="/menu" element={<Menu/>} />
                <Route path="/DiagramStep1" element={<DiagramStep1/>} />
                <Route path="/DiagramStep2" element={<DiagramStep2/>} />
                <Route path="/DiagramStep3" element={<DiagramStep3/>} />
                <Route path="/relations" element={<Relations/>} />
                <Route path="/operation" element={<Operation/>} />
                <Route path="/agamim" element={<Agamim/>} />
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
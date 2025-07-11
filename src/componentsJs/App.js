import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import '../componentsCss/App.css';

import Home from "./Home";
import Intro from "./Intro";
import Header from "./Header";
import Menu from "./Menu";
import Diagram from "./Diagram";
import DiagramStep1 from "./DiagramStep1";
import DiagramStep2 from "./DiagramStep2";
import DiagramStep3Nafa from "./DiagramStep3Nafa";
import DiagramStep3Mahoz from "./DiagramStep3Mahoz";
import MagnifyPic from "./MagnifyPic";
import Relations from "./Relations";
import OperationPart1 from "./OperationPart1";
import OperationPart2 from "./OperationPart2";
import Agamim from "./Agamim";


function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Intro />} />
                <Route path="/home" element={<Home />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/Diagram" element={<Diagram />} />
                <Route path="/DiagramStep1" element={<DiagramStep1 />} />
                <Route path="/DiagramStep2" element={<DiagramStep2 />} />
                <Route path="/DiagramStep3Nafa" element={<DiagramStep3Nafa />} />
                <Route path="/DiagramStep3Mahoz" element={<DiagramStep3Mahoz />} />
                <Route path="/MagnifyPic" element={<MagnifyPic />} />
                <Route path="/relations" element={<Relations />} />
                <Route path="/operationPart1" element={<OperationPart1 />} />
                <Route path="/operationPart2" element={<OperationPart2 />} />
                <Route path="/agamim" element={<Agamim />} />
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
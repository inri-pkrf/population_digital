import '../componentsCss/DiagramStep2.css';
import StepsBtnDiagram from "./StepsBtnDiagram";
import { useLocation } from 'react-router-dom';
import React from 'react';

import nafa from "../data/NafaData";
import mahoz from "../data/MahozData";

function DiagramStep3() {
    const location = useLocation();
    const { title, selectedOption } = location.state || {};

    // Choose the data based on the selectedOption
    const data = selectedOption === 'נפה' ? nafa : mahoz;
    const selectedItem = data.find(item => item.name === title);

    return (
        <div className="DiagramStep3">
            <StepsBtnDiagram currentStep={3} />
            <div className='title-DiagramStep3'>{title}</div>

            {selectedItem ? (
                <div className="content">
                    <img src={selectedItem.src} alt={selectedItem.name} className="item-image" />
                    <p className="explanation">{selectedItem.explanation}</p>
                    <div className="roles">
                        {selectedItem.roles.map(role => (
                            <div key={role.idRole} className="role">
                                <h3>{role.roleName}</h3>
                                <ul>
                                    {role.notes.map((note, index) => (
                                        <li key={index}>{note}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <p>No matching item found.</p>
            )}
        </div>
    );
}

export default DiagramStep3;

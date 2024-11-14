import '../componentsCss/DiagramStep3Mahoz.css';
import StepsBtnDiagram from "./StepsBtnDiagram";
import { useLocation } from 'react-router-dom';
import React from 'react';
import mahoz from "../data/MahozData";  

function DiagramStep3Mahoz() {
    const location = useLocation();
    const { title, selectedOption } = location.state || {};

    // Choose the data based on selectedOption
    const selectedItem = mahoz.find(item => item.name === title);  // Find the selected item in mahoz data

    return (
        <div className="DiagramStep3Mahoz">
            <StepsBtnDiagram currentStep={3} selectedOption={selectedOption} />

            <div className='title-DiagramStep3Mahoz'>
                {title}
            </div>

            <div className="roles-div-DiagramStep3Mahoz">
                {selectedItem.roles.map(role => (
                    <div key={role.idRole} className="role-DiagramStep3Mahoz">
                        {role.roleName}
                    </div>
                ))}
            </div>

            <img src={`${process.env.PUBLIC_URL}/assests/imgs/blackArrow.png`} className="blackArrow-DiagramStep3Mahoz" alt="blackArrow" />

            <img src={selectedItem.src} alt={selectedItem.name} className="item-image-DiagramStep3Mahoz" />

            <div className="explanation-title-DiagramStep3Mahoz">{selectedItem.titleExplanation}</div>
            <div className="explanation-text-DiagramStep3Mahoz">{selectedItem.textExplanation}</div>
        </div>
    );
}

export default DiagramStep3Mahoz;

import '../componentsCss/DiagramStep3Nafa.css';
import StepsBtnDiagram from "./StepsBtnDiagram";
import { useLocation } from 'react-router-dom';
import React from 'react';
import nafa from "../data/NafaData"; 

function DiagramStep3Nafa() {
    const location = useLocation();
    const { title, selectedOption } = location.state || {};  // Get title and selectedOption

    // Determine the appropriate data (using nafa here as selectedOption is 'נפה')
    const selectedItem = nafa.find(item => item.name === title);  // Find the selected item based on title

    return (
        <div className="DiagramStep3Nafa">
            <StepsBtnDiagram currentStep={3} selectedOption={selectedOption} />

            <div className='title-DiagramStep3Nafa'>
                {title}
            </div>

            <div className="roles-div-DiagramStep3Nafa">
                {selectedItem.roles.map(role => (
                    <div key={role.idRole} className="role-DiagramStep3Nafa">
                        {role.roleName}
                    </div>
                ))}
            </div>

            <img src={`${process.env.PUBLIC_URL}/assests/imgs/blackArrow.png`} className="blackArrow-DiagramStep3Nafa" alt="blackArrow" />

            <img src={selectedItem.src} alt={selectedItem.name} className="item-image-DiagramStep3Nafa" />

            <div className="explanation-title-DiagramStep3Nafa">{selectedItem.titleExplanation}</div>
            <div className="explanation-text-DiagramStep3Nafa">{selectedItem.textExplanation}</div>
        </div>
    );
}

export default DiagramStep3Nafa;

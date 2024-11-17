import React, { useState } from 'react';
import '../componentsCss/DiagramStep3Nafa.css';
import StepsBtnDiagram from "./StepsBtnDiagram";
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import PopUp from './PopUp';
import nafa from "../data/NafaData";

function DiagramStep3Nafa() {
    const location = useLocation();
    const navigate = useNavigate();
    const { title, selectedOption } = location.state || {};

    const selectedItem = nafa.find(item => item.name === title);

    const [isPopupVisible, setPopupVisible] = useState(false);
    const [popupContent, setPopupContent] = useState({ title: '', content: '' });

    const handleRoleClick = (roleName, notes) => {
        setPopupContent({
            title: roleName,
            content: notes,
        });
        setPopupVisible(true);
    };

    const handleClosePopup = () => {
        setPopupVisible(false);
    };

    return (
        <div className="DiagramStep3Nafa">
            <StepsBtnDiagram currentStep={3} selectedOption={selectedOption} />

            <div
                className='title-DiagramStep3Nafa'
                onClick={() => handleRoleClick(selectedItem.name, selectedItem.nameNote)}>
                {title}
            </div>

            <div className="roles-div-DiagramStep3Nafa">
                {selectedItem.roles.map(role => (
                    <div
                        key={role.idRole}
                        className="role-DiagramStep3Nafa"
                        onClick={() => handleRoleClick(role.roleName, role.notes)}
                    >
                        {role.roleName}
                    </div>
                ))}
            </div>

            <img src={`${process.env.PUBLIC_URL}/assests/imgs/blackArrow.png`} className="blackArrow-DiagramStep3Nafa" alt="blackArrow" />

            <img src={selectedItem.src} alt={selectedItem.name} className="item-image-DiagramStep3Nafa" />

            {selectedItem.explanation.map((explanation, index) => (
                <div key={index} className="explanation-div-DiagramStep3Nafa">
                    <div className="explanation-title-DiagramStep3Nafa">{explanation.titleExplanation}</div>
                    <div className="explanation-text-DiagramStep3Nafa">
                        {Array.isArray(explanation.textExplanation)
                            ? explanation.textExplanation.map((text, idx) => <div key={idx}>{text}</div>)
                            : explanation.textExplanation}
                    </div>
                </div>
            ))}

            <div className='step1Btn'  onClick={() => navigate('/DiagramStep1')}>חזרה לבחירת מפקדה</div>

            <div className='margin'></div>


            <PopUp
                isVisible={isPopupVisible}
                onClose={handleClosePopup}
                title={popupContent.title}
                content={popupContent.content}
            />
        </div>
    );
}

export default DiagramStep3Nafa;

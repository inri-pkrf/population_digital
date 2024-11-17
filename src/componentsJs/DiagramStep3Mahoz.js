import React, { useState } from 'react';
import '../componentsCss/DiagramStep3Mahoz.css';
import StepsBtnDiagram from "./StepsBtnDiagram";
import { useLocation, useNavigate } from 'react-router-dom';
import PopUp from './PopUp';
import mahoz from "../data/MahozData";

function DiagramStep3Mahoz() {
    const location = useLocation();
    const navigate = useNavigate();
    const { title, selectedOption } = location.state || {};

    const selectedItem = mahoz.find(item => item.name === title);

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
        <div className="DiagramStep3Mahoz">
            <StepsBtnDiagram currentStep={3} selectedOption={selectedOption} />

            <div
                className="title-DiagramStep3Mahoz"
                onClick={() => handleRoleClick(selectedItem.name, selectedItem.nameNote)}
            >
                {title}
            </div>

            <div className="roles-div-DiagramStep3Mahoz">
                {selectedItem.roles.map(role => (
                    <div
                        key={role.idRole}
                        className="role-DiagramStep3Mahoz"
                        onClick={() => handleRoleClick(role.roleName, role.notes)}
                    >
                        {role.roleName}
                    </div>
                ))}
            </div>

            <img
                src={`${process.env.PUBLIC_URL}/assests/imgs/blackArrow.png`}
                className="blackArrow-DiagramStep3Mahoz"
                alt="blackArrow"
            />

            <img
                src={selectedItem.src}
                alt={selectedItem.name}
                className="item-image-DiagramStep3Mahoz"
            />

            {/* {selectedItem.explanation.map((explanation, index) => (
                <div key={index} className="explanation-div-DiagramStep3Mahoz">
                    <div className="explanation-title-DiagramStep3Mahoz">{explanation.titleExplanation}</div>
                    <div className="explanation-text-DiagramStep3Mahoz">
                        {Array.isArray(explanation.textExplanation)
                            ? explanation.textExplanation.map((text, idx) => <div key={idx}>{text}</div>)
                            : explanation.textExplanation}
                    </div>
                </div>
            ))} */}

            <div className='step1Btn' onClick={() => navigate('/DiagramStep1')}>
                חזרה לבחירת מפקדה
            </div>

            <div className="margin"></div>

            <PopUp
                isVisible={isPopupVisible}
                onClose={handleClosePopup}
                title={popupContent.title}
                content={popupContent.content}
            />
        </div>
    );
}

export default DiagramStep3Mahoz;

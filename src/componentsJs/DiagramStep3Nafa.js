import React, { useState, useEffect } from 'react';
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
    const [expandedExplanation, setExpandedExplanation] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleRoleClick = (roleName, notes, imgSrc) => {
        setPopupContent({
            title: roleName,
            content: notes,
            imgSrc: imgSrc
        });
        setPopupVisible(true);
    };

    const handleClosePopup = () => {
        setPopupVisible(false);
    };

    const handleToggleExplanation = (index) => {
        setExpandedExplanation(expandedExplanation === index ? null : index);
    };

    const handleImageClick = () => {
        navigate('/MagnifyPic', { state: { imagePath: selectedItem.src } });
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
                        onClick={title === "מ' תא רשויות" ? () => handleRoleClick(role.roleName, role.notes, role.imgSrc) : () => handleRoleClick(role.roleName, role.notes)}
                        >
                        {role.roleName}
                    </div>
                ))}
            </div>

            <img src={`${process.env.PUBLIC_URL}/assests/imgs/blackArrow.png`} className="blackArrow-DiagramStep3Nafa" alt="Next arrow" />

            <img
                src={selectedItem.src}
                className="item-image-DiagramStep3Nafa"
                alt={selectedItem.name}
                onClick={handleImageClick}
            />
            <div className='text-img-nafa'>אפשר להגדיל בלחיצה</div>


            {selectedItem.explanation.map((explanation, index) => (
                <div key={index} className="explanation-div-DiagramStep3Nafa">
                    <div
                        className="explanation-title-wrapper-DiagramStep3Nafa"
                        onClick={() => handleToggleExplanation(index)} // לחיצה על הכותרת והחץ
                    >
                        <div className="explanation-title-DiagramStep3Nafa">
                            {explanation.titleExplanation}
                        </div>
                        <img
                            src={`${process.env.PUBLIC_URL}/assests/imgs/nextBlack.png`}
                            className={`arrow-icon ${expandedExplanation === index ? 'rotated' : ''}`}
                            alt="Arrow"
                        />
                    </div>
                    {expandedExplanation === index && ( // מציג את התוכן רק אם הכותרת נפתחה
                        <div className="explanation-text-DiagramStep3Nafa">
                            {Array.isArray(explanation.textExplanation)
                                ? explanation.textExplanation.map((text, idx) => <div key={idx}>{text}</div>)
                                : explanation.textExplanation}
                        </div>
                    )}
                </div>
            ))}

            <div className='step1Btn' onClick={() => navigate('/DiagramStep1')}>חזרה לבחירת מפקדה</div>

            <div className='margin'></div>

            <PopUp
                isVisible={isPopupVisible}
                onClose={handleClosePopup}
                title={popupContent.title}
                content={popupContent.content}
                imgSrc={popupContent.imgSrc} 
            />
        </div>
    );
}

export default DiagramStep3Nafa;

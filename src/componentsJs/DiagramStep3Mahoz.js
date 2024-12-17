import React, { useState, useEffect } from 'react';
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
    const [expandedExplanation, setExpandedExplanation] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleRoleClick = (roleName, notes, imgSrc) => {
        setPopupContent({
            title: roleName,
            content: notes,
            imgSrc: imgSrc,
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
        <div className="DiagramStep3Mahoz">
            <StepsBtnDiagram currentStep={3} selectedOption={selectedOption} />

            {selectedItem.explanation.map((explanation, index) => (
                <div key={index} className="explanation-div-DiagramStep3Mahoz">
                    <div
                        className="explanation-title-wrapper-DiagramStep3Mahoz"
                        onClick={() => handleToggleExplanation(index)}
                    >
                        <div className="explanation-title-DiagramStep3Mahoz">
                            {explanation.titleExplanation}
                        </div>
                        <img
                            src={`${process.env.PUBLIC_URL}/assests/imgs/nextBlack.png`}
                            className={`arrow-icon ${expandedExplanation === index ? 'rotated' : ''}`}
                            alt="Arrow"
                        />
                    </div>
                    {expandedExplanation === index && (
                        <div className="explanation-text-DiagramStep3Mahoz">
                            {Array.isArray(explanation.textExplanation)
                                ? explanation.textExplanation.map((text, idx) => <div key={idx}>{text}</div>)
                                : explanation.textExplanation}
                        </div>
                    )}
                </div>
            ))}

            <div
                className='title-DiagramStep3Mahoz'>
                {title}
            </div>
            {/* {title === "מכלול רצ''ת" && (
                <img
                    src={`${process.env.PUBLIC_URL}/assests/imgs/left-arrow.png`}
                    className='arrow-DiagramStep3Mahoz-title'
                    alt="Arrow"
                />
            )} */}

            <div className="roles-div-DiagramStep3Mahoz">
                {selectedItem.roles.map(role => (
                    <div key={role.idRole} className="role-DiagramStep3Mahoz">
                        <div
                            onClick={
                                title === "מכלול רצ''ת"
                                    ? () => handleRoleClick(role.roleName, role.notes, role.imgSrc)
                                    : undefined
                            }
                        >
                            {role.roleName}
                        </div>
                        {title === "מכלול רצ''ת" && (
                            <img
                                src={`${process.env.PUBLIC_URL}/assests/imgs/left-arrow.png`}
                                className='arrow-DiagramStep3Mahoz-role'
                                alt="Arrow"
                            />
                        )}
                    </div>
                ))}
            </div>


            <img
                src={`${process.env.PUBLIC_URL}/assests/imgs/blackArrow.png`}
                className="blackArrow1-DiagramStep3Mahoz"
                alt="blackArrow"
            />

            <img
                src={`${process.env.PUBLIC_URL}/assests/imgs/blackArrow.png`}
                className="blackArrow2-DiagramStep3Mahoz"
                alt="blackArrow"
            />

            <img
                src={selectedItem.src}
                className="item-image-DiagramStep3Mahoz"
                alt={selectedItem.name}
                onClick={handleImageClick}
            />
            <div className='text-img-mahoz'>אפשר להגדיל את עץ המבנה בלחיצה</div>
            <img
                src={`${process.env.PUBLIC_URL}/assests/imgs/glass.png`}
                className="glass-mahoz"
                alt="glass"
            />


            <div className="margin"></div>

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

export default DiagramStep3Mahoz;

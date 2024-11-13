import React, { useState } from 'react';
import '../componentsCss/DiagramStep2.css';
import StepsBtnDiagram from "./StepsBtnDiagram";
import { useLocation } from 'react-router-dom';

function DiagramStep2() {
    const location = useLocation();
    const selectedOption = location.state?.selectedOption || '';

    const imagePath = selectedOption === 'נפה'
        ? `${process.env.PUBLIC_URL}/assests/imgs/nafa/step2Img.svg`
        : `${process.env.PUBLIC_URL}/assests/imgs/mahoz/step2Img.svg`;

    const color = selectedOption === 'נפה' ? '#1cb4e3' : '#ff9900';

    const [isMagnified, setIsMagnified] = useState(false);

    const magnifyPic = () => {
        setIsMagnified(!isMagnified);
    };

    const arrMahoz = {
        strings: [
            'מפקד מרכז אוכלוסייה', "ס' מ' מרכז אכלוסייה", "מ' מכלול הנדסה", "מ' מכלול חומ''ס ",
            "מ' מכלול הסברה", "מ' מכלול התנהגות", "מ' מכלול רצ''ת", "מ' מכלול אוכלוסייה"
        ],
        
        colors: ["#ff9900", "#e69138", "#fbbc6d"]
    };
    
    const arrNafa = {
        strings: [
            'מפקד מכלול אוכלוסייה', "ס' מ' מכלול אוכלוסייה", "מ' תא הנדסה", "מ' תא חומ''ס",
            "מ' תא הסברה", "מ' תא התנהגות", "מ' תא רשויות", "מ' תא מבצעים"
        ],
        colors: ["#053859", "#3d7ca5", "#1cb4e3"]

    };

    const selectedData = selectedOption === 'נפה' ? arrNafa : arrMahoz;
    const [firstColor, secondColor, restColor] = selectedData.colors;

    return (
        <div className="DiagramStep2">
            <StepsBtnDiagram currentStep={2} />
            <div className='title-DiagramStep2'>
                מבנה ייעוד ותפקידי
                <br />
                מכלול האוכלוסייה
                <span style={{ color }}> ב{selectedOption}</span>
            </div>

            <div className='subText-step2'>
                לפניכם עץ מבנה למפקדה ב{selectedOption === 'נפה' ? 'נפה' : 'מחוז'}.
                בהמשך הדף יש לבחור את המכלולים לקבלת פירוט הגדרות ומשימות התפקיד -
            </div>

            <img
                src={imagePath}
                className={`stpe2Img ${isMagnified ? 'magnified' : ''}`}
                alt="stpe2Img"
                onClick={magnifyPic}
            />
            <div className={`shadow ${isMagnified ? 'shadow-active' : ''}`}></div>
            <div className='text-img'>אפשר להגדיל בלחיצה</div>

            <img src={`${process.env.PUBLIC_URL}/assests/imgs/blackArrow.png`} className="blackArrow-step2" alt="blackArrow" />

            <div className='all-diagram'>
                <div className="line"></div>
                <div className="small-line"></div>

                <div className='first-frame' style={{ backgroundColor: firstColor }}>
                    {selectedData.strings[0]}
                </div>

                <div className='second-frame' style={{ backgroundColor: secondColor }}>
                    {selectedData.strings[1]}
                </div>

                {selectedData.strings.slice(2).map((text, index) => (
                    <div 
                        key={index} 
                        className='frame' 
                        style={{ backgroundColor: restColor }}
                    >
                        {text}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DiagramStep2;

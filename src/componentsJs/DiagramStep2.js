import React from 'react';
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


    return (

        <div className="DiagramStep2" >
            <StepsBtnDiagram currentStep={2} />
            <div className='title-DiagramStep2'>
                מבנה ייעוד ותפקידי
                <br />
                מכלול האוכלוסייה
                <span style={{ color }}> ב{selectedOption}</span>
            </div>

            <div className='subText-step2'>
                לפניכם עץ מבנה למפקדה בנפה.
                בהמשך הדף יש לבחור את המכלולים לקבלת פירוט הגדרות ומשימות התפקיד -
            </div>

            <img
                src={imagePath}
                className="stpe2Img"
                alt="stpe2Img"
            />
            <div className='text-img'>אפשר להגדיל בלחיצה</div>

            <img src={process.env.PUBLIC_URL + '/assests/imgs/blackArrow.png'} className="blackArrow" alt="blackArrow"></img>


        </div>
    );
}

export default DiagramStep2;

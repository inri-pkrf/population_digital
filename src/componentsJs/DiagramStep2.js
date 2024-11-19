import React, { useState } from 'react';
import '../componentsCss/DiagramStep2.css';
import StepsBtnDiagram from "./StepsBtnDiagram";
import { useLocation, useNavigate } from 'react-router-dom';
import PopUp from './PopUp';

function DiagramStep2() {
    const [isPopupVisible, setPopupVisible] = useState(false);
    const [popupContent, setPopupContent] = useState({ title: '', content: '' });

    const handleBoxClick = (title, content) => {
        setPopupContent({ title, content });
        setPopupVisible(true);
    };

    const closePopup = () => {
        setPopupVisible(false);
    };

    const location = useLocation();
    const navigate = useNavigate();
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

    const frameContent = (
        <>
            1. פיקוד ושליטה על מכלול האוכלוסייה.<br /><br />
            2. גיבוש תמונת מצב וביצוע הערכת מצב אוכלוסייה.<br /><br />
            3. איתור מגמות מרכזיות במרחב האזרחי, ולאורן (וכמובן לאור צי"חי מפקד הנפה) - הגדרת צי"חי עבודה למכלול.<br /><br />
            4. אישור המלצות התאים במכלול באשר לפעולות הנדרשות לצורך מענה לאתגרים במרחב האזרחי:<br /><br />
            א. תכנית מענה לדרישות ומיצוי יכולות המרחב
            <br />
            ב. תכנית מענה לרשות מתקשה
            <br />
            ג. תכנית מענה לרשות במשבר אנרגיה
            <br />
            ד. תכנית מענה למפונים- מתפנים
            <br />
            ה. תכנית לתמיכה בחוסן
            <br />
            ו. דרישה מבצעית לתכנית הסברה
            <br />
            ז. תכנית לשיפור המענה המיגוני
            <br /><br />
            5. הכנת הפורומים הנפתיים - מדיניות התגוננות ומיצוי יכולות המרחב.
        </>
    );

    const handleFirstFrameClick = () => {
        const title = selectedOption === 'נפה' ? 'מפקד המכלול/סגן' : 'מפקד המרכז / סגן';
        handleBoxClick(title, frameContent);
    };

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

                <div
                    className='first-frame'
                    style={{ backgroundColor: firstColor }}
                    onClick={handleFirstFrameClick}
                >
                    {selectedData.strings[0]}
                </div>

                <div
                    className='second-frame'
                    style={{ backgroundColor: secondColor }}
                    onClick={handleFirstFrameClick}
                >
                    {selectedData.strings[1]}
                </div>

                {selectedData.strings.slice(2).map((text, index) => (
                    <div
                        key={index}
                        className='frame'
                        style={{ backgroundColor: restColor }}
                        onClick={() => {
                            const targetComponent = selectedOption === 'נפה' ? '/DiagramStep3Nafa' : '/DiagramStep3Mahoz';
                            navigate(targetComponent, { state: { title: text, selectedOption } });
                        }}
                    >
                        {text}
                    </div>
                ))}
            </div>

            <PopUp
                isVisible={isPopupVisible}
                onClose={closePopup}
                title={popupContent.title}
                content={popupContent.content}
            />
        </div>
    );
}

export default DiagramStep2;
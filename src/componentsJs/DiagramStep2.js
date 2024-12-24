import React, { useState } from 'react';
import '../componentsCss/DiagramStep2.css';
import StepsBtnDiagram from "./StepsBtnDiagram";
import { useLocation, useNavigate } from 'react-router-dom';
import PopUp from './PopUp';


function DiagramStep2() {
    const [isPopupVisible, setPopupVisible] = useState(false);
    const [popupContent, setPopupContent] = useState({ title: '', content: '' });
    const [expandedExplanation, setExpandedExplanation] = useState(null);




    const handleBoxClick = (title, content) => {
        setPopupContent({ title, content });
        setPopupVisible(true);
    };


    const closePopup = () => {
        setPopupVisible(false);
    };


    const handleImageClick = () => {
        navigate('/MagnifyPic', { state: { imagePath } });
    };


    const location = useLocation();
    const navigate = useNavigate();
    const selectedOption = location.state?.selectedOption || '';


    const imagePath = selectedOption === 'נפה'
        ? `${process.env.PUBLIC_URL}/assests/imgs/nafa/step2Img.svg`
        : `${process.env.PUBLIC_URL}/assests/imgs/mahoz/step2Img.svg`;


    const color = selectedOption === 'נפה' ? '#1cb4e3' : '#ff9900';


    const arrMahoz = {
        strings: [
            'מפקד מרכז אוכלוסייה',
            "סגן מפקד מרכז אכלוסייה",
            "אג''ם אוכלוסייה",
            "מכלול רצ''ת",
            "מכלול התנהגות",
            "מכלול הסברה",
            "מכלול חומ''ס",
            "מכלול הנדסה"
        ],
        colors: ["#ff9900", "#e69138", "#fbbc6d"]
    };


    const arrNafa = {
        strings: [
            'מפקד מכלול אוכלוסייה',
            "סגן מפקד מכלול אוכלוסייה",
            "תא מבצעים",
            "תא רשויות",
            "תא התנהגות",
            "תא הסברה",
            "תא חומ''ס",
            "תא הנדסה"
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


    const handleToggleExplanation = (index) => {
        setExpandedExplanation(expandedExplanation === index ? null : index);
    };


    const explanations = selectedOption === 'נפה' ? [
        {
            title: "ייעוד מכלול אוכלוסייה בנפה",
            text: "מכלול אוכלוסייה יהווה מטה מקצועי במפקדת הנפה, המייעץ ומנחה בתחום ההתגוננות, רשויות, התנהגות, הסברה, אוכלוסייה, חומ\"ס ומיגון את מטה הנפה, את יחידותיה ואת שותפי התפקיד בשגרה ובחירום."
        },
        {
            title: "תפקידי מכלול אוכלוסייה בנפה",
            text: [
                "1. יוביל תהליכים מבצעיים כחלק משעון הלחימה ובכלל זה – הע\"מ, פורום החרגות, מיצוי יכולות מרחב.",
                "2. גיבוש תכניות מענה לתמיכה במרחב האזרחי ולצמצום הסיכון לאוכלוסייה.",
                "3. מנחה מקצועי ליקל\"רים, לקה\"אים ולמהנדסי הגדודים בנפה."
            ]
        }
    ] : [
        {
            title: "ייעוד מרכז אוכלוסייה במחוז",
            text: [
                "1. תמיכה ביכולת העמידה וחוסנו של העורף האזרחי בשעת חירום.",
                "2. מטה מקצועי בתחום האוכלוסייה במפקדת המחוז.",
                "3. שיקוף תמונת מצב מרחב אזרחי ברורה ועדכנית שתאפשר קבלת החלטות ע\"י מפקד המחוז."
            ]
        },
        {
            title: "תפקידי מרכז אוכלוסייה במחוז",
            text: [
                "1. ייעוץ והמלצה למפקד המחוז ולמטהו בנושאי התנהגות אוכלוסייה, הסברה והדרכת אוכלוסייה, רשויות, שירותים חיוניים, חומרים מסוכנים, הנדסה ומיגון, מתנדבים ומיצוי יכולות המרחב.",
                "2. בקיאות במאפייני האוכלוסייה במרחב והכרת האתגרים שאותרו בשגרה להתמודדות בחירום.",
                "3. יצירת תמונת מצב רב תחומית של האוכלוסייה, ועל בסיסה ביצוע הערכת מצב אוכלוסייה וגיבוש המלצות."
            ]
        }
    ];


    return (
        <div className="DiagramStep2">
            <StepsBtnDiagram currentStep={2} selectedOption />
            <div className='title-DiagramStep2'>
                {selectedOption === 'נפה'
                    ? 'מבנה יעוד ותפקידי מכלול האוכלוסייה '
                    : 'מבנה יעוד ותפקידי מרכז האוכלוסייה '}
                <span style={{ color }}> ב{selectedOption}</span>
            </div>


            {explanations.map((explanation, index) => (
                <div key={index} className="explanation-div-DiagramStep2">
                    <div
                        className="explanation-title-wrapper-DiagramStep2"
                        onClick={() => handleToggleExplanation(index)}
                    >
                        <div className="explanation-title-DiagramStep2">
                            {explanation.title}
                        </div>


                        <img
                            src={`${process.env.PUBLIC_URL}/assests/imgs/nextBlack.png`}
                            className={`arrow-icon1 ${expandedExplanation === index ? 'rotated' : ''}`}
                            alt="Arrow"
                        />
                    </div>
                    {expandedExplanation === index && (
                        <div className="explanation-text-DiagramStep2">
                            {Array.isArray(explanation.text)
                                ? explanation.text.map((text, idx) => <div key={idx}>{text}</div>)
                                : explanation.text}
                        </div>
                    )}
                </div>
            ))}

            <hr className='dotted hr1' />

            <div className='subText-step2'>
                {selectedOption === 'נפה'
                    ? "לפניכם עץ מבנה מכלול אוכלוסיייה בנפה. בהמשך הדף יש לבחור את התאים השונים לקבלת פירוט אודות ייעוד ותפקידי התא ומשימות בעלי התפקידים."
                    : "לפניכם עץ מבנה מרכז אוכלוסיייה במחוז. בהמשך הדף יש לבחור את המכלולים השונים לקבלת פירוט אודות ייעוד ותפקידי המכלול ומשימות בעלי התפקידים."
                }
            </div>


            <img
                src={imagePath}
                className="stpe2Img"
                alt="Structure Diagram"
                onClick={handleImageClick}
            />


            <div className='text-img'>אפשר להגדיל את עץ המבנה בלחיצה</div>
            <img
                src={`${process.env.PUBLIC_URL}/assests/imgs/glass.png`}
                className="glass"
                alt="glass"
            />

            <hr className='dotted hr2' />

            <div className='all-diagram'>
                <div className="line"></div>
                <div className="small-line"></div>


                <div
                    className='first-frame'
                    style={{ backgroundColor: firstColor }}
                    onClick={handleFirstFrameClick}
                >
                    {selectedData.strings[0]}
                    <img
                        src={`${process.env.PUBLIC_URL}/assests/imgs/left-arrow.png`}
                        className='arrow-icon1-diagram'
                        alt="Arrow"
                    />
                </div>


                <div
                    className='second-frame'
                    style={{ backgroundColor: secondColor }}
                    onClick={handleFirstFrameClick}
                >
                    {selectedData.strings[1]}
                    <img
                        src={`${process.env.PUBLIC_URL}/assests/imgs/left-arrow.png`}
                        className='arrow-icon2-diagram'
                        alt="Arrow"
                    />
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
                        <img
                            src={`${process.env.PUBLIC_URL}/assests/imgs/left-arrow.png`}
                            className='arrow-icon3-diagram'
                            alt="Arrow"
                        />
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




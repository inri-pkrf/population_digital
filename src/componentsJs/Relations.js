import React, { useState, useRef, useEffect } from 'react';
import '../componentsCss/Relations.css';
import Interfaces from './Interfaces.js';


function Relations() {
    const [title, setTitle] = useState('בחירת מכלול/תא ראשי'); // כותרת מעודכנת
    const [titleColor, setTitleColor] = useState('#50565c');
    const [text, setText] = useState(''); // הסאב טקסט ריק
    const [selectedItemStep1, setSelectedItemStep1] = useState(null);
    const [selectedItemsStep2, setSelectedItemsStep2] = useState(null);
    const [step, setStep] = useState(1);
    const [step1Color, setStep1Color] = useState('rgb(86 195 232)'); // Initial color for step 1 button
    const [step2Color, setStep2Color] = useState('rgb(217 217 217)'); // Initial color for step 2 button
    const [step3Color, setStep3Color] = useState('rgb(217 217 217)'); // Initial color for step 3 button
    const [newComponent, setNewComponent] = useState(false);
    const [introVisible, setIntroVisible] = useState(true); // State to manage visibility of intro section

    const initialArray = [
        'הסברה',
        'התנהגות',
        'רשויות',
        'הנדסה',
        'חומ"ס',
    ];

    const [arrayOfMechlol, setArrayOfMechlol] = useState(initialArray);

    const introRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [step]);

    const handleClick = (item) => {
        setSelectedItemStep1(item);
        setTitle(`מכלול ${item}`);
        setTitleColor('#56c3e8');
        setText('יש לבחור מכלול נוסף שתרצה לבחון את הממש"קים ויחס"ג איתו'); // טקסט מעודכן לשלב 2
        setStep(2);
        setArrayOfMechlol(arrayOfMechlol.filter(mechlol => mechlol !== item));
        setStep1Color('rgb(86 195 232)');
        setStep2Color('rgb(86 195 232)');
    };
    

    const handleStepClick = (stepNumber) => {
        if (stepNumber <= step) {
            if (stepNumber === 1) {
                setStep(1);
                setSelectedItemStep1(null);
                setSelectedItemsStep2(null);
                setTitle('בחירת מכלול/תא ראשי'); // עדכון הכותרת
                setTitleColor('#50565c');
                setText(''); // מחיקת הסאב טקסט
                setArrayOfMechlol(initialArray);
                setStep1Color('rgb(86 195 232)');
                setStep2Color('rgb(217 217 217)');
                setStep3Color('rgb(217 217 217)');
                setNewComponent(false);
            } else if (stepNumber === 2) {
                setStep(2);
                setStep2Color('rgb(86 195 232)');
                setStep3Color('rgb(217 217 217)');
                setNewComponent(false);
                setText('יש לבחור מכלול נוסף שתרצה לבחון את הממש"קים ויחס"ג איתו'); // טקסט מעודכן לשלב 2
                if (selectedItemStep1) {
                    setTitle(`מכלול ${selectedItemStep1}`);
                } else {
                    setTitle('בחירת מכלול');
                }
            } else if (stepNumber === 3) {
                setStep(3);
                setStep3Color('rgb(86 195 232)');
                setTitle(`ממשק בין ${selectedItemStep1} ו${selectedItemsStep2}`);
                setTitleColor('#56c3e8');
            }
        }
    };
    
    

    const handleItemClick = (item) => {
        if (step === 2) {
            setSelectedItemsStep2(item);
            setStep2Color('rgb(86 195 232)');
            setStep3Color('rgb(86 195 232)');
            if (selectedItemStep1 && item) {
                setTitle(`ממשק בין ${selectedItemStep1} ו${item}`);
            }
            setNewComponent(true);
            setStep(3);
        } else {
            handleClick(item);
        }
    };

    const handleArrowClick = () => {
        setIntroVisible(false);
    };

    // const handlePrintRelationsClick = () => {
    //     window.open(`${process.env.PUBLIC_URL}/ממשקים בין מכלולים.pdf`, '_blank');
    // };

    const navigateToStep1 = () => {
        setStep(1);
        setSelectedItemStep1(null);
        setSelectedItemsStep2(null); // Clear selected item for Step 2
        setTitle('בחירת מכלול');
        setTitleColor('#50565c');
        setText('יש לבחור את המכלול הראשי');
        setArrayOfMechlol(initialArray);
        setStep1Color('rgb(86 195 232)'); // Reset color for Step 1
        setStep2Color('rgb(217 217 217)'); // Reset color for Step 2
        setStep3Color('rgb(217 217 217)'); // Reset color for Step 3
        setNewComponent(false); // Hide the Interfaces component
    };

    return (
        <div className="Relations">
            {introVisible ? (
                <div className='intro-div-Relations' ref={introRef}>
                    <img
                        src={process.env.PUBLIC_URL + '/assests/imgs/relations-icon.png'}
                        className="photo-mimshak-intro"
                        alt="Relations"
                    />
                    <div className="title-intro-rel">
                        יחסי גומלין במרכז ומכלול אוכלוסייה
                    </div>
                    <div className="sub-intro-rel">
                    בפרק זה נלמד על יחסי הגומלין בין המכלולים והתאים השונים באוכלוסייה. עליך לבחור שני מכלולים שתרצה ללמוד מה כל אחד נותן לשני.                    </div>
                    <div className='btn-Relations' onClick={handleArrowClick}>התחלה</div>
                    {/* <img
                        src={process.env.PUBLIC_URL + '/assests/imgs/blackArrow.png'}
                        className="hpArrow-Relations"
                        alt="Arrow"
                        onClick={handleArrowClick}
                    /> */}
                </div>
            ) : (
                <div className='Relations-div'>
                    <img
                        src={process.env.PUBLIC_URL + '/assests/imgs/relations-icon.png'}
                        className="photo-mimshak"
                        alt="Relations"
                    />

                    <div className='all-steps'>
                        <div
                            className='btn-steps'
                            id='step1'
                            style={{ backgroundColor: step1Color }}
                            onClick={() => handleStepClick(1)}
                        >
                            שלב 1
                            <div className='arrow-down' id='arrow-down1' style={{ display: step === 1 ? 'block' : 'none' }}></div>
                        </div>
                        <div
                            className={`btn-steps ${step < 2 ? 'disabled' : ''}`} // Add disabled class if step < 2
                            id='step2'
                            style={{ backgroundColor: step2Color }}
                            onClick={() => step >= 1 && handleStepClick(2)} // Prevent clicking if not in step 1 or higher
                        >
                            שלב 2
                            <div className='arrow-down' id='arrow-down2' style={{ display: step === 2 ? 'block' : 'none' }}></div>
                        </div>
                        <div
                            className={`btn-steps ${step < 3 ? 'disabled' : ''}`} // Add disabled class if step < 3
                            id='step3'
                            style={{ backgroundColor: step3Color }}
                            onClick={() => step >= 2 && handleStepClick(3)} // Prevent clicking if not in step 2 or higher
                        >
                            שלב 3
                            <div className='arrow-down' id='arrow-down3' style={{ display: step === 3 ? 'block' : 'none' }}></div>
                        </div>
                    </div>

                    <div className="title-page1" style={{ color: titleColor }}>
                        {title}
                    </div>

                    {(step === 2 || step === 3) && <div className='sub-text-relations'>בחרת ב</div>}

                    <div className='content-page1' ref={contentRef}>
                        <div className="text-page1" style={{ display: newComponent ? 'none' : 'block' }}>
                            {text}
                        </div>

                        <div className='all-opotion' style={{ display: newComponent ? 'none' : 'block' }}>
                            {arrayOfMechlol.map((item, index) => (
                                <div
                                    key={index}
                                    className="array-item"
                                    onClick={() => handleItemClick(item)}
                                >
                                    {item}
                                </div>
                            ))}
                        </div>

        
                        {newComponent && <Interfaces
                            selectedItemStep1={selectedItemStep1}
                            selectedItemsStep2={selectedItemsStep2}
                            setSelectedItemsStep2={setSelectedItemsStep2}
                            setTitle={setTitle}
                            navigateToStep1={navigateToStep1}
                        />}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Relations;
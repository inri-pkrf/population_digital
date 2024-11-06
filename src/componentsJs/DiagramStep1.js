import React from 'react';
import '../componentsCss/DiagramStep1.css';
import StepsBtnDiagram from "./StepsBtnDiagram";


function DiagramStep1() {

    return (

        <div className="DiagramStep1" >
            <StepsBtnDiagram currentStep={1} />

            <div className='title-DiagramStep1'>
                מבנה, ייעוד ותפקידי מכלול האוכלוסייה במפקדות
            </div>
            <div className='subtext-DiagramStep1'>בחר/י במפקדה הרצוייה</div>

            <div className='btns-DiagramStep1' id='btn1-DiagramStep1'>נפה</div>
            <div className='btns-DiagramStep1' id='btn1-DiagramStep2'>מחוז</div>

        </div>
    );
}

export default DiagramStep1;

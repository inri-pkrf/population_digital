import React from 'react';
import '../componentsCss/DiagramStep1.css';
import { useNavigate } from 'react-router-dom';
import StepsBtnDiagram from "./StepsBtnDiagram";

function DiagramStep1() {
    const navigate = useNavigate();
    const mifkada = '';

    return (
        <div className="DiagramStep1" >
            <StepsBtnDiagram currentStep={1} />

            <div className='title-DiagramStep1'>
                מבנה, ייעוד ותפקידי מכלול האוכלוסייה במפקדות
            </div>
            <div className='subtext-DiagramStep1'>בחר/י במפקדה הרצוייה</div>

            <div className='btns-DiagramStep1' id='btn1-DiagramStep1' onClick={() => navigate('/DiagramStep2', { state: { selectedOption: 'נפה' } })}>נפה</div>
            <div className='btns-DiagramStep1' id='btn1-DiagramStep2' onClick={() => navigate('/DiagramStep2', { state: { selectedOption: 'מחוז' } })}>מחוז</div>

        </div>
    );
}

export default DiagramStep1;

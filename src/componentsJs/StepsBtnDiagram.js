import React from 'react';
import '../componentsCss/StepsBtnDiagram.css';
import { useNavigate } from 'react-router-dom';


function StepsBtnDiagram({ currentStep }) {
    const navigate = useNavigate();

    return (
        <div className="StepsBtnDiagram" >
            <div className='all-steps-diagram'>
                <div
                    className='btn-steps-diagram'
                    id='step1-diagram'
                    style={{ backgroundColor: currentStep === 1 || currentStep === 2 || currentStep === 3 ? '#595959' : '#d9d9d9' }}
                    onClick={() => navigate('/DiagramStep1')}
                >
                    מפקדה
                    <div className='arrow-down-diagram' id='arrow-down1-diagram' style={{ borderTop: currentStep === 1 || currentStep === 2 || currentStep === 3 ? '12px solid #595959' : '12px solid #d9d9d9' }}></div>
                </div>
                <div
                    className='btn-steps-diagram'
                    id='step2-diagram'
                    style={{ backgroundColor: currentStep === 2 || currentStep === 3 ? '#595959' : '#d9d9d9' }}
                >
                    מבנה
                    <div className='arrow-down-diagram' id='arrow-down2-diagram' style={{ borderTop: currentStep === 2 || currentStep === 3 ? '12px solid #595959' : '12px solid #d9d9d9' }}></div>
                </div>
                <div
                    className='btn-steps-diagram'
                    id='step3-diagram'
                >
                    תפקידים
                    <div className='arrow-down-diagram' id='arrow-down3-diagram' ></div>
                </div>
            </div>
        </div>
    );
}

export default StepsBtnDiagram;

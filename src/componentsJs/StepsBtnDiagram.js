import React from 'react';
import '../componentsCss/StepsBtnDiagram.css';
import { useNavigate } from 'react-router-dom';


function StepsBtnDiagram({ currentStep, selectedOption }) {
    const navigate = useNavigate();

    return (
        <div className="StepsBtnDiagram" >
            <div className='all-steps-diagram'>
                <div
                    className='step1-diagram'
                    id='step1-diagram'
                    onClick={() => navigate('/DiagramStep1')}
                >
                    לבחירת מפקדה
                </div>

                <div
                    className='btn-steps-diagram'
                    id='step2-diagram'
                    style={{ backgroundColor: currentStep >= 2 ? '#595959' : '#d9d9d9' }}
                    onClick={() => {
                        if (currentStep > 2) {
                            navigate('/DiagramStep2', { state: { selectedOption } });
                        }
                    }}
                >
                    מבנה
                    <div className='arrow-down-diagram' id='arrow-down2-diagram' style={{ borderTop: currentStep >= 2 ? '12px solid #595959' : '12px solid #d9d9d9' }}></div>
                </div>
                <div
                    className='btn-steps-diagram'
                    id='step3-diagram'
                    style={{ backgroundColor: currentStep === 3 ? '#595959' : '#d9d9d9' }}
                >
                    תפקידים
                    <div className='arrow-down-diagram' id='arrow-down3-diagram' style={{ borderTop: currentStep === 3 ? '12px solid #595959' : '12px solid #d9d9d9' }}></div>
                </div>
            </div>
        </div>
    );
}

export default StepsBtnDiagram;

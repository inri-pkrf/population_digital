import React from 'react';
import '../componentsCss/StepsBtnDiagram.css';


function StepsBtnDiagram({ currentStep }) {

    return (

        <div className="StepsBtnDiagram" >

                    <div className='all-steps-diagram'>
                        <div
                            className='btn-steps-diagram'
                            id='step1-diagram'
                            style={{ backgroundColor: currentStep === 1 ? '#595959' : 'inherit' }}
                        >
                            מפקדה
                            <div className='arrow-down-diagram' id='arrow-down1-diagram'  style={{ borderTop: currentStep === 1 ? '12px solid #595959' : '12px solid #d9d9d9' }}></div>
                        </div>
                        <div
                            className='btn-steps-diagram'
                            id='step2-diagram'
                        >
                            מבנה
                            <div className='arrow-down-diagram' id='arrow-down2-diagram' ></div>
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

import React from 'react';
import '../componentsCss/StepsBtnDiagram.css';
import { useNavigate, useLocation } from 'react-router-dom';

function StepsBtnDiagram({ currentStep }) {
    const navigate = useNavigate();
    const location = useLocation();

    const selectedOption = location.state?.selectedOption || '';

    const step2Text = selectedOption === 'נפה' ? 'מכלול' : 'מרכז';
    const step3Text = selectedOption === 'נפה' ? 'תא' : 'מכלול';

    return (
        <div className="StepsBtnDiagram">
            <div className="all-steps-diagram">
                <div
                    className="step1-diagram"
                    id="step1-diagram"
                    onClick={() => navigate('/DiagramStep1')}
                >
                    לבחירת מפקדה
                    {currentStep === 1 && (
                        <div
                            className="arrow-down-diagram"
                            style={{ borderTop: '12px solid #595959' }}
                        ></div>
                    )}
                </div>

                <div
                    className="btn-steps-diagram"
                    id="step2-diagram"
                    style={{ backgroundColor: currentStep >= 2 ? '#595959' : '#d9d9d9' }}
                    onClick={() => {
                        if (currentStep > 2) {
                            navigate('/DiagramStep2', { state: { selectedOption } });
                        }
                    }}
                >
                    {step2Text}
                    {currentStep === 2 && (
                        <div
                            className="arrow-down-diagram"
                            style={{ borderTop: '12px solid #595959' }}
                        ></div>
                    )}
                </div>

                <div
                    className="btn-steps-diagram"
                    id="step3-diagram"
                    style={{ backgroundColor: currentStep === 3 ? '#595959' : '#d9d9d9' }}
                >
                    {step3Text}
                    {currentStep === 3 && (
                        <div
                            className="arrow-down-diagram"
                            style={{ borderTop: '12px solid #595959' }}
                        ></div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default StepsBtnDiagram;

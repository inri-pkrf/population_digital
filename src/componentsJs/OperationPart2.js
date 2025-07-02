import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../componentsCss/OperationPart2.css';

function OperationPart2() {
    const navigate = useNavigate();
    const location = useLocation();
    const selectedOption = location.state?.selectedOption;

    const getTitleColor = () => {
        if (selectedOption === 'הערכת מצב מרחב אזרחי') return '#0047ab'; // כחול כהה
        if (selectedOption === 'תהליך מדיניות התגוננות') return '#ff9a3c'; // כתום
        return '#7fa9e8'; // סאב־אייטם – כחול בהיר
    };

    return (
        <div className="OperationPart2">
            <div className='btn-back-part1' onClick={() => navigate('/operationPart1')}>חזרה לבחירת תהליך → </div>

            <h1
                className='title2-operation'
                style={{ color: getTitleColor() }}
            >
                תהליך {selectedOption}
            </h1>
        </div>
    );
}

export default OperationPart2;

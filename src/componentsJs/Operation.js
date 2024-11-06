

import React from 'react';
import '../componentsCss/Operation.css';


function Operation() {

    return (

        <div className="Operation" >
            <img
                src={process.env.PUBLIC_URL + '/assests/imgs/operation-icon.png'}
                className="operation-icon"
                alt="operation-icon"
            />
            <div className='title-operation'>
                תהליכים מבצעים
            </div>
            <div className='subtitle-operation'>
                כותרת משנה
            </div>

            <div className='items-operation' id='item1-operation'>
                הערכת מצב מרחב אזרחי
            </div>
            <div className='items-operation' id='item2-operation'>
                מיצוי המרחב האזרחי לסיוע לאזרח
            </div>
            <div className='items-operation' id='item3-operation'>
                גיבוש מדיניות התגוננות
            </div>
            <div className='items-operation' id='item4-operation'>
                הסברה והנחיה לאוכלוסייה
            </div>
        </div>
    );
}

export default Operation;


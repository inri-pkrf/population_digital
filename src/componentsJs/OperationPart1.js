import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../componentsCss/OperationPart1.css';

function OperationPart1() {
  const navigate = useNavigate();

  const handleClick = (selectedOption) => {
    navigate('/OperationPart2', { state: { selectedOption } });
  };

     useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

  return (
    <div className="OperationPart1">
      <img
        src={process.env.PUBLIC_URL + '/assests/imgs/operation-icon.png'}
        className="operation-icon"
        alt="operation-icon"
      />
      <div className='title-operation'>תהליכים מבצעים</div>

      <div className='subtitle-operation'>
        על מנת ללמוד את התליכים המבצעים ניתן ללחוץ על כל אחד מהמלבנים הציבעוניים
      </div>

      <div className='items-div'>
        <div
          className='items-operation'
          id='item1-operation'
          onClick={() => handleClick("הערכת מצב מרחב אזרחי")}
        >
          הערכת מצב מרחב אזרחי
        </div>

        <div className='sub-items-container'>
          <div className='items-operation sub-item' id='item2-operation' onClick={() => handleClick("רציפות תפקוד")}>
            רציפות <br/>תפקוד
          </div>
          <div className='items-operation sub-item' id='item3-operation' onClick={() => handleClick("הסברה והנחיית אוכלוסייה")}>
            הסברה והנחיית אוכלוסייה
          </div>
          <div className='items-operation sub-item' id='item4-operation' onClick={() => handleClick("התמודדות אוכלוסייה")}>
            התמודדות אוכלוסייה
          </div>
          <div className='items-operation sub-item' id='item5-operation' onClick={() => handleClick('העמ"צ/ שינוע חומ"ס')}>
            העמ"צ/ שינוע חומ"ס
          </div>
          <div className='items-operation sub-item' id='item6-operation' onClick={() => handleClick("מיצוי יכולות במרחב האזרחי")}>
            מיצוי יכולות במרחב האזרחי
          </div>
        </div>

        <div className="separator-operation">
          <div className="wave-line"></div>
        </div>

        <div
          className='items-operation'
          id='item7-operation'
          onClick={() => handleClick("תהליך מדיניות התגוננות")}
        >
          תהליך מדיניות התגוננות
        </div>
      </div>

      <div className='footer-operation1'></div>
    </div>
  );
}

export default OperationPart1;

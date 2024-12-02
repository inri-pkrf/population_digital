import React from 'react';
import '../componentsCss/Diagram.css';
import { useNavigate } from 'react-router-dom';

function Diagram() {
    const navigate = useNavigate();

    return (
        <div className="Diagram" >

            <div className='intro-div-Relations' >
                <img
                    src={process.env.PUBLIC_URL + '/assests/imgs/diagram-icon.png'}
                    className="diagram-icon-intro"
                    alt="diagram-icon"
                />
                <div className="title-intro-diagram">
                    מבנה, ייעוד ותפקידי אוכלוסייה במפקדות
                </div>
                <div className="sub-intro-diagram">
                    בחלק זה בלומדה נלמד על עצי המבנה במפקדות. בשלב הראשון ניתן לבחור מפקדה, לאחר הבחירה ניתן ללמוד על המרכז\מכלול ולאחר מכן על מכלול\תא.
                </div>
                <img
                    src={process.env.PUBLIC_URL + '/assests/imgs/blackArrow.png'}
                    className="hpArrow-Relations"
                    alt="Arrow"
                    onClick={() => navigate('/DiagramStep1')}
                />
            </div>

        </div >
    );
}

export default Diagram;

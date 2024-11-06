import React from 'react';
import '../componentsCss/Agamim.css';


function Agamim() {

    return (

        <div className="Agamim" >
            <img
                src={process.env.PUBLIC_URL + '/assests/imgs/agamim-icon.png'}
                className="agamim-icon"
                alt="agamim-icon"
            />
            <div className='title-agamim'>
                אגמ"ים ושו"ב
            </div>
            <div className='subtitle-agamim'>
                כותרת משנה
            </div>

            <div className='items' id='item1'>
                קישור לפורטל אגמים
            </div>
            <div className='items' id='item2'>
                קישור לשועל אזרחי
            </div>
        </div>
    );
}

export default Agamim;

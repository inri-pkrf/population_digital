import React from 'react';
import '../componentsCss/Agamim.css';

function Agamim() {
    return (
        <div className="Agamim">
            <img
                src={process.env.PUBLIC_URL + '/assests/imgs/agamim-icon.png'}
                className="agamim-icon"
                alt="agamim-icon"
            />
            <div className="title-agamim">
                אגמ"ים ושו"ב
            </div>
            <div className="subtitle-agamim">
                לחצו על הקישורים כדי ללמוד עוד
            </div>

            <a
                className="items"
                id="item1"
                href="https://portal.agamimp.net/"
                target="_blank"
                rel="noopener noreferrer"
            >
                קישור לפורטל אגמים
            </a>
            <img
                src={process.env.PUBLIC_URL + '/assests/imgs/agaminLogo.png'}
                className="agaminLogo"
                alt="agaminLogo"
            />

            <a
                className="items"
                id="item2"
                href="https://shual.org.il/FoxClientv3/authentication"
                target="_blank"
                rel="noopener noreferrer"
            >
                קישור לשועל אזרחי
            </a>
            <img
                src={process.env.PUBLIC_URL + '/assests/imgs/shoalLogo.png'}
                className="shoalLogo"
                alt="shoalLogo"
            />

        </div>
    );
}

export default Agamim;

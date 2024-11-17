import React from 'react';
import '../componentsCss/PopUp.css';

const PopUp = ({ isVisible, onClose, title, content }) => {
    if (!isVisible) {
        return null;
    }

    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <div className="popup-close-button" onClick={onClose} >
                    <img src={process.env.PUBLIC_URL + '/assests/imgs/XBtn.png'} alt="Close" className="XBtn" />
                </div>
                <h2 className="popup-title" >{title}</h2>
                <div className="popup-body">
                    <div className="popup-body-text">
                        {content}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopUp;

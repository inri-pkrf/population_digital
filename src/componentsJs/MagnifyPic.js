import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../componentsCss/MagnifyPic.css';

function MagnifyPic() {
    const location = useLocation();
    const navigate = useNavigate();
    const { imagePath } = location.state || {};

    if (!imagePath) {
        return <div>Error: No image provided for magnification</div>;
    }

    return (
        <div className="MagnifyPic">
            <button className="close-btn" onClick={() => navigate(-1)}>
                x
            </button>
            <img src={imagePath} alt="Magnified" className="magnified-image" />
        </div>
    );
}

export default MagnifyPic;

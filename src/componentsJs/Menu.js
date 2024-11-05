import '../componentsCss/Menu.css';
import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function Menu() {
    const navigate = useNavigate();
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (location.pathname === '/menu') {
            setIsOpen(true);
        } else {
            setIsOpen(false);
        }
    }, [location]);

    const handleClose = () => {
        setIsOpen(false);
        navigate(-1);
    };


    return (

        <div className={`menu ${isOpen ? 'open' : ''}`}>

            <img src={process.env.PUBLIC_URL + '/assests/imgs/whiteLogo.png'} alt="Decorative" className="whiteLogo" />
            <h1 className="menu-title">
                עזר דיגיטלי בתחום האוכלוסייה במפקדות
            </h1>
            <img src={process.env.PUBLIC_URL + '/assests/imgs/closeBtn.png'} alt="Close" onClick={handleClose} className="closeBtn" />
            <ul className="menu-list">
                <li onClick={() => navigate('/home')}
                >עמוד הבית</li>
                <div className='lineMenu'></div>
                <li onClick={() => navigate('/diagram')}>מבני ייעוד ותפקידים
                </li>
                <div className='lineMenu'></div>
                <li onClick={() => navigate('/relations')}> יחסי גומלין במרכז ומכלול אוכלוסייה
                </li>
                <div className='lineMenu'></div>
                <li onClick={() => navigate('/operation')}>תהליכים מבצעים
                </li>
                <div className='lineMenu'></div>
                <li onClick={() => navigate('/agamim')}> אגמ"ים ושו"ב
                </li>
                <div className='lineMenu'></div>
            </ul>

            <div className='mashov-menu'>
                <div className='mashovTextMenu'>
                    <br /> יש הערות על הממשק? יש מחמאות? מלאו את השאלון וצרו איתנו קשר
                    <br /> <a id='linkMenu' href="https://docs.google.com/forms/d/e/1FAIpQLSeAunPlSFfKmqyZhnCQkf8jsxTPsLjr8-vKES_V3UDqqDSFoA/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer">
                        בקישור הבא
                    </a>
                </div>
            </div>

        </div>
    );
}

export default Menu;

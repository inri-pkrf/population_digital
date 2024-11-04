import React from 'react';
import '../componentsCss/Menu.css';
import { useNavigate } from 'react-router-dom';


function Menu() {
    const navigate = useNavigate();

    return (

        <div className="menu" >

            <img src={process.env.PUBLIC_URL + '/assests/imgs/whiteLogo.png'} alt="Decorative" className="whiteLogo" />
            <h1 className="menu-title">
                עזר דיגיטלי בתחום האוכלוסייה במפקדות
            </h1>
            <img src={process.env.PUBLIC_URL + '/assests/imgs/closeBtn.png'} alt="Close" onClick={() => navigate('/home')} className="closeBtn" />
            <ul className="menu-list">
                <li onClick={() => navigate('/menu')}
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
                <li onClick={() => navigate('/agam')}> אגמ"ים ושו"ב
                </li>
                <div className='lineMenu'></div>
            </ul>

            <div className='mashov-menu'>
                <div className='mashovTextMenu'>
                    <br /> יש הערות על הממשק? יש מחמאות? מלאו את השאלון וצרו איתנו קשר
                    <br /> <a id='linkMenu' href="https://docs.google.com/forms/d/e/1FAIpQLScvCPjvm6G7IIXdtoeNmcF2COJ3D7xkTfP4n0xaS0T-nRpkPA/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer">
                        בקישור הבא
                    </a>
                </div>
            </div>

        </div>
    );
}

export default Menu;

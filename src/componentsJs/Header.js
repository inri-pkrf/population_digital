import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../componentsCss/Header.css';
import Navbar from './Navbar';

function Header() {
    const navigate = useNavigate();
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <header className="header">
            {/* לוגו */}
            <img
                src={process.env.PUBLIC_URL + '/assests/imgs/collegeLogoText.png'}
                className="collegeLogoText"
                alt="collegeLogoText"
                onClick={() => navigate('/home')}
            />

            {/* ניווט */}
            {isMobile ? (
                <img
                    src={process.env.PUBLIC_URL + '/assests/imgs/navbar.png'}
                    className="navbar"
                    alt="navbar"
                    onClick={() => navigate('/menu')} 
                />
            ) : (
                <div className='div-navbar'>
                    <Navbar />
                </div>
            )}

            {/* עיטורים */}
            <img
                src={process.env.PUBLIC_URL + '/assests/imgs/orangeTriangle.png'}
                alt="orangeTriangle"
                className="orangeTriangle"
            />
          
        </header>
    );
}

export default Header;

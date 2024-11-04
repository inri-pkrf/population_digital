import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../componentsCss/Header.css';

function Header() {
    const navigate = useNavigate();

    return (
        <header className="header">
            <img
                src={process.env.PUBLIC_URL + '/assests/imgs/collegeLogoText.png'}
                className="collegeLogoText"
                alt="collegeLogoText"
                onClick={() => navigate('/home')}
            />
            <img
                src={process.env.PUBLIC_URL + '/assests/imgs/navbar.png'}
                className="navbar"
                alt="navbar"
                onClick={() => navigate('/menu')}
            />
            <img
                src={process.env.PUBLIC_URL + '/assests/imgs/orangeTriangle.png'}
                alt="orangeTriangle"
                className="orangeTriangle"
            />
        </header>
    );
}

export default Header;
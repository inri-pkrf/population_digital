import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../componentsCss/Navbar.css';

function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    const handleNavigate = (path) => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        navigate(path);
    };

    return (
        <nav className="navbar-container">
            <ul className="navbar-list">
                <li
                    className={isActive('/home') ? 'active' : ''}
                    onClick={() => handleNavigate('/home')}
                >
                    עמוד הבית
                </li>
                <li
                    className={isActive('/Diagram') ? 'active' : ''}
                    onClick={() => handleNavigate('/Diagram')}
                >
                    מבנה, ייעוד ותפקידי אוכלוסייה במפקדות
                </li>
                <li
                    className={isActive('/relations') ? 'active' : ''}
                    onClick={() => handleNavigate('/relations')}
                >
                    יחסי גומלין במרכז ומכלול אוכלוסייה
                </li>
                <li
                    className={isActive('/operationPart1') ? 'active' : ''}
                    onClick={() => handleNavigate('/operationPart1')}
                >
                    תהליכים מבצעים
                </li>
                <li
                    className={isActive('/agamim') ? 'active' : ''}
                    onClick={() => handleNavigate('/agamim')}
                >
                    אגמ"ים ושו"ב
                </li>
            </ul>
        </nav>
    );
}


export default Navbar;

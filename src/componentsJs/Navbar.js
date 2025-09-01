import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../componentsCss/Navbar.css';

function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();

    const isActivePath = (paths) => {
        return paths.some((path) => location.pathname.startsWith(path));
    };

    const handleNavigate = (path) => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        navigate(path);
    };

    return (
        <nav className="navbar-container">
            <ul className="navbar-list">
                <li
                    className={isActivePath(['/home']) ? 'active' : ''}
                    onClick={() => handleNavigate('/home')}
                >
                    עמוד הבית
                </li>
                <li
                    className={isActivePath([
                        '/Diagram',
                        '/DiagramStep1',
                        '/DiagramStep2',
                        '/DiagramStep3Nafa',
                        '/DiagramStep3Mahoz'
                    ]) ? 'active' : ''}
                    onClick={() => handleNavigate('/Diagram')}
                >
                    מבנה, ייעוד ותפקידי אוכלוסייה במפקדות
                </li>
                <li
                    className={isActivePath(['/relations']) ? 'active' : ''}
                    onClick={() => handleNavigate('/relations')}
                >
                    יחסי גומלין במרכז ומכלול אוכלוסייה
                </li>
             <li
    className={isActivePath([
        '/operationPart1',
        '/OperationPart2'
    ]) ? 'active' : ''}
    onClick={() => handleNavigate('/operationPart1')}
>
    תהליכים מבצעים
</li>
                <li
                    className={isActivePath(['/agamim']) ? 'active' : ''}
                    onClick={() => handleNavigate('/agamim')}
                >
                    אגמ"ים ושו"ב
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;

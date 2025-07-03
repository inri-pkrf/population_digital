import React from 'react';
// import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../componentsCss/Home.css';


function Home() {
    const navigate = useNavigate();
    return (
        
        <div className="Home">

            <div className="title">
                עזר דיגיטלי בתחום האוכלוסיה במפקדות  
            </div>

            {/* <img src={process.env.PUBLIC_URL + '/assests/imgs/blackArrow.png'} className="blackArrow" id="blackArrow1" alt="blackArrow"></img> */}

            <div className='pages-list'>

                <div className="pages-list-item" onClick={() => navigate('/Diagram')}>
                    <div className="pages-list-content">
                        <div className="pages-list-title-homepage">
                        מבנה, ייעוד ותפקידי אוכלוסייה במפקדות
                        </div>
                        <img src={process.env.PUBLIC_URL + '/assests/imgs/diagram-icon.png'} className="pages-list-image-homepage" alt="diagram" />
                    </div>
                </div>

                <div id='line1' className='dot-line'>. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . </div>

                <div className="pages-list-item" onClick={() => navigate('/relations')}>
                    <div className="pages-list-content">
                        <div className="pages-list-title-homepage">
                            יחסי גומלין במרכז ומכלול אוכלוסייה
                        </div>
                        <img src={process.env.PUBLIC_URL + '/assests/imgs/relations-icon.png'} className="pages-list-image-homepage" alt="relations" />
                    </div>
                </div>

                <div id='line2' className='dot-line'>. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  </div>

                <div className="pages-list-item" onClick={() => navigate('/operationPart1')}>
                    <div className="pages-list-content">
                        <div className="pages-list-title-homepage">
                            תהליכים מבצעים
                        </div>
                        <img src={process.env.PUBLIC_URL + '/assests/imgs/operation-icon.png'} className="pages-list-image-homepage" alt="operation" />
                    </div>
                </div>

                <div id='line3' className='dot-line'>. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  </div>

                <div className="pages-list-item" onClick={() => navigate('/agamim')}>
                    <div className="pages-list-content">
                        <div className="pages-list-title-homepage">
                            אגמ"ים ושו"ב
                        </div>
                        <img src={process.env.PUBLIC_URL + '/assests/imgs/agamim-icon.png'} id='icon-des' className="pages-list-image-homepage" alt="agamim" />
                    </div>
                </div>

            </div>

            {/* <img src={process.env.PUBLIC_URL + '/assests/imgs/blackArrow.png'} className="blackArrow" id="blackArrow2" alt="blackArrow"></img> */}

            {/* <img src={process.env.PUBLIC_URL + '/assests/imgs/twoLogos.png'} className="homePageLogos" alt="homePageLogos"></img>

            <div className="subtitle">
                עזר זה נבנה בשיתוף פעולה בין מחלקת אוכלוסייה ומגמת מפקדות במכללה הלאומית לאיתנות ישראלית
            </div>

            <div id='line5' >. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   </div>

            <div className='date'> יולי 2025 </div> */}

            <div className='mashov-home'>
                <div className='mashovText'>
                    <br /> יש הערות על הממשק? יש מחמאות? מלאו את השאלון וצרו איתנו קשר
                    <br /> <a id='linkHome' href="https://docs.google.com/forms/d/e/1FAIpQLSeAunPlSFfKmqyZhnCQkf8jsxTPsLjr8-vKES_V3UDqqDSFoA/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer">
                        בקישור הבא
                    </a>
                </div>
            </div>

        </div>
    )
}


export default Home;
import React, { useState, useEffect } from 'react';
import '../componentsCss/Interfaces.css';

function Interfaces({ selectedItemStep1, selectedItemsStep2, setSelectedItemsStep2, setTitle, navigateToStep1 }) {

    const data = {
        "הסברה": [
            {
                name: "רשויות",
                connections: [
                    'תמונת ההסברה ברשויות לחיזוק חוסן, הצלת חיים',
                    'תכניות הסברה, הנחיות, מדיניות'
                ]
            },
            {
                name: "התנהגות",
                connections: [
                    'כמעט כל תהליך של גיבוש תמ"צ הדדית - התמודדות, מסרים, תכניות הסברה',
                    'כמעט כל תהליך של גיבוש תמ"צ הדדית - התמודדות, מסרים, תכניות הסברה'
                ]
            },
            {
                name: "הנדסה",
                connections: [
                    'הצלת חיים',
                    'הכרת ההנחיות '
                ]
            },
            {
                name: 'חומ"ס',
                connections: [
                    'הצלת חיים בניהול אירוע חומ"ס',
                    'תכניות הסברה בניהול אירוע'
                ]
            }
        ],
        "התנהגות": [
            {
                name: "הסברה",
                connections: [
                    'כמעט כל תהליך של גיבוש תמ"צ הדדית - התמודדות, מסרים, תכניות הסברה',
                    'כמעט כל תהליך של גיבוש תמ"צ הדדית - התמודדות, מסרים, תכניות הסברה'
                ]
            },
            {
                name: "רשויות",
                connections: [
                    'משמעויות של התמודדות וחוסן על תמונת הרשויות',
                    'תמונת התמודדות וחוסן כחלק מתפקוד הרשות'
                ]
            },
            {
                name: "הנדסה",
                connections: [
                    'הצלת חיים',
                    'הצלת חיים'
                ]
            },
            {
                name: 'חומ"ס',
                connections: [
                    'משמעויות של התמודדות והתנהגות לאור אירועי חומ"ס',
                    'הצלת חיים'
                ]
            }
        ],
        "רשויות": [
            {
                name: "הסברה",
                connections: [
                    'תמונת ההסברה ברשויות לחיזוק חוסן, הצלת חיים',
                    'תכניות הסברה, הנחיות, מדיניות'
                ]
            },
            {
                name: "התנהגות",
                connections: [
                    'משמעויות של התמודדות וחוסן על תמונת הרשויות',
                    'תמונת התמודדות וחוסן כחלק מתפקוד הרשות'
                ]
            },
            {
                name: "הנדסה",
                connections: [
                    'תמונת המיגון ברשויות',
                    'תמונת המיגון'
                ]
            },
            {
                name: 'חומ"ס',
                connections: [
                    'תמונת המפעלים ומוכנות רשויות למענה בניהול ארוע חומ"ס',
                    'מיגון במפעלים'
                ]
            }
        ],
        "הנדסה": [
            {
                name: "הסברה",
                connections: [
                    'הצלת חיים',
                    'הכרת ההנחיות '
                ]
            },
            {
                name: "התנהגות",
                connections: [
                    'הצלת חיים',
                    'הצלת חיים'
                ]
            },
            {
                name: "רשויות",
                connections: [
                    'תמונת המיגון',
                    'תמונת המיגון ברשויות'
                ]
            },
            {
                name: 'חומ"ס',
                connections: [
                    'מיגון במפעלים',
                    'מיגון במפעלים'
                ]
            }
        ],
        'חומ"ס': [
            {
                name: "הסברה",
                connections: [
                    'הצלת חיים בניהול אירוע חומ"ס',
                    'מיגון תכניות הסברה בניהול אירוע'
                ]
            },
            {
                name: "התנהגות",
                connections: [
                    'משמעויות של התמודדות והתנהגות לאור אירועי חומ"ס',
                    'הצלת חיים'
                ]
            },
            {
                name: "רשויות",
                connections: [
                    'פק"לי אופציות ומשמעויות לעת אירוע',
                    'תמונת המפעלים ומוכנות רשויות למענה בניהול ארוע חומ"ס'
                ]
            },
            {
                name: 'הנדסה',
                connections: [
                    'מיגון במפעלים',
                    'מיגון במפעלים'
                ]
            }
        ],
    };



    const selectedData = data[selectedItemStep1] || [];
    const currentIndex = selectedData.findIndex(item => item.name === selectedItemsStep2);
    const itemData = selectedData[currentIndex];
    const [give, setGive] = useState(`מקבל ממכלול ${selectedItemStep1}`);
    const [receives, setReceives] = useState(`מקבל ממכלול ${selectedItemsStep2}`);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleNext = () => {
        if (selectedData.length > 0) {
            const nextIndex = (currentIndex + 1) % selectedData.length;
            const nextItem = selectedData[nextIndex].name;
            setSelectedItemsStep2(nextItem);
            setTitle(`ממשק בין ${selectedItemStep1} ו${nextItem}`);
            setGive(`מקבל ממכלול ${nextItem}`);
            setReceives(`נותן ממכלול ${selectedItemStep1}`);
            window.scrollTo(0, 0);
        }
    };

    const handlePrev = () => {
        if (selectedData.length > 0) {
            const prevIndex = (currentIndex - 1 + selectedData.length) % selectedData.length;
            const prevItem = selectedData[prevIndex].name;
            setSelectedItemsStep2(prevItem);
            setTitle(`ממשק בין ${selectedItemStep1} ו${prevItem}`);
            setGive(`מקבל ממכלול ${prevItem}`);
            setReceives(`נותן ממכלול ${selectedItemStep1}`);
            window.scrollTo(0, 0);
        }
    };

    return (
        <div className="Interfaces">

            <div className='Interfaces-contect'>
                <div className='title-Interfaces' id='title2-Interfaces'>{receives} </div>
                <div className='text-Interfaces' id='text2-Interfaces'>
                    {itemData ? itemData.connections[0] : ''}
                </div>

                <div className='title-Interfaces' id='title1-Interfaces'> {give}</div>
                <div className='text-Interfaces' id='text1-Interfaces'>
                    {itemData ? itemData.connections[1] : ''}
                </div>
            </div>

            <div className='btn-div'>
                <div className='btn-Interfaces' id='prev-btn-Interfaces' onClick={handlePrev}>לממשק הקודם</div>
                <div className='btn-Interfaces' id='next-btn-Interfaces' onClick={handleNext}>לממשק הבא</div>
            </div>

            <div className='Interfaces-back'>
                <div id='stpe1btn-Interfaces' onClick={navigateToStep1}>
                    חזרה לבחירת מכלול ראשון
                </div>
            </div>
        </div>
    );
}

export default Interfaces;
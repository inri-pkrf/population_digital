
const mahoz = [
    {
        id: 1,
        name: "מכלול הנדסה",
        roles: [
            {
                idRole: 1,
                roleName: 'מהנדס מקלוט, בקרת נזקים ומיגון'
            },
            {
                idRole: 2,
                roleName: 'סמב"ץ ומש"ק פרויקטים'
            }
        ],
        explanation: [
            {
                titleExplanation: "ייעוד מכלול הנדסה",
                textExplanation:
                    [
                        <>
                            מכלול הנדסה ופרויקטים המחוזי, ירכז את כלל תחומי המיגון הפיזי הקיימים במרחבו, ינתח את המענה המיגוני אל מול האיום הקיים, ירכז את פערי המיגון ברשויות ודרישות המיגון המתפרץ, יעביר תמ"צ מיגון ויקצה מהנדסים לביצוע סקרי מיגון בשירותים חיוניים ברשויות, כל זאת על מנת להציל חיים ולחזק את חוסן האוכלוסייה.
                        </>
                    ],
            },
            {
                titleExplanation: "תפקידי מכלול הנדסה",
                textExplanation:
                    [
                        <>
                            1. יעוץ למפקד המכלול בתחום המיגון.<br /><br />
                            2. מנחה מקצועי של מהנדסי הנפות.<br /><br />
                            3. גיבוש תמ"ץ מיגון ונזקים מאירועים במרחב, ביצוע הערכת מצב וגיבוש המלצות מקצוע בתחום המיגון וההנדסה. <br /><br />
                            4. שיקוף תמ"ץ מיגון ונזקים והתייחסות מקצועית לדרישות שעולות מהמרחב האזרחי למיגון מתפרץ ולסקרי מיגון במסגרת
                            תהליך ההכנות שמתבצע במכלול האוכלוסייה לקראת פורום סיוע אזרחי ולקראת אישור ההחרגות במדיניות ההתגוננות.<br /><br />
                            5. קיום קשר רציף ועדכון הדדי למול מהנדסי הגדודים הרלוונטיים בפרטים ומשמעויות מאירוע, לרבות סיוע בקבלת תרשימי מבנים ממהנדסי הרשויות.<br /><br />
                            6. קיום קשר רציף עם תאים אחרים במכלול האוכלוסייה ועם מכלולים אחרים בנפה לצורך גיבוש המלצה למפקד המכלול
                            בתחום המיגון.<br /><br />
                            7. קיום קשר רציף עם תאים אחרים במכלול האוכלוסייה ועם מכלולים אחרים בנפה לצורך גיבוש המלצה למפקד המכלול
                            בתחום המיגון.<br /><br />
                            8. בקרה, מעקב ומענה מקצועי לפניות שהגיעו לתא מיגון והנדסה.<br /><br />
                        </>
                    ]
            }
        ],
        src: `${process.env.PUBLIC_URL}/assests/imgs/mahoz/handasa.svg`,
    },
    {
        id: 2,
        name: "מכלול חומ''ס",
        roles: [
            {
                idRole: 1,
                roleName: 'קצין חומ"ס וביקורות'
            },
            {
                idRole: 2,
                roleName: 'מש"ק חומ"ס'
            }
        ],
        explanation: [
            {
                titleExplanation: "ייעוד מכלול חומ''ס",
                textExplanation:
                    [
                        <>
                            מכלול החומ"ס יפעל מזעור סכנה לאוכלוסייה לנפש ולרכוש כתוצאה מפגיעה מלחמתית במתקן מחזיק חומ"ס במרחב המחוז.
                        </>
                    ],
            }, {
                titleExplanation: "תפקידי מכלול חומ''ס",
                textExplanation:
                    [
                        <>
                            1. ריכוז ויצירת תמונת מצב מחזיקי חומ"ס מחוזי כולל סטאטוס הוצאת צווים וביצועם.<br /><br />
                            2. ריכוז שאלות וסוגיות עקרוניות שעולות במחוז לדרג הפיקודי<br /><br />
                            3.  הנחיה מקצועית לנפה באירוע חומ"ס ובשגרת חירום, כולל תעדוףביקורות במחזיקים<br /><br />
                            4. הנחיית מחזיקי החומ"ס  בצווים בהתאם לסמכויות מתוקף חוק חג"א ( פקודת "חלב שקדים"), ובהתאם למדיניות ענף חומ"ס.<br /><br />
                            5. עדכון תמ"ץ מחזיקי חומ"ס מסכני אוכלוסיה.<br /><br />
                            6. ניהול תוכנית ביקורות מחזיקי חומ"ס.<br /><br />
                            7.  גזירת פקודת שינוע חומ"ס פיקודית, והורדתה לנפות.<br /><br />
                            8. התרעה למכלול חומייס פיקודי על חשש לאירוע חומייס, ועדכונו בהתפתחות אירוע קיים;<br /><br />
                            9. ווידוא ביצוע פעילות לצמצום סיכוי התפתחות של אירוע חומ"ס - תיאום הערכות מחוזית בהיבטי החומ"ס מול המשרד להגנת הסביבה וכב"ה;<br /><br />
                            10. יעוץ מקצועי למנלייח בתחום החומ"ס (כולל בעת אירוע חומייס); ריכוז פעילות מול הנפות, מכלול אוכלוסייה, מכלולים אחרים במחוז וגורמים חיצוניים.<br /><br />
                            11. שליטה במערכות שו"ב ייעודיות.<br /><br />
                        </>
                    ]
            }

        ],
        src: `${process.env.PUBLIC_URL}/assests/imgs/mahoz/homas.svg`,
    },
    {
        id: 3,
        name: "מכלול הסברה",
        roles: [
            {
                idRole: 1,
                roleName: 'סגן מפקד מכלול הסברה והדרכת אוכלוסייה'
            },
            {
                idRole: 2,
                roleName: 'קצין הסברה והדרכת אוכלוסייה'
            },
            {
                idRole: 3,
                roleName: 'מש"ק ניו מדיה'
            },
            {
                idRole: 4,
                roleName: 'דו"צ'
            },
            {
                idRole: 5,
                roleName: 'מתורגמן'
            }
        ],
        explanation: [
            {
                titleExplanation: "ייעוד מכלול הסברה",
                textExplanation:
                    [
                        <>
                            מכלול הסברה יגבש תכנית הסברה והדרכה לאוכלוסייה בתחומי התנהגות אזרחית ויפעילה, הטמעת מדיניות התגוננות שנקבעה ברמה הארצית למימוש הלכה למעשה בקרב רשויות המקומיות ומשרדי הממשלה וייצוג ההלימה בין המדיניות לשגרה החיים המתקיים בעת חירום בשטחה, יהווה מוקד ידע בתחום הנחיות ההתגוננות לציבור ומדיניות ההתגוננות עבור המפקדים והמרחב האזרחי.
                        </>
                    ],
            },
            {
                titleExplanation: "תפקידי מכלול הסברה",
                textExplanation:
                    [
                        <>
                            1. מנחה מקצועי למפקד המחוז בנושא הסברה והדרכת אוכלוסייה ומנחה מקצועי למערך ההסברה בנפה וביקל"ר.<br /><br />
                            2. ניתוח התנהגות האוכלוסייה וגיבוש תמונת מצב הסברתית במרחב ,הכוללת:<br />
                            -  ניטור וניתוח נושאי השיח המרכזיים<br />
                            - מיפוי הפערים בהבנת המידע<br />
                            - איתור קהילות הדורשות מענה הסברתי ייחודי<br />
                            - זיהוי צרכים ופערי הסברה בשטח<br />
                            -  שיקוף פעילויות ההסברה ברשויות המקומיות.<br />
                            <br /><br />
                            3. פיקוד תמונת מצב (אורכית) פיקוד-נפה-יקל"ר (ורחובית) התנהגות.רצ"ת.<br /><br />
                            4.  מדיניות ההתגוננות :<br />
                            - הטמעת מדיניות התגוננות שנקבעה ברמה הארצית בקרב הנפות והרשויות המקומיות<br />
                            - שיקוף את מימוש המדיניות בשטח ברשויות המקומיות<br />
                            -  ביצוע פורום החרגות מחוזי בהתאם לבקשות של הרשויות המגיעות מהנפות ,ולהעלות את ההחרגות המאושרות לפיקוד. <br />
                            <br /><br />
                            5.  העלאת דרישה לפיקוד להפצת הנחיות מצילות חיים בפלטפורמות השונות.<br /><br />
                            6. התאמת תוכניות ותוצרי ההסברה בהתאם למאפייני האוכלוסייה, לטווח הקצר והארוך.<br /><br />
                            7. הפעלת צוות טקטי באירועי אמת ,למינוף הצלחות או כשלנות בהסברה (לדוגמה :זיהוי מקרי הצלחה של הישמעות להנחיות
                            והצלת חיים ,ריכוז חומרים ויזואליים תומכים מהשטח).<br /><br />
                            8.  קיום שיח ושיתוף פעולה מול דוברי ארגוני החירום במרחב המחוז (לדוגמה אירוע חומ"ס /שריפה ופינוי אוכלוסייה)<br /><br />
                            9. הדרכות שטח -בניית תוכנית עבודה מחוזית להדרכות חירום לילדים/מבוגרים (מקומות עבודה חיוניים ,אוכלוסיות עם צרכים
                            מיוחדים)<br /><br />
                            10. נציג המכלול בקבוצת תכנון (אירועי חומ"ס ,חשמל ובק"ן).
                        </>
                    ],
            }
        ],
        src: `${process.env.PUBLIC_URL}/assests/imgs/mahoz/hasbara.svg`,
    },
    {
        id: 4,
        name: "מכלול התנהגות",
        roles: [
            {
                idRole: 1,
                roleName: 'סגן מפקד תא התנהגות'
            },
            {
                idRole: 2,
                roleName: 'מש"ק התנהגות'
            },
        ],
        explanation: [
            {
                titleExplanation: "ייעוד מכלול התנהגות",
                textExplanation:
                    [
                        <>
                            מכלול ההתנהגות יפעל לייצר תמונת והערכת מצב התנהגות אוכלוסייה, לתאם פעילות מול גורמים מקבילים בגופים האזרחיים ולהמליץ למפקדים על דרכי פעולה בתחומים השונים על מנת להשפיע על הכנת האוכלוסייה, יכולת התמודדותה עם המצב והתנהגותה במטרה להציל חיים ולחזק את החוסן.
                        </>
                    ],
            },
            {
                titleExplanation: "תפקידי מכלול התנהגות",
                textExplanation:
                    [
                        <>
                            1. גיבוש תמונת מצב התנהגות אוכלוסייה במרחב המחוז, המתייחסת להיבטי התנהגות אפקטיבית להצלת חיים, תפיסותיה חוסנה ויכולת ההתמודדות שלה.<br /><br />
                            2. ביצוע הערכת מצב עיתית במרחב המחוז, שתוצריה משמעויות והמלצות הנובעות מתמ"צ התנהגות האוכלוסיה.<br /><br />
                            3. ניתוח מגמות המשפיעות על החוסן האזרחי, תוך זיהוי התפתחויות אפשריות.<br /><br />
                            4. מתן מענה מקצועי בתחום התנהגות האוכלוסייה.<br /><br />
                            5. גיבוש המלצות למדיניות ולפעולות אופרטיביות תומכות חוסן בהתאם להערכת מצב.<br /><br />
                            6. סיוע בגיבוש המלצות למסרים ומידע לציבור, עיצוב התודעה והנרטיב.<br /><br />
                            7. שותפות בגיבוש המלצות להנחיות התגוננות לאוכלוסייה.<br /><br />
                            8. הנחיה מקצועית של מכלולי התנהגות אוכלוסייה הנפתיים.<br /><br />
                            9. ניתוח צורכי אוכלוסיות עם צרכים מיוחדים וגיבוש המלצות לפעולה. קיום פורום חשיבה קדימה לצורך ניתוח סוגיות שונות העולות או עלולות להתפתח בעקבות המצב ומתן המלצות למענה בתחום.<br /><br />
                            10. ניתוח צורכי מגזרים חרדיים ובני מיעוטים וגיבוש המלצות לפעולה.  קיום פורום חשיבה קדימה לצורך ניתוח סוגיות שונות העולות או עלולות להתפתח בעקבות המצב ומתן המלצות למענה בתחום.<br /><br />
                        </>
                    ],
            }
        ],
        src: `${process.env.PUBLIC_URL}/assests/imgs/mahoz/hitnahagot.svg`,
    },
    {
        id: 5,
        name: "מכלול רצ''ת",
        roles: [
            {
                idRole: 1,
                roleName: 'סגן מפקד מכלול רצ"ת',
                notes: [
                    <>
                        1. ייעוץ למפקד מכלול האוכלוסייה בתחום הרשויות המקומיות, אספקת שירותים חיוניים לאזרח והפעלת מתנדבים וסיוע אזרחי.<br /><br />
                        2. בקיאות במאפייני הרשויות המקומיות במרחב הנפה וחכרת סיווג ההתמודדות של הרשויות לאור ניתוח המרכיבים בשגרה.<br /><br />
                        3. ניתוח דרייחות יקליירים.<br /><br />
                        4. קיום שיח שוטף והנחייה מקצועית של מפקדי היקליירים.<br /><br />
                        5. קיום שיח שוטף עם מפקד מכלול רצית במחוז.<br /><br />
                        6. ניתוח תמונת מצב ומשמעויות מאופן התמודדות הרשויות המקומיות במרחב הנפה ומאספקת השירותים החיוניים במרחב הנפה, לרבות ניתוח המשמעויות למרחב ממדיניות ההתגוננות העדכנית לאזרחי ולסקטור החיוני.<br /><br />
                        7. גיבוש המלצות מקצועיות באשר לפעולות הנדרשות לצורך מענה לאתגרים במרחב האזרחי בתחום הרשויות המקומיות והשירותים החיוניים- לרבות תכנית לתמיכה ברשות מתקשה, תכנית מענה למפונים/ מתפנים, תכנית לתמיכה ברשות שנמצאת במשבר אנרגיה. <br /><br />
                        8. לאחר הערכת המצב הזנת רשויות במיקוד גבתי בשו"ב.<br /><br />
                        9. אישור תבנית סיוע אזרחי נפתנית שנכתבת ע"י ק' סיוע אזרתי ומתנדבים. <br /><br />
                        10. יתוח כלל הבקשות להחרגה ממדיניות ההתגוננות.<br /><br />
                        11. גיבוש המלצות מקצועיות באשר לאישור החרגות שעלו מהרשויות למדיניות ההתגוננות.<br /><br />
                        12. בקרה על מימוש פעולות לתמיכה במרחב האזרחי ולצמצום הסיכון לאוכלוסייה בתחום הרשויות המקומיות והשירותים החיוניים.<br /><br />
                        13. כתיבת סעיף רשויות מקומיות ושירותים חיוניים בנספח אוכלוסייה בפקודות נפתיות.<br /><br />
                        14. אחריות על המענה האוכלוסייתי לאירועים מתפרצים במרחב בתחום הרשויות והשירותים החיוניים. <br /><br />
                        15. בקרה ומעקב אחר סטאטוס מימוש הנחיות מפקדים בתחום הרשויות, אשר מרוכזות ע"י משייק הרשויות.<br /><br />
                        16. בלת תמונת מצב רשויות ושירותים חיוניים מחוזית ממכלול רצ"ת במרכז האוכלוסייה המחוזי.
                    </>

                ],
            },
            {
                idRole: 2,
                roleName: 'מפקד תא רשויות',
                notes: [
                    <>
                        <b>ייעוד:</b>
                        <br />
                        לגבש את תמונת מצב התמודדות הרשויות המקומיות.
                        <br /><br />

                        <b>תפקידי המכלול:</b>
                        <br />
                        1. לגבש תמונת מצב מתמשכת ועיתית של התמודדות הרשויות המקומיות ע"פ יעדי השירות.<br />
                        2. לגבש רשויות במיקוד וקשב מחוזי.<br />
                        3. גיבוש תמונת מצב מפונים ומתפנים עצמאית.<br />
                        4. זיהוי פערים, משמעויות ומגמות בהתמודדות הרשויות המקומיות ובניית תוכניות מענה בהתאם.<br />
                        5. קביעת סדרי עדיפות במתן סיוע אזרחי.<br />
                        6. העלאת צרכים העולים מן הרשויות בכלל התחומים.<br />
                    </>

                ],
                imgSrc: '/assests/imgs/mahoz/raztat1marsel.svg'
            },
            {
                idRole: 3,
                roleName: 'מפקד תא משרדי ממשלה',
                notes: [
                    <>
                        <b>ייעוד:</b>
                        <br />
                        לגבש את תמונת מצב הספקת השירותים של משרדי הממשלה המחוזית ע"פ היעדים הלאומיים. לתאם ולהכווין את
                        פעולת משרדי הממשלה והרשויות הייעודיות ע"פ מדיניות המרכז לרציפות התפקוד הפיקודי וומ"ע, לצורך הבטחת
                        רמות השירות של היעדים הלאומיים.
                        <br /><br />

                        <b>תפקידי המכלול:</b>
                        <br />
                        1. לגבש תמונת מצב מתמשכת ועיתית של הספקת השירותים.<br />
                        2. לאתר כשלים ביכולת הספקת השירותים ברמות השירות שנקבעו.<br />
                        3. לשחרר חסמים בהספקה של השירותים בתחומי הסמכות של המכלול.<br />
                        4. לאתר מגמות עתידיות ביכולת לספק את השירותים.<br />
                        5. גיבוש המלצות משרדי הממשלה והנחייתם בתחומי ההתגוננות האזרחית.<br />
                    </>
                ],
                imgSrc: '/assests/imgs/mahoz/raztat2memshala.svg'
            },
            {
                idRole: 4,
                roleName: 'מפקד תא מרס"ל',
                notes: [
                    <>
                        <b>ייעוד:</b>
                        <br />
                        מיצוי יכולות המרחב האזרחי למתן מענה אינטגרטיבי לצורכי אוכלוסיית היעד והמרחב המאוים באופן עיתי ומתמשך
                        בשיתוף משרדי ממשלה, רשויות מקומיות (דרך המחוזות), מגזר שלישי (ארגוני התנדבות), מגזר שני (עסקי) וצה"ל, וזאת
                        כדי לתמוך את התמודדות העורף עם אירועי חירום לאומי, כדוגמת רעידות אדמה, פנדמיות וכו'.
                        <br /><br />

                        <b>תפקידי המכלול:</b>
                        <br />
                        1. גיבוש הצרכים הקיימים בעורף והכוונת המענה תוך מיצוי היכולות הקיימות ושמירת היתרון היחסי של כל גוף ובתיאום הרשויות המקומיות, משרדי ממשלה, מגזר שלישי(ארגוני מתנדבים), שני וצה"ל.<br />
                        2. ניתוח תמונת המצב, ביצוע הערכת מצב ותעדוף המענה לפערים.<br />
                        3. מיפוי הצרכים לסיוע מהרשויות המקומיות באמצעות הנפות והמחוזות (ע"י דסק מחוזות), ממשרדי הממשלה ומארגוני המתנדבים תוך סנכרון עם תא רשויות.<br />
                        4. מתן מענה לפערים על ידי "בנק היכולות הארצי" באמצעות קישור לארגוני מתנדבים וחיבורם לרשויות המקומיות לצורך מתן מענה לצרכים; קיום שיח רציף עם ארגוני המגזר השני והשלישי; התאמת המענה לצרכים שעלו מהרשויות וממשרדי הממשלה.<br />
                        5. מעקב אחר מיצוי הכוח במענה לרשויות המקומיות, משרדי הממשלה והתשתיות והשפעה על סד"ע בחלוקת המשאבים:<br />
                        6. הפצת תובנות יומיות על המענה הניתן לרשויות ולארגונים.<br />
                        7. הצגת תמונת המצב הארצית של המענה שהוגדר על ידי מרכז הסיוע לאזרח ושניתן לעורף.<br />
                    </>
                ],
                imgSrc: '/assests/imgs/mahoz/raztat2rasoiot.svg'
            }
        ],
        explanation: [
            {
                titleExplanation: "ייעוד מכלול רשויות",
                textExplanation:
                    [
                        <>
                   לגבש את תמונת מצב רציפות התפקוד המחוזית במרחב האזרחי, לתאם, להכווין ולסייע לפעילות משרדי הממשלה המחוזים , הרשויות הייעודיות והרשויות המקומיות לצורך אספקת שירותים חיוניים לאזרח ועמידה ברמות השירות של היעדים הלאומיים.
                        </>
                    ],
            }, {
                titleExplanation: "תפקידי מכלול רשויות",
                textExplanation:
                    [
                        <>
                            1. בניית תמ"ץ תפקוד רשויות מקומיות ומתן שירותים חיוניים לאזרח בגזרת המחוז.<br /><br />
                            2. ריכוז דרישות סיוע אזרחי וניהול פורום סיוע אזרחי ברמת המרכז.<br /><br />
                            3.  בניית תמייצ מתנדבים רמת המחוז.<br /><br />
                            4. מנחה מקצועי של תאי הרשויות בנפות.<br /><br />
                            5. בקיאות במדיניות התגוננות לסקטור חיוני וריכוז בקשות רשויות להחרגות ממדיניות התגוננות.<br /><br />
                            6.  העברה ווידוא הטמעה של הנחיות התגוננות לרשויות מקומיות.<br /><br />
                            7. אחריות לעדכון יקל"רים רלוונטיים בפרטים ומשמעויות מאירוע, בתכנית טיפול נפתית באירוע, בהנחיות הנפה ודרישות סיוע
                            מרשות לטיפול באירוע<br /><br />
                            8. ניתוח דו"חות יקל"רים באמצעות שו"ב – דשבורד רשויות.<br /><br />
                            9. ירכז ויתעדף את דרישות הסיוע האזרחי מהנפות.<br /><br />
                            10. נציג המכלול הפורומים - סיוע אזרחי וסד"כ ואמצעים.<br /><br />
                            11. ירכז את תחום הרשויות .<br /><br />
                            12. הובלת פורום סיוע אזרחי ונציג המכלול בפורום סד"כ ואמצעים. <br /><br />
                        </>
                    ],
            }
        ],
        src: `${process.env.PUBLIC_URL}/assests/imgs/mahoz/raztat.svg`,
    },
    {
        id: 6,
        name: "אג''ם אוכלוסייה",
        roles: [
            {
                idRole: 1,
                roleName: 'קמב"ץ אוכלוסייה'
            },
            {
                idRole: 2,
                roleName: 'סמב"ץ אוכלוסייה'
            }
        ],
        explanation: [
            {
                titleExplanation: "ייעוד מכלול מבצעים",
                textExplanation:
                    [
                        <>
                            מכלול מבצעים אוכלוסייה אחראי תוך כדי ניהול הקרב המחוזי לשלוט באופן רציף בתמונת המצב של המרכז במחוז על מרכיביה ויחידותיה תוך שהוא מהווה גורם מקצועי למפקד המרכז לשליטה, בקרה וקבלת החלטות בתחום האוכלוסייה.                        </>
                    ],
            },
            {
                titleExplanation: "תפקידי מכלול מבצעים",
                textExplanation:
                    [
                        <>
                            1. שיקוף תמ"צ אג"ם באופן שוטף ואירועים מתפרצים בהתאם לתפניות.<br /><br />
                            2. שיקוף סדר עדיפות רמה ממונה בהתייחס לתמ"צ.<br /><br />
                            3. גיבוש תמ"צ מכלל המכלולים/התאים עפ"י תהליכים מבצעיים באופן תכליתי, מהימן ורלוונטי.<br /><br />
                            4. אימות מידע שמגיע מהציר האורכי והרוחבי.<br /><br />
                            5. תכלול והובלת הערכת מצב מרכז אוכלוסייה.<br /><br />
                            6. קיום קשר עם מכלול מבצעים אוכלוסייה בציר האורכי.<br /><br />
                            7. עבודה על פי שעון לחימה סדור ובתוך כך מופעי שעל"ח, היערכות מקדימה אליהם, הפקת תוצרים רלוונטיים והפצת סיכומים.<br /><br />
                            8. תרגום החלטות מרכז/מכלול אוכלוסייה לתוצרים אופרטיבים (פקודות).<br /><br />
                            9. ניתוב פניות שמגיעים למכלול לטיפול המכלולים המקצועיים הרלוונטים במרכז.<br /><br />
                            10. ביצוע בקרה ומעקב אחר הנחיות מפקדים.<br /><br />
                            11. ניהול יומן מבצעים ועזרי שליטה ממחושבים וידניים.<br /><br />
                            12. ביצוע אינטגרציה וסנכרון בין כלל התאים במכלול עפ"י תמ"צ, סד"ע וצייחי מפקד .<br /><br />
                            13. ניהול תהליך מבצעי לבקשות סיוע לתא סד"כ ואמצעים מול אג"ם המחוז.<br /><br />
                            14. ריכוז הדרישות מהתאים המקצועיים.<br /><br />
                            15. הבחנה בין סיוע אזרחי לצבאי ותוך סנכרון מול המרס"ל.<br /><br />
                            16. היזון חוזר לגבי דרישות שנענו או נשללו בהתאמה, תוך עדכון מפקדים.<br /><br />
                        </>
                    ],
            },

        ],
        src: `${process.env.PUBLIC_URL}/assests/imgs/mahoz/ohlosia.svg`,
    },

]

export default mahoz;
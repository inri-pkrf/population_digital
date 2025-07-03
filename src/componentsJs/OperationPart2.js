import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../componentsCss/OperationPart2.css';
import operation from "../data/OperationData";


function OperationPart2() {
    const navigate = useNavigate();
    const location = useLocation();
    const selectedOption = location.state?.selectedOption;

    const [expanded, setExpanded] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const getTitleColor = () => {
        if (selectedOption === 'הערכת מצב מרחב אזרחי') return '#235884';
        if (selectedOption === 'תהליך מדיניות התגוננות') return '#ff9a3c';
        return '#7fa9e8';
    };

    const selectedData = operation.find(item => item.title === selectedOption);

    const handleToggle = (index) => {
        setExpanded(expanded === index ? null : index);
    };

    const renderImagesArray = (imagesArray) => {
        if (Array.isArray(imagesArray) && imagesArray.length > 0) {
            return imagesArray.map((img, idx) => (
                <img
                    key={idx}
                    src={process.env.PUBLIC_URL + img}
                    alt={`img-${idx}`}
                    className="operation-img"
                />
            ));
        } else {
            return <div className="accordion-line">לא הוזן</div>;
        }
    };

    const accordionItemsRaw = [
        { title: "תוצרים", content: selectedData?.products, isList: true },
        { title: "מערכות ויישומים", content: selectedData?.systems, isList: true },
        { title: "מקורות מידע", content: selectedData?.sources, isList: true },
        {
            title: "התהליך בזירה האזרחית",
            content: renderImagesArray(selectedData?.dashboardImgs),
            isImages: true,
            raw: selectedData?.dashboardImgs,
        },
        {
            title: "תהליך אורכי",
            content: renderImagesArray(selectedData?.axisImg),
            isImages: true,
            raw: selectedData?.axisImg,
        },
    ];

    const accordionItems = accordionItemsRaw.filter(item => {
        if (item.isImages) {
            return Array.isArray(item.raw) && item.raw.length > 0;
        }
        return Array.isArray(item.content) ? item.content.length > 0 : !!item.content;
    });

    return (
        <div className="OperationPart2">
            <div className='btn-back-part1' onClick={() => navigate('/operationPart1')}>
                חזרה לבחירת תהליך →
            </div>

            <h1 className='title2-operation' style={{ color: getTitleColor() }}>
                תהליך {selectedOption}
            </h1>

            <div className='accordionItems-div'>
                {accordionItems.map((item, index) => (
                    <div key={index} className="accordion-item-operation">
                        <div
                            className="accordion-header-operation"
                            onClick={() => handleToggle(index)}
                        >
                            <div>{item.title}</div>
                            <img
                                src={`${process.env.PUBLIC_URL}/assests/imgs/nextBlack.png`}
                                className={`accordion-arrow ${expanded === index ? 'rotated' : ''}`}
                                alt="arrow"
                            />
                        </div>

                        {expanded === index && (
                            <div className="accordion-body-operation">
                                {item.isList && Array.isArray(item.content) ? (
                                    <ul className="accordion-list">
                                        {item.content.map((line, idx) => (
                                            <li key={idx} className="accordion-line">{line}</li>
                                        ))}
                                    </ul>
                                ) : Array.isArray(item.content) ? (
                                    item.content.map((line, idx) => (
                                        <div key={idx} className="accordion-line">{line}</div>
                                    ))
                                ) : (
                                    item.content
                                )}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div className='footer-operation2'></div>


        </div>
    );
}

export default OperationPart2;
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../componentsCss/Intro.css';

const Intro = () => {
  const [isVideoEnded, setIsVideoEnded] = useState(false);
  const [showIntro, setShowIntro] = useState(false);
  const [showSkipButton, setShowSkipButton] = useState(false);
  const [videoSrc, setVideoSrc] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 769) {
        setVideoSrc(`${process.env.PUBLIC_URL}/assests/videos/introVidComp.mp4`);
      } else {
        setVideoSrc(`${process.env.PUBLIC_URL}/assests/videos/introVid.mp4`);
      }
    };

    // Initial check on mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const videoEndTimeout = setTimeout(() => {
      setIsVideoEnded(true);
    }, 13000);

    const introTextTimeout = setTimeout(() => {
      setShowIntro(true);
    }, 13050);

    const skipButtonTimeout = setTimeout(() => {
      setShowSkipButton(true);
    }, 3500);

    return () => {
      clearTimeout(videoEndTimeout);
      clearTimeout(introTextTimeout);
      clearTimeout(skipButtonTimeout);
    };
  }, []);

  const skipVideo = () => {
    setIsVideoEnded(true);
    setShowIntro(true);
  };

  const goToHome = () => {
    navigate('/home');
  };

  return (
    <div id="intro">
       {!isVideoEnded && (
                <>
                    {showSkipButton && (
                        <button className="skip" onClick={skipVideo}>
                            &lt;&lt; דלג/י
                        </button>
                    )}
                    {videoSrc && (
                        <video className="video-intro" autoPlay muted playsInline>
                            <source src={videoSrc} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    )}
                </>
            )}
      {showIntro && (
        <div className="intro-text-slide-in">
          <img
            src={`${process.env.PUBLIC_URL}/assests/imgs/whiteLogo.png`}
            alt="White Logo"
            id="logo-white"
            className="move-to-center"
          />
          <h1 id="welcome-text-intro">
            עזר דיגיטלי בתחום
            <br />
            האוכלוסייה במפקדות
          </h1>
          <p id="introduction-sub">
            ברוכים הבאים ללומדת אוכלוסייה במפקדות! בעזר זה תוכלו להעמיק וללמוד על מבנה, ייעוד ותפקידי מרכז אוכלוסייה במחוז ומכלול אוכלוסייה בנפה ותפקידי בע"ת השונים. בנוסף תלמדו על הממש"קים ויחס"ג בין המכלולים והתאים השונים ועל התהליכים המבצעיים באוכלוסייה.
          </p>
          <img
            src={`${process.env.PUBLIC_URL}/assests/imgs/whiteArrow.png`}
            className="hpArrow-intro"
            alt="Arrow"
            onClick={goToHome}
          />
        </div>
      )}
    </div>
  );
};

export default Intro;

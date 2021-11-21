import React from 'react';
import '../../css/IntroView.css';
import Pic2 from '../../images/pexels-pixabay-315998.jpg';
import Pic1 from '../../images/1200px-Aryane_Steinkopf.jpg';
import Pic3 from '../../images/pexels-fabian-wiktor-994605.jpg';

function IntroView() {
    return (
        <section className="intro-view">
            <div className="intro-pics">
                <img src={Pic1} alt="" style={{gridArea:"img1"}}></img>
                <img src={Pic2} alt="" style={{gridArea:"img2"}}></img>
                <img src={Pic3} alt="" style={{gridArea:"img3"}}></img>
            </div>
            <div className="intro-details">
                <img src="welcome.png" alt=""></img>
                <h1>Upgrade Your Experience</h1>
                <p>Lorem Ipsum Generator. Generate Lorem Ipsum placeholder text. Select the number of characters, 
                    words, sentences or paragraphs, and hit generate! Generated Lorem Ipsum. Copy. Lorem ipsum 
                    dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                    nisi ut aliquip ex ea commodo </p>
                <button>READ MORE</button>
            </div>
        </section>
    );
}

export default IntroView;
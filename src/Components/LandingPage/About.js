import React, { useEffect } from 'react';
import '../../css/About.css';
import Pic from '../../images/0.jpg';

function About() {
    return (
        <section id="about" className="about">
            <div className="virtual-view">
                <img src="play_button.png" alt=""></img>
                <p>VIRTUAL TOUR</p>
                <p>OF ZILLA RESORT</p>
            </div>
            <div className="satisfaction">
                <div className="statis-card">
                    <h1>720</h1>
                    <div>
                        <p>NEW</p>
                        <p>FRIENDSHIPS</p>
                    </div>
                </div>
                <div className="statis-card">
                    <h1>214</h1>
                    <div>
                        <p>INTERNATIONAL</p>
                        <p>GUESTS</p>
                    </div>
                </div>
                <div className="statis-card">
                    <h1>450</h1>
                    <div>
                        <p>FIVE STAR</p>
                        <p>RATING</p>
                    </div>
                </div>
                <div className="statis-card">
                    <h1>810</h1>
                    <div>
                        <p>SERVED</p>
                        <p>BREAKFAST</p>
                    </div>
                </div>
            </div>
            <div className="about-words">
                <img src={Pic} alt=""></img>
                <div>
                    <p data-icon='"'>Lorem Ipsum Generator. Generate Lorem Ipsum placeholder text. Select 
                        the number of characters, words, sentences or paragraphs, and hit generate!
                         Generated Lorem Ipsum. Copy. Lorem ipsum dolor sit amet, consectetur 
                         adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                          laboris nisi ut aliquip ex ea commodo </p>
                    <span>-MICHELA JOHN</span>
                    <p>Ceo of Miranda</p>
                </div>
            </div>
        </section>
    );
}

export default About;
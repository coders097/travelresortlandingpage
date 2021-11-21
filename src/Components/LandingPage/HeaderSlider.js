import React, { useEffect } from 'react';
import '../../css/HeaderSlider.css';
import Image1 from '../../images/7010408-relaxing-resort-evening.jpg';
import Image2 from '../../images/top.jpg';
import Image3 from '../../images/6050f51d33585.jpg';


const HeaderSlider = () => {
    useEffect(()=>{
        // transition: all ease-in-out 0.2s;
        let no=0;
        let slides=document.querySelector('.slides');
        document.querySelector(".controls>button:first-of-type").addEventListener('click',()=>{
            if(no===0) {
                slides.style.transition="unset";
                no=3;
                slides.style.transform=`translateX(${no*-100}vw)`;
                setTimeout(()=>{
                    slides.style.transition="all ease-in-out 0.2s";
                    no--;
                    slides.style.transform=`translateX(${no*-100}vw)`;
                },50);
                return;
            }
            no--;
            slides.style.transform=`translateX(${no*-100}vw)`;
        });
        document.querySelector(".controls>button:last-of-type").addEventListener('click',()=>{
            if(no===3) {
                slides.style.transition="unset";
                no=0;
                slides.style.transform=`translateX(${no*-100}vw)`;
                setTimeout(()=>{
                    slides.style.transition="all ease-in-out 0.2s";
                    no++;
                    slides.style.transform=`translateX(${no*-100}vw)`;
                },50);
                return;
            }
            no++;
            slides.style.transform=`translateX(${no*-100}vw)`;
        });
        slides.style.transition="all ease-in-out 0.2s";
    },[]);
    return (
        <>
        <div id="slider">
            <div className="slides">
                <div className="box">
                    <img src={Image1} alt=""></img>
                    <div className="header-details">
                        <h1 style={{color:"var(--bg-light)"}}>Spend Quality Holidays With Us</h1>
                        <p style={{color:"var(--bg-light)"}}>Enjoy the best of the best features</p>
                        <button>RESERVE NOW</button>
                    </div>
                </div>
                <div className="box">
                    <img src={Image2} alt=""></img>
                    <div className="header-details">
                        <h1 style={{color:"var(--bg-light)"}}>Spend A Moment With Beauty Of Nature</h1>
                        <p style={{color:"var(--bg-light)"}}>Enjoy the Green Aura</p>
                        <button>VISIT NOW</button>
                    </div>
                </div>
                <div className="box">
                    <img src={Image3} alt=""></img>
                    <div className="header-details">
                        <h1 style={{color:"var(--bg-light)"}}>See The Skyline View Only With Us</h1>
                        <p style={{color:"var(--bg-light)"}}>Visit the top of the world</p>
                        <button>EXPERIENCE NOW</button>
                    </div>
                </div>
                <div className="box">
                    <img src={Image1} alt=""></img>
                    <div className="header-details">
                        <h1 style={{color:"var(--bg-light)"}}>Spend Quality Holidays With Us</h1>
                        <p style={{color:"var(--bg-light)"}}>Enjoy the best of the best features</p>
                        <button>RESERVE NOW</button>
                    </div>
                </div>
            </div>
            <div className="controls">
                <button><i className="fa fa-arrow-left" aria-hidden="true"></i></button>
                <button><i className="fa fa-arrow-right" aria-hidden="true"></i></button>
            </div>
        </div>
        </>
    );
};

export default HeaderSlider;
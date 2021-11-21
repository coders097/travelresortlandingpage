import React, { useEffect } from 'react';
import '../../css/GallerySlider.css';
import Img1 from '../../images/pexels-fabian-wiktor-994605.jpg';
import Img2 from '../../images/pexels-pixabay-462024.jpg';
import Img3 from '../../images/pexels-vincent-gerbouin-1172518.jpg';
import Img4 from '../../images/pexels-pixabay-315998.jpg';
import Img5 from '../../images/intercontinental-phu-quoc-5630347934-2x1.jpg';


function GallerySlider() {
    let slidesView=React.createRef();
    useEffect(()=>{
        let slides=slidesView.current;
        slides.style.gridTemplateColumns=`repeat(${slides.children.length},1fr)`;
        let initialPosition=0; 

        // Mouse Events
        let cursorDragging=false;
        let startCursor=0;
        slides.addEventListener('mousedown',(e)=>{
            cursorDragging=true;
            startCursor=e.clientX;
        });
        slides.addEventListener('mousemove',(e)=>{
            if(cursorDragging){
                if(initialPosition+e.clientX-startCursor>0){
                    slides.style.transform=`translateX(${0}px)`;
                    initialPosition=0;
                }else if(initialPosition+e.clientX-startCursor<-(slides.scrollWidth-slides.clientWidth)){
                    slides.style.transform=`translateX(${-(slides.scrollWidth-slides.clientWidth)}px)`;
                }
                else
                    slides.style.transform=`translateX(${initialPosition+e.clientX-startCursor}px)`;
            }
        });
        slides.addEventListener('mouseup',(e)=>{
            if(cursorDragging){
                cursorDragging=false;
                initialPosition=initialPosition+(e.clientX-startCursor);
                if(initialPosition<-(slides.scrollWidth-slides.clientWidth)) 
                    initialPosition=-(slides.scrollWidth-slides.clientWidth);
            }
        });
        slides.addEventListener('mouseleave',(e)=>{
            if(cursorDragging){
                cursorDragging=false;
                initialPosition=initialPosition+(e.clientX-startCursor);
                if(initialPosition<-(slides.scrollWidth-slides.clientWidth)) 
                    initialPosition=-(slides.scrollWidth-slides.clientWidth);
            }
        });

        // Touch Events
        let touchDragging=false;
        let startTouch=0;
        let lastTouchInfo;
        slides.addEventListener('touchstart',(e)=>{
            touchDragging=true;
            startTouch=e.touches[0].clientX;
            lastTouchInfo=0;
        });
        slides.addEventListener('touchmove',(e)=>{
            if(touchDragging){
                lastTouchInfo=e.touches[0].clientX-startTouch;
                if(initialPosition+e.touches[0].clientX-startTouch>0){
                    slides.style.transform=`translateX(${0}px)`;
                    initialPosition=0;
                }else if(initialPosition+e.touches[0].clientX-startTouch<-(slides.scrollWidth-slides.clientWidth)){
                    slides.style.transform=`translateX(${-(slides.scrollWidth-slides.clientWidth)}px)`;
                }
                else
                    slides.style.transform=`translateX(${initialPosition+e.touches[0].clientX-startTouch}px)`;
            }
        });
        // lastTouchInfo e.clientX-startCursor
        slides.addEventListener('touchend',(e)=>{
            if(touchDragging){
                touchDragging=false;
                initialPosition=initialPosition+(lastTouchInfo);
                if(initialPosition<-(slides.scrollWidth-slides.clientWidth)) 
                    initialPosition=-(slides.scrollWidth-slides.clientWidth);
            }
        });
    },[slidesView]);
    return (
        <div className="slider">
            <div className="slides" ref={slidesView}>
                <div className="slide">
                    <img src={Img1} alt="" draggable="false"/>
                </div>
                <div className="slide">
                    <img src={Img2} alt="" draggable="false"/>
                </div>
                <div className="slide">
                    <img src={Img3} alt="" draggable="false"/>
                </div>
                <div className="slide">
                    <img src={Img4} alt="" draggable="false"/>
                </div>
                <div className="slide">
                    <img src={Img5} alt="" draggable="false"/>
                </div>
            </div>
        </div>
    );
}

export default GallerySlider;
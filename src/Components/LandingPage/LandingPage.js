import React from 'react';
import About from './About';
import Blog from './Blog';
import CheckInRooms from './CheckInRooms';
import Contact from './Contact';
import Gallery from './Gallery';
import HeaderSlider from './HeaderSlider';
import IntroView from './IntroView';
import '../../css/LandingPage.css';
import RoomsSection from './RoomsSection';
import Services from './Services';

function LandingPage(props) {  
    return (
        <>
        <main>
            <HeaderSlider/>
            <CheckInRooms/>
            <IntroView/>
            <RoomsSection/>
            <Blog/>
            <About/>
            <Services/>
            <Gallery/>
            <Contact/>
        </main>
        </>
    );
}

export default LandingPage;
import React, { useEffect } from 'react';
import '../css/Navbar.css';
import {HashLink as Link} from 'react-router-hash-link';


const Navbar = () => {
    useEffect(()=>{
        function navbarInit(){
            let navIcon=document.querySelector('nav .nav-icon');
            let navLinksDisplay=document.querySelector('nav .nav-links');
            navIcon.addEventListener('click',()=>{
                navIcon.classList.toggle('nav-icon-active');
                navLinksDisplay.classList.toggle('nav-links-mobile');
            });
        }
        navbarInit();
    },[]);
    
    return (
        <>
            <div className="nav-pop-up">
                <div>
                    <p><i className="fa fa-phone" aria-hidden="true"></i>
 +45 847 457 1542</p>
                    <p><i className="fa fa-envelope-o" aria-hidden="true"></i>
 info@zillaresorts.com</p>
                </div>
                <div>
                    <a href="#"><i className="fa fa-facebook-official" aria-hidden="true"></i></a>
                    <a href="#"><i className="fa fa-twitter-square" aria-hidden="true"></i></a>
                    <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                </div>
            </div>
            <nav>
                <div className="logo">
                    <img src="main_logo.png"></img>
                </div>
                <div className="nav-icon">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="nav-links">
                    <Link to="/">HOME</Link>
                    <Link to="/#rooms">ROOMS</Link>
                    <Link to="/#blog">BLOG</Link>
                    <Link to="/#about">ABOUT</Link>
                    <Link to="/#contact">CONTACT</Link>
                    <div>
                        <p><i className="fa fa-search" aria-hidden="true"></i></p>
                        <div className="search-box">
                            <input type="text" placeholder="Search for rooms"></input>
                            <button>FIND</button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
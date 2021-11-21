import React from 'react';
import '../../css/Services.css';

function Services() {
    return (
        <section className="services">
            <div>
                <h2>OUR SERVICES</h2>
                <p>Lorem ipsum dolor sit amet consectetur, 
                    adipisicing elit. Labore, cumque 
                    reiciendis!</p>
                <a href="#">VIEW ALL SERVICES</a>
            </div>
            <div className="service-card">
                <p><i className="fa fa-wifi" aria-hidden="true"></i></p>
                <h2>FREE WIFI</h2>
                <p>Lorem ipsum dolor sit amet consectetur, 
                    adipisicing elit. Labore, cumque 
                    reiciendis!</p>
            </div>
            <div className="service-card">
                <p><i className="fa fa-coffee" aria-hidden="true"></i></p>
                <h2>BREAKFAST</h2>
                <p>Lorem ipsum dolor sit amet consectetur, 
                    adipisicing elit. Labore, cumque 
                    reiciendis!</p>
            </div>
            <div className="service-card">
                <p><i className="fa fa-paw" aria-hidden="true"></i></p>
                <h2>PETS ALLOWED</h2>
                <p>Lorem ipsum dolor sit amet consectetur, 
                    adipisicing elit. Labore, cumque 
                    reiciendis!</p>
            </div>
        </section>
    );
}

export default Services;
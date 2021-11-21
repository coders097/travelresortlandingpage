import React from 'react';
import '../css/PageNotFound.css';
import Pic1 from '../images/pexels-pixabay-315998.jpg';

const PageNotFound = (props) => {
    let goToHomePage=()=>{
        props.history.push('/');
    };
    return (
        <section className="PNF">
            <img src={Pic1}
            alt="">
            </img>
            <div className="details">
                <h1>404</h1>
                <p>Looks like you have been lost!</p>
                <button onClick={()=>goToHomePage()}>GO TO HOME</button>
            </div>
        </section>
    );
};

export default PageNotFound;
import React, { useContext, useEffect } from 'react';
import '../../css/RoomsSection.css';
import {ResortContext} from '../App';
import { useHistory } from 'react-router';

function RoomsSection() {
    let data=useContext(ResortContext);
    useEffect(()=>{
    },[data]);
    const history=useHistory();
    let goToAllRoomsPage=()=>{
        let path="/rooms";
        history.push(path);
    };
    let goToParticularPage=(data)=>{
        history.push({
            pathname:'/view-room',
            state:{data:data}
        });
    };
    return (
        <section id="rooms" className="rooms">
            <div className="room-heading">
                <div>
                    <h1>EXPLORE OUR <span>ROOMS</span></h1>
                    <p>Choose according to your budget!</p>
                </div>
                <button onClick={()=>goToAllRoomsPage()}>VIEW ALL ROOMS</button>
            </div>
            <div className="room-view">
                {
                    data.map((part,i)=>part['fields']['featured']?<React.Fragment key={i}><div className="room-card">
                        <img src=
                            {part.fields['images'][0]}
                        alt=""></img>
                        <div className="room-details">
                            <div>
                                <p>{part.fields['name']}</p>
                                <p>{part.fields['type']}</p>
                            </div>
                            <div>
                                <p>${part.fields['price']}<span> / day</span></p>
                                <button onClick={()=>goToParticularPage(part)}>VIEW DETAILS</button>
                            </div>
                        </div>
                    </div></React.Fragment>:"")
                }
            </div>
        </section>
    );
}

export default RoomsSection;
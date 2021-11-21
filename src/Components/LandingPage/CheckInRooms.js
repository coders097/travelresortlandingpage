import React, { createRef, useState } from 'react';
import Calender from './Calender';
import '../../css/CheckInRooms.css';

const CheckInRooms = () => {
    let arivalInput=createRef();
    let departureInput=createRef();
    let roomInfo=createRef();
    let adultsNo=createRef();
    let childrenNo=createRef();
    let [checkInState,setCheckInState]=useState(false);
    let checkInForRooms=()=>{
        let req={
            arrivalDate:arivalInput.current.value,
            departureDate:departureInput.current.value,
            noOfAdults:adultsNo.current.value,
            noOfChildren:childrenNo.current.value
        }
        let res=submitData(req);
        setCheckInState(true);
        roomInfo.current.innerText=`Found ${res.rooms} rooms for your choice!`;
    }
    let submitData=(data)=>{
        console.log(data);
        return {
            rooms:5
        };
    }
    return (
        <section className="check-in-room">
            <div className="check-in-form">
                <div className="calender-input">
                    <input type="text" placeholder="ARRIVAL DATE" ref={arivalInput}></input>
                    <p><i className="fa fa-calendar" aria-hidden="true"></i></p>
                    <div className="show-calender">
                        <Calender input={arivalInput}/>
                    </div>
                </div>
                <div className="calender-input">
                    <input type="text" placeholder="DEPERATURE DATE" ref={departureInput}></input>
                    <p><i className="fa fa-calendar" aria-hidden="true"></i></p>
                    <div className="show-calender">
                        <Calender input={departureInput}/>
                    </div>
                </div>
                <select defaultValue={"ADULTS"} ref={adultsNo}>
                    <option>ADULTS</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
                <select defaultValue={"CHILDREN"} ref={childrenNo}>
                    <option>CHILDREN</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
                <button onClick={()=>checkInForRooms()}>CHECK AVALABILITY</button>
            </div>
            <div className="check-in-info">
                <h1 ref={roomInfo}>Search for your rooms!</h1>
                {checkInState?<button>Check Out Your Rooms</button>:null}
            </div>
            {/* <h1>There are currently 5 different rooms left</h1>
             */}
        </section>
    );
};

export default CheckInRooms;
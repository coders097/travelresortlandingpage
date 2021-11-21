import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { ResortContext } from '../App';
import '../../css/Rooms.css';

const Rooms = (props) => {
    let [data,setData]=useState([]);
    let [currData,setCurrData]=useState([]);
    let getData=useContext(ResortContext);
    const history=useHistory();
    let roomType=React.createRef();
    let lowSize=React.createRef();
    let highSize=React.createRef();
    let price=React.createRef();
    let breakFast=React.createRef();
    let pets=React.createRef();
    let priceTag=React.createRef();

    useEffect(()=>{
        setData(getData);
        setCurrData(getData);
    },[getData]);
    let goToParticularPage=(data)=>{
        history.push({
            pathname:'/view-room',
            state:{data:data}
        });
    };
    let filterResults=()=>{
        let temp=data.filter(part=>{
            let toTakeOrNot=true;
            if(roomType.current.value!=='all')
                toTakeOrNot=toTakeOrNot && (part.fields.type===roomType.current.value);
            if(lowSize.current.value.trim()!=='')
                toTakeOrNot=toTakeOrNot && (part.fields.size>=parseInt(lowSize.current.value.trim()));
            if(lowSize.current.value.trim()!=='')
                toTakeOrNot=toTakeOrNot && (part.fields.size>=parseInt(lowSize.current.value.trim()));
            toTakeOrNot=toTakeOrNot && (part.fields.price>=parseInt(price.current.value.trim()));
            if(pets.current.checked)
                toTakeOrNot=toTakeOrNot && (part.fields.pets===pets.current.checked);
            if(breakFast.current.checked)
                toTakeOrNot=toTakeOrNot && (part.fields.breakfast===breakFast.current.checked);
            return toTakeOrNot;
        });
        setCurrData(temp);
    };
    return (
        <section className="all-rooms">
            <div className="filter-rooms">
                <h1>Search For Your Dream Room</h1>
                <div className="filter-controls">
                    <select defaultValue="all" ref={roomType}>
                        <option value="all">all</option>
                        <option value="presidential">presidential</option>
                        <option value="family">family</option>
                        <option value="double">double</option>
                        <option value="single">single</option>
                    </select>
                    <div>
                        <p>Room Size</p>
                        <div>
                            <input type="number" ref={lowSize}></input>
                            <input type="number" ref={highSize}></input>
                        </div>
                    </div>
                    <div>
                        <p>Price</p>
                        <input type="range" min='100' max='600' ref={price} onChange={(e)=>priceTag.current.innerText=`$ ${e.target.value}`}></input>
                        <h3 ref={priceTag}>$ 100</h3>
                    </div>
                    <div>
                        <div><input type="checkbox" ref={breakFast}></input> Breakfast</div>
                        <div><input type="checkbox" ref={pets}></input> Pets</div>
                    </div>
                    <button onClick={()=>filterResults()}>SEARCH</button>
                </div>
            </div>
            <div className="room-view">
                {
                    currData.map((part,i)=>{
                    return <React.Fragment key={i}><div className="room-card">
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
                    </div></React.Fragment>;})
                }
            </div>
            {currData.length===0?<div className="room-view-default">
                <img src="welcome.png" alt=""></img>
                <h1>Sorry! We got nothing for this interest. Please change a bit!</h1>
            </div>:null}
        </section>
    );
};

export default Rooms;
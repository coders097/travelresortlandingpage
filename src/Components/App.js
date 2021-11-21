import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
import '../css/App.css';
import Navbar from './Navbar';
import Rooms from './AllRooms/Rooms';
import RoomView from './RoomView/RoomView';
import PageNotFound from './PageNotFound';
import LandingPage from './LandingPage/LandingPage';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Footer from './Footer';

export const ResortContext = createContext();
function App(){
  const [resortData,setResortData] = useState([]);
  let loader=React.createRef();
  useEffect(()=>{
    setTimeout(()=>{
      if(loader.current) loader.current.style.opacity=0;
      setTimeout(()=>{
        if(loader.current) loader.current.style.display="none";
      },100);
    },5000);
  },[loader]);

  useEffect(()=>{
    async function getResortData(){
      let res=await axios.get('https://cdn.contentful.com/spaces/qcqepeehfvr6/environments/master/entries?access_token=bYVWfY9VuE8iljAd19LoUQZFt-AM2Mde3ysJZnU5zYE');
      setResortData(res.data.items);
    }
    getResortData();
  },[]);
  return (
    <ResortContext.Provider value={resortData}>
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/" render={props=><LandingPage {...props}/>}/>
          <Route path="/rooms" render={props=><Rooms {...props}/>}/>
          <Route path="/view-room" render={props=><RoomView {...props}/>}/>
          <Route render={props=><PageNotFound {...props}/>}/>
        </Switch>
        <Footer/>
        <div className="loading-screen" ref={loader}>
          <div className="loader">
            <img src="welcome.png" alt=""></img>
          </div>
        </div>
      </Router>
    </ResortContext.Provider>
  );
};

export default App;
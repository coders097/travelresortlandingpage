import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import "../../css/RoomView.css";

const RoomView = (props) => {
  const [data, setData] = useState({});
  const location = useLocation();
  let picViewer = React.createRef();
  let picViewerSrc = React.createRef();
  let showPicViewer = (src) => {
    picViewerSrc.current.src=src;
    picViewer.current.style.display='flex';
    setTimeout(()=>{
        picViewer.current.style.opacity='1';
    },50);
  };
  let hidePicViewer = () => {
      picViewer.current.style.opacity='0';
      setTimeout(()=>{
        picViewer.current.style.display='none';
    },50);
  };
  useEffect(() => {
    if (location.state) {
      setData(location.state.data);
    } else {
      props.history.push("/404");
      return;
    }
  });
  return (
    <>
      <section className="room-view-page">
        {Object.keys(data).length > 0 ? (
          <>
            <h1>{data.fields.name} Room</h1>
            <div className="room-pics">
              <img src={data.fields.images[0]} onClick={()=>showPicViewer(data.fields.images[0])} alt=""></img>
              <img src={data.fields.images[1]} onClick={()=>showPicViewer(data.fields.images[1])}  alt=""></img>
              <img src={data.fields.images[2]} onClick={()=>showPicViewer(data.fields.images[2])}  alt=""></img>
              <img src={data.fields.images[3]} onClick={()=>showPicViewer(data.fields.images[3])}  alt=""></img>
            </div>
            <div className="room-details">
              <div className="room-text">{data.fields.description}</div>
              <div className="room-info">
                <h1>Details</h1>
                <p>PRICE : $ {data.fields.price}</p>
                <p>SIZE : {data.fields.size} sqrt</p>
                <p>MAX CAPACITY : {data.fields.capacity} people</p>
                <p>PETS {data.fields.pets ? "ALLOWED" : "NOT ALLOWED"}</p>
                <p>
                  FREE BREAKFAST{" "}
                  {data.fields.breakfast ? "INCLUDED" : "NOT INCLUDED"}
                </p>
              </div>
            </div>
            <div className="extras">
              {data.fields.extras.map((res,i) => (
                  <React.Fragment key={i}>
                <p>
                  <i className="fa fa-long-arrow-right" aria-hidden="true"></i>{" "}
                  {res}
                </p>
                </React.Fragment>
              ))}
            </div>
          </>
        ) : (
          ""
        )}
      </section>
      <section className="room-pic-viewer" ref={picViewer} onClick={()=>hidePicViewer()}>
        <img ref={picViewerSrc} alt=""></img>
      </section>
    </>
  );
};

export default RoomView;

import React, { useEffect } from 'react';
import "../../css/Calender.css";

function Calender(props) {
    let display=React.createRef();
    let heading=React.createRef();
    let subHeading=React.createRef();
    let leftButton=React.createRef();
    let rightButton=React.createRef();

    useEffect(()=>{
        let daysName=["JANUARY","FEBRUARY","MARCH","APRIL","MAY","JUNE","JULY","AUGEST","SEPTEMBER",
        "OCTOBER","NOVEMBER","DECEMBER"];
        let date=new Date();
        let targetDay=null;
        function renderCards(){
            try{
                let previous_month=new Date(date.getFullYear(),date.getMonth(),0);
                let daysView=display.current;
                daysView.innerHTML="";
                heading.current.innerHTML=daysName[date.getMonth()];
                subHeading.current.innerHTML=`${date.toDateString()}`;
                let count=0;
                if(previous_month.getDay()!==6){
                    for(let i=previous_month.getDay();i>=0;i--){
                        daysView.innerHTML+=`<div>${previous_month.getDate()-i}</div>`;
                        count++;
                    }
                }
                let next_month=new Date(date.getFullYear(),date.getMonth()+1,0);
                for(let i=1;i<=next_month.getDate();i++){
                    if(i===new Date().getDate() && (new Date().getMonth()===date.getMonth())
                        && (new Date().getFullYear()===date.getFullYear())){
                        daysView.innerHTML+=`<div class="curr-mon cal-active">${i}</div>`;
                    }
                    else daysView.innerHTML+=`<div class="curr-mon">${i}</div>`;
                    count++;
                }
                let i=1;
                while(count++<42){
                    daysView.innerHTML+=`<div>${i++}</div>`;
                }
                daysView.addEventListener('click',(e)=>{
                    if(e.target.classList.contains('days')){
                        return;
                    }else if(e.target.className.trim()!=='')  {
                        targetDay?.classList.remove('cal-check');
                        targetDay=e.target;
                        execute({
                                year:date.getFullYear(),
                                months:date.getMonth(),
                                day:parseInt(e.target.innerText)
                            });
                        targetDay.classList.add('cal-check');
                    }
                });
            }catch(e){}
        }
        renderCards();
        leftButton.current.addEventListener('click',()=>{
            let newdate;
            if(date.getMonth()===0){
                newdate=new Date(date.getFullYear()-1,11);
            }else newdate=new Date(date.getFullYear(),date.getMonth()-1);
            date=newdate;
            renderCards();
        });
        rightButton.current.addEventListener('click',()=>{
            let newdate;
            if(date.getMonth()===11){
                newdate=new Date(date.getFullYear()+1,0);
            }else newdate=new Date(date.getFullYear(),date.getMonth()+1);
            date=newdate;
            renderCards();
        });
        function execute(e){
            try{props.input.current.value=e.day+" / "+(e.months+1)+" / "+e.year;}catch(e){}
        }
    },[props,display,heading,subHeading,leftButton,rightButton]);
    return (
        <div className="calender">
            <div className="details">
                <div className="controls">
                    <p ref={leftButton}>{"<"}</p>
                    <p ref={heading}>MAY</p>
                    <p ref={rightButton}>{">"}</p>
                </div>
                <h1 ref={subHeading}>May Sun 14 2025</h1>
            </div>
            <div className="view">
                <div className="days-name">
                    <p>SUN</p>
                    <p>MON</p>
                    <p>TUES</p>
                    <p>WED</p>
                    <p>THUR</p>
                    <p>FRI</p>
                    <p>SAT</p>
                </div>
                <div className="days" ref={display}>
                </div>
            </div>
        </div>
    );
}

export default Calender;
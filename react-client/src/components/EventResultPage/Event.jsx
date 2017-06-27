import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';


const Event = (props) => (

  <div className="eachEvent">
    <div className ="eventHandler">
      <a href="HERE">
       
          <div className="eventImages">
            <img src="http://s4.evcdn.com/images/block250/I0-001/024/825/663-1.jpeg_/mj-live-michael-jackson-tribute-concer-63.jpeg"/>
          </div>
      
          <div className="eventSmallDes">
           <h4 className="eventTitle"> <b>{props.event.title}</b></h4>
            <span className="eventVenueName">{props.event.venue_name}</span> <br/>
            <span className="eventStartTime"><b>{props.event.start_time}</b></span>
          </div>
      </a>
    </div>
  </div>
)
export default Event;


          //<img image={props.event.image.medium.url}/>

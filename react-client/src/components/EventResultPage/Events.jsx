import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Event from './Event.jsx'

const Events = (props) => (
  <div >
      <div className ="allEvents">
        {props.events.map((event) =>  {
          return <Event event ={event}/>
        })}
      </div>
  </div>
)
export default Events;

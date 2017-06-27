import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import LandingPage from '../LandingPage/LandingPage.jsx';



// 1. landing page _ submit componemnt 

class ResultPage extends React.Component {
  constructor(props) {
    super(props);
    
  }


  render () {
    return (
    <div id="resultPage">
      <table className ="submitInfo"> 
        <tr>
          <td className="basicInfo">
            <h2 id="logo"> 
              <a href="#top">EVENT <br/> PLANNER 
              </a> 
            </h2> 
          </td>

          <td className="basicInfo" id="clientInfo">
            Welcome, <b>{this.props.name}</b> <br/>
            <b>{this.props.eventType}</b> Events in <b>{this.props.location}</b> on <b> {this.props.data} </b><br/>
            <div id="length">
              We have <b>{this.props.allEvents.length}</b> events
            </div>
          </td>

          <td id="myEventClick">
            <a href="#TYPEEEEEEEEE HERERERER"><b>My Events</b></a>
          </td>
        </tr>
      </table>
    </div>
    )
  }
}


           


export default ResultPage;

// <Mylist />
// <LandingPage />
// <Event />






    // <div id="resultPage">
    //   <div className ="submitInfo"> 
    //       <div className="basicInfo">
    //         <h3 id="logo"> 
    //           <a href="#top">EVENT <br/> PLANNER 
    //           </a> 
    //         </h3> 
    //       </div>

    //       <div className="basicInfo" id="clientInfo">
    //         Welcome, <b>{this.props.name}</b> <br/>
    //         <b>{this.props.eventType}</b> Events in <b>{this.props.location}</b> on <b> {this.props.data} </b><br/>
    //         We have <b>{this.props.allEvents.length}</b> events
    //       </div>

    //       <div className="basicInfo">
    //         <a href="#TYPEEEEEEEEE HERERERER"><b>My Events</b></a>
    //       </div>
    //   </div>
    // </div>
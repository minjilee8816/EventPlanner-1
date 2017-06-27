import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import LandingPage from './components/LandingPage/LandingPage.jsx';
import ResultPage from './components/EventResultPage/ResultPage.jsx';
import Events from './components/EventResultPage/Events.jsx';
import Mylist from './components/MyListPage/MyList.jsx';

// import { BrowserRouter } from 'react-router-dom';
// import { Router, Route, Switch } from 'react-router';
import sampleData from './fakeData.js';
// import { Sticky } from './Nav.jsx';

// index.js is the top component 
// top Component 
// 1. landing page _ submit componemnt 
// 2. result page 
// 3. description page 
// 4. mylist page 





//communicate with Saikal before making any changes in this.state section!!!
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      userName: null,
      location: null,
      date: null,
      eventType: null, 
      allEvents: sampleData.fakeData,
      savedEvents: []
    }
  }



  //Do NOT Change submitEvent() function!
  submitEvent(dateSelected, location, eventSelected, name) {
    console.log("dateSelected ", dateSelected);
    console.log("location ", location);
    console.log("eventSelected ", eventSelected);
    console.log("name ", name);
    this.setState({
      userName: name
    });
    this.setState({
      location: location
    });
    this.setState({
      date: dateSelected
    });
    this.setState({
      eventType: eventSelected
    });
    $.ajax({
      url: '/events',
      type: 'POST', 
      data: JSON.stringify({ 
        eventDate: dateSelected,
        eventLocation: location,
        eventSelected: eventSelected    //Art or Concerts or Sports 
      }),
      success: (data) => {
        this.setState({
          allEvents: JSON.parse(data)                //response data is Objects in Array (coming from server)
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });

  };


  //Do NOT Change saveEvent() function!
  saveEvent(userName, saveDate, saveSelections) {       //saveSelections is an ARRAY (saving in the DB)
    $.ajax({
      url: '/selected',
      type: 'POST', 
      data: {
          saveDate: saveDate,                   //date entered
          userName: userName,
          saveSelections: saveSelections        //selected Events user interested and want to save in the DB
            },
      success: (data) => {
        console.log(data);                       //response is just a message: 'Successfully saved' in the DB

      },
      error: (err) => {
        console.log('err', err);
      }
    });
  };


  //Do NOT Change showSavedEvents() function!
  showSavedEvents(userName) {                    //retrieve list of events from DB
    $.ajax({
      url: '/retrieve',
      type: 'POST', 
      data: {
        userName: userName
      },
      success: (data) => {
        this.setState({
          savedEvents: JSON.parse(data)           //response data is all saved date-events Objects in ARRAY (coming from server)
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  };


  //Do NOT Change deleteEventDates() function!
  deleteEventDates(userName, selectDates) {
    $.ajax({
      url: '/delete',
      type: 'POST', 
      data: {
          userName: userName,
          salectDates: selectDates,            //array of Dates user wants to delete from DB
            },
      success: (data) => {
        console.log(data);                      //response is just a message: 'Successfully Deleted!'
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  };


//Change Render!
  render () {
    return ( <div id= "main">
    <div id= "landing">
      <LandingPage searchEvents= {this.submitEvent.bind(this)}/> 
    </div>

    <div id="result">
      { this.state.userName !== null ? <ResultPage name={this.state.userName} location={this.state.location} data={this.state.date} eventType={this.state.eventType} allEvents={this.state.allEvents}/> : null }
    </div>

    <div id="events">
      { this.state.userName !== null ? <Events events={this.state.allEvents}/> : null }
    </div>

    <div id="myEventsList">
    look
      <Mylist />
    </div>

    </div>
    )
  }
}


ReactDOM.render( <App /> , document.getElementById('app'));





      // <Router> 
      // <Switch>
      //   <Route exact path='/' component={LandingPage}/>
      //   </Switch>
      // </Router> 

    


    //   <DescriptionPage />
  

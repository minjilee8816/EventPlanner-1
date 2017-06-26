import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import LandingPage from '../LandingPage/LandingPage.jsx';
// import Mylist from '../MylistPage/Mylist.jsx';
// import Event from './Event.jsx';



// 1. landing page _ submit componemnt 

class ResultPage extends React.Component {
  constructor(props) {
    super(props);
  
  }


  render () {
    return (<div>
      {console.log('props',this.props)}
      Minji
    </div>)
  }
}

ReactDOM.render(<ResultPage />, document.getElementById('results-page'))

export default ResultPage;

// <Mylist />
// <LandingPage />
// <Event />
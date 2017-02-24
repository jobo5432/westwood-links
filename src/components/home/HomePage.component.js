import React from 'react';
import {Link} from 'react-router';
import Navbar from '../common/Navbar.component';

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <div className="jumbotron banner">
          <div className="container">
            <div className="branding">
              <div className="row"><h1>Westwood</h1></div>
              <div className="row"><h2>Golf Club</h2></div>
            </div>
          </div>
        </div>
        <div className="container">
          <Navbar/>
        </div>
      </div>
    );
  }
}

export default HomePage;
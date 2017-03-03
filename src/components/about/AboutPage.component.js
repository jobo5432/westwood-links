import React from 'react';
import Header from '../common/Header.component';
import Navbar from '../common/Navbar.component';
import Subpage from '../common/Subpage.component';
import * as Constants from '../../constants';

class AboutPage extends React.Component {

  componentWillMount(){
    document.title = `${Constants.PAGE_TITLE_PREFIX} About Us`;
  }

  render() {
    return (
      <div id="about-page">
        <Header/>
        <div className="container">
          <Navbar/>
          <Subpage>
            <h1>About Us</h1>
          </Subpage>
        </div>
      </div>
    );
  }
}

export default AboutPage;
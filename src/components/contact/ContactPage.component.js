import React from 'react';
import Header from '../common/Header.component';
import Navbar from '../common/Navbar.component';
import Subpage from '../common/Subpage.component';
import * as Constants from '../../constants';

class ContactPage extends React.Component {

  componentWillMount(){
    document.title = `${Constants.PAGE_TITLE_PREFIX} Contact Us`;
  }

  render() {
    return (
      <div id="contact-page">
        <Header/>
        <div className="container">
          <Navbar/>
          <Subpage>
            <h1>Contact Us</h1>
          </Subpage>
        </div>
      </div>
    );
  }
}

export default ContactPage;
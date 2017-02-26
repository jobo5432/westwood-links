import React from 'react';
import Header from '../common/Header.component';
import Navbar from '../common/Navbar.component';

class AboutPage extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="container">
          <Navbar/>
        </div>
      </div>
    );
  }
}

export default AboutPage;
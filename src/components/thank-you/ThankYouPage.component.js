import React from 'react';
import Header from '../common/Header.component';
import Navbar from '../common/Navbar.component';
import Subpage from '../common/Subpage.component';

class ThankYouPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div id="thank-you-page">
        <Header/>
        <div className="container">
          <Navbar/>
          <Subpage>
            <div>
              <h1>Thank You!</h1>
            </div>
          </Subpage>
        </div>
      </div>
    );
  }
}

export default ThankYouPage;
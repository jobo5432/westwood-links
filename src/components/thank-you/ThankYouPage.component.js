import React from 'react';
import Header from '../common/Header.component';
import Navbar from '../common/Navbar.component';
import Subpage from '../common/Subpage.component';
import * as Constants from '../../constants';

class ThankYouPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentWillMount() {
    document.title = `${Constants.PAGE_TITLE_PREFIX} Thank You!`;
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
              <p>
                Thank you for reaching out to us. Your questions and comments are very important to us. Someone will
                respond to you as soon as possible.
              </p>
              <p>
                If you also opted into joining our newsletter, please keep your eye on your inbox for special offers,
                discounts, club news, events, or other important information.
              </p>
            </div>
          </Subpage>
        </div>
      </div>
    );
  }
}

export default ThankYouPage;
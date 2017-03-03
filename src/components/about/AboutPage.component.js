import React from 'react';
import Header from '../common/Header.component';
import Navbar from '../common/Navbar.component';
import Subpage from '../common/Subpage.component';
import * as Constants from '../../constants';

class AboutPage extends React.Component {

  componentWillMount() {
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

            <h3>Who We Are</h3>
            <p>
              Westwood Golf Club is the tri-state areas premier public golf course. We offer 18 holes of championship
              golf with an array of amenities not found in your typical local clubhouse.
            </p>

            <p>A fully stocked pro shop, lounge, bar,golf lessons, full banquet facilities with the knowledge to make
              your golf outings, weddings, or any special event truely a day to remember.
            </p>


            <h3>Weddings & Banquets</h3>
            <p>Call Amanda Steiner at 412-462-9555 Ext 100 for your next big event. We have a full professional size
              kitchen with a huge array of options to make your small gathering up to the most lavish weddings the envy
              of
              all your friends. From an elaborate sit-down dinner or elegant buffet, our chefs and staff are always
              courteous and professional with all your wants and needs. Call today!</p>
          </Subpage>
        </div>
      </div>
    );
  }
}

export default AboutPage;
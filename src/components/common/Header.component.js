import React, {PropTypes} from 'react';

import { Link, IndexLink } from 'react-router';

const Header = (props) => {
    let pageBannerStyle = 'subpage-banner';

    if(props.homePage)
      pageBannerStyle = 'homepage-banner';

    return(
      <div className={`jumbotron banner ${pageBannerStyle}`}>
        <div className="container">
          <div className="branding">
            <div className="row"><h1 className="shadow-text">Westwood</h1></div>
            <div className="row"><h2 className="shadow-text">Golf Club</h2></div>
          </div>
        </div>
      </div>
    );
};

Header.propTypes = {
  homePage: PropTypes.bool
}

export default Header;
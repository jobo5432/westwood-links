import React from 'react';
import Header from '../common/Header.component';
import Navbar from '../common/Navbar.component';
import Subpage from '../common/Subpage.component';
import * as Constants from '../../constants';

class TeeOffPage extends React.Component {

  componentWillMount(){
    document.title = `${Constants.PAGE_TITLE_PREFIX} Tee Off!`;
  }

  render() {
    return (
      <div id="tee-off-page">
        <Header/>
        <div className="container">
          <Navbar/>
          <Subpage>
            <h1>Tee Off!</h1>
          </Subpage>
        </div>
      </div>
    );
  }
}

export default TeeOffPage;
import React from 'react';
import {Link} from 'react-router';
import Header from '../common/Header.component';
import Navbar from '../common/Navbar.component';
import MailingListForm from '../common/MailingListForm.component';
import TeeTimeCallout from '../common/TeeTimeCallout.component';
import * as Constants from '../../constants';

class HomePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.joinMailingList = this.joinMailingList.bind(this);
    this.viewTeeTimes = this.viewTeeTimes.bind(this);
  }

  componentWillMount(){
    document.title = `${Constants.PAGE_TITLE_PREFIX} Home`;
  }

  joinMailingList(e) {
    e.preventDefault();
    alert('join mailing list not implemented yet...');
  }

  viewTeeTimes(e){
    e.preventDefault();
    alert('view tee times not implemented yet...');
  }

  render() {
    return (
      <div>
        <Header homePage/>
        <div className="container">
          <Navbar homePage/>
        </div>
        <div className="container">
          <div className="col-md-6 light-text">
            <MailingListForm submitAction={this.joinMailingList} mode="full"/>
          </div>
          <div className="col-md-6 light-text" id="TeeTimeFormContainer">
            <TeeTimeCallout submitAction={this.viewTeeTimes} mode="full"/>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
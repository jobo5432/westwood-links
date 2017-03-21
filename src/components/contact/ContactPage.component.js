import React from 'react';
import { browserHistory } from 'react-router';
import {push} from 'react-router-redux';
import Header from '../common/Header.component';
import Navbar from '../common/Navbar.component';
import Subpage from '../common/Subpage.component';
import * as Constants from '../../constants';

class ContactPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      name           : '',
      email          : '',
      phoneNumber    : '',
      message        : '',
      joinMailingList: true
    };

    this.signUp       = this.signUp.bind(this);
    this.validateForm = this.validateForm.bind(this);
  }

  componentWillMount() {
    document.title = `${Constants.PAGE_TITLE_PREFIX} Contact Us`;
  }

  validateForm() {
    return true;
  }

  signUp() {
    if (this.validateForm()) {
      browserHistory.push('/thank-you');
    }
  }

  render() {
    return (
      <div id="contact-page">
        <Header/>
        <div className="container">
          <Navbar/>
          <Subpage>
            <div>
              <h1>Contact Us</h1>
              <p>Westwood Golf Club (formerly Duquesne Country Club), has been a golf enthusiasts haven for over 75
                years!
                It started as a vision in 1929 for a select few and has blossomed into a championship style public golf
                course and banquet facility with all the emenities you'd expect from a private club. Lounge areas, full
                bar, large banquet hall. locker rooms, pro shop and championship style golf with challenging holes
                nestled
                amongst Pittsburgh's beautiful rolling hills.
              </p>

              <p>
                Just minutes from historic Kennywood, its a great course with fairways that are wide open in some places
                and tree lined in others. The greens are fast and makes for a comfortable yet challenging day of golf.
                Come and enjoy!
              </p>

              <div className="row form-container">
                <div className="col-md-12">
                  <div className="form-group form-group-lg">
                    <label>Name</label>
                    <input type="text" className="form-control" placeholder="Full name..."/>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group form-group-lg">
                    <label>Email</label>
                    <input type="text" className="form-control" placeholder="Email address... (e.g. you@domain.com)"/>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group form-group-lg">
                    <label>Phone Number</label>
                    <input type="text" className="form-control" placeholder="Phone number... (xxx) xxx-xxxx"/>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group form-group-lg">
                    <label>Your Message</label>
                    <textarea className="form-control message-body" placeholder="Your comments, please..." />
                  </div>
                </div>
                <div className="col-md-12">
                  <button className="btn btn-lg btn-gold pull-right" onClick={this.signUp}>
                    <i className="fa fa-envelope-open-o"/> Send
                  </button>
                </div>
              </div>
            </div>
          </Subpage>
        </div>
      </div>
    );
  }
}


export default ContactPage;
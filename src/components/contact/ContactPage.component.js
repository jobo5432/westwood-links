import React from 'react';
import {browserHistory} from 'react-router';
import {push} from 'react-router-redux';
import Header from '../common/Header.component';
import Navbar from '../common/Navbar.component';
import Subpage from '../common/Subpage.component';
import * as Constants from '../../constants';
import axios from 'axios';

class ContactPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      formData      : {
        name   : '',
        email  : '',
        phone  : '',
        message: '',
        signup : true
      },
      validationData: {
        name   : null,
        email  : null,
        phone  : null,
        message: null
      }
    };


    this.submit            = this.submit.bind(this);
    this.validateForm      = this.validateForm.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.getInputCss       = this.getInputCss.bind(this);
    this.getLabelCss       = this.getLabelCss.bind(this);
  }

  componentWillMount() {
    document.title = `${Constants.PAGE_TITLE_PREFIX} Contact Us`;
  }

  validateForm() {
    let errorCount = 0;
    let nameRegex  = /^[a-zA-Z-'. ]+$/;
    let emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    let phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    //name validation
    if (!this.state.formData.name || !nameRegex.test(this.state.formData.name)) {
      this.setState({validationData: Object.assign(this.state.validationData, {name: 'Name is a required field'})});
      errorCount++;
    }
    else {
      this.setState({validationData: Object.assign(this.state.validationData, {name: null})});
    }

    //email validation
    if (!this.state.formData.email || !emailRegex.test(this.state.formData.email)) {
      this.setState({validationData: Object.assign(this.state.validationData, {email: 'Email is a required field'})});
      errorCount++;
    }
    else {
      this.setState({validationData: Object.assign(this.state.validationData, {email: null})});
    }

    //phone validation
    if (!this.state.formData.phone || !phoneRegex.test(this.state.formData.phone)) {
      this.setState({validationData: Object.assign(this.state.validationData, {phone: 'Phone is a required field'})});
      errorCount++;
    }
    else {
      this.setState({validationData: Object.assign(this.state.validationData, {phone: null})});
    }

    //message validation
    if (!this.state.formData.message || !this.state.formData.message.trim().length > 10) {
      this.setState({validationData: Object.assign(this.state.validationData, {message: 'Comments are required. '})});
      errorCount++;
    }
    else {
      this.setState({validationData: Object.assign(this.state.validationData, {message: null})});
    }

    return errorCount == 0;
  }

  getInputCss(val) {
    return val ? 'form-group form-group-lg has-error' : 'form-group form-group-lg';
  }

  getLabelCss(val) {
    return val ? 'text-danger' : 'text-danger hidden';
  }

  submit() {
    if (this.validateForm()) {

      axios.post('http://localhost:3333/contact-us-request', this.state.formData)
        .then((resp) => {
          browserHistory.push('/thank-you');
        })
        .catch((err) => {
          throw err;
        });
    }
  }

  handleInputChange(event) {
    const target = event.target;
    const value  = target.type === 'checkbox' ? target.checked : target.value;
    const name   = target.name;

    this.setState({formData: Object.assign(this.state.formData, {[name]: value})});
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
                  <div className={this.getInputCss(this.state.validationData.name)}>
                    <label>Name<span className="text-danger">*</span> <span
                      className={this.getLabelCss(this.state.validationData.name)}>{this.state.validationData.name}</span></label>
                    <input type="text" className="form-control" placeholder="Full name..."
                           name="name"
                           value={this.state.formData.name}
                           onChange={this.handleInputChange}
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className={this.getInputCss(this.state.validationData.email)}>
                    <label>Email<span className="text-danger">*</span> <span
                      className={this.getLabelCss(this.state.validationData.email)}>{this.state.validationData.email}</span></label>
                    <input type="text" className="form-control" placeholder="Email address... (e.g. you@domain.com)"
                           name="email"
                           value={this.state.formData.email}
                           onChange={this.handleInputChange}
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className={this.getInputCss(this.state.validationData.phone)}>
                    <label>Phone<span className="text-danger">*</span> <span
                      className={this.getLabelCss(this.state.validationData.phone)}>{this.state.validationData.phone}</span></label>
                    <input type="text" className="form-control" placeholder="Phone number... (xxx) xxx-xxxx"
                           name="phone"
                           value={this.state.formData.phone}
                           onChange={this.handleInputChange}
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className={this.getInputCss(this.state.validationData.message)}>
                    <label>Comments<span className="text-danger">*</span> <span
                      className={this.getLabelCss(this.state.validationData.message)}>{this.state.validationData.message}</span></label>
                    <textarea className="form-control message-body" placeholder="Your comments, please..."
                              name="message"
                              value={this.state.formData.message}
                              onChange={this.handleInputChange}
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <label>
                    <input type="checkbox"
                           name="signup"
                           checked={this.state.formData.signup}
                           onChange={this.handleInputChange}
                    /> Join our mailing list
                  </label>
                </div>
                <div className="col-md-12">
                  <button className="btn btn-lg btn-gold pull-right" onClick={this.submit}>
                    <i className="fa fa-envelope-open-o"/> Send
                  </button>
                </div>
              </div>
            </div>
            <div className="address-container">
              <h3>Club Address</h3>
              <p>
                Westwood Golf Club<br />
                825 Commonwealth Ave.<br />
                West Mifflin Pa. 15122
              </p>

              <h3>Phone Numbers</h3>
              <p>
                <strong>Tee Times</strong>&nbsp;&nbsp;(412) 462-9555 ext 1<br />
                <strong>Banquets & Weddings</strong>&nbsp;&nbsp;(412) 462-9555 ext 2<br />
              </p>

              <h3>Map & Directions</h3>
              <p>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3039.4519913265694!2d-79.88248!3d40.376674!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8834efa30a39901b%3A0xa3976fc038a59b3a!2sWestwood+Golf+Club!5e0!3m2!1sen!2sus!4v1425138619059"
                  width="100%"
                  height="450" frameBorder="0"/>
              </p>
            </div>
          </Subpage>
        </div>
      </div>
    );
  }
}


export default ContactPage;
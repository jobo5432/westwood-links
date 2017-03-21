import React, {PropTypes} from 'react';
import {browserHistory} from 'react-router';
import axios from 'axios';

class MailingListForm extends React.Component {
  constructor(props, context) {
    super(props, context);
    
    this.state = {
      mode          : props.mode,
      formData      : {
        name  : '',
        email : '',
        signup: true
      },
      validationData: {
        name : null,
        email: null
      }
    };


    this.submit            = this.submit.bind(this);
    this.validateForm      = this.validateForm.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.getInputCss       = this.getInputCss.bind(this);
    this.getLabelCss       = this.getLabelCss.bind(this);

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

    return errorCount == 0;
  }

  getInputCss(val) {
    return val ? 'form-group has-error' : 'form-group';
  }

  getLabelCss(val) {
    return val ? 'text-danger' : 'text-danger hidden';
  }

  submit() {
    if (this.validateForm()) {

      axios.post('http://localhost:3333/mailing-list-request', this.state.formData)
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
      <div className={`center-text light-text  ${this.state.mode}-callout callout`}>
        <h3>Join Our Mailing List</h3>
        <div className="row">
          <div className="col-md-12">
            <p>
              Join our mailing list today and get everything you need in your inbox. Don't miss out on special offers,
              discounts, club news, events, or other important information.
            </p>
          </div>
        </div>
        <div className="row callout-form">
          <form className="col-md-10 col-md-push-1">
            <div className={this.getInputCss(this.state.validationData.name)}>
              <label><span
                className={this.getLabelCss(this.state.validationData.name)}>{this.state.validationData.name}</span>&nbsp;
              </label>
              <input type="text" name="name" value={this.state.formData.name}
                     className={this.state.mode === 'mini' ? "form-control input" : "form-control input-lg"}
                     onChange={this.handleInputChange}
                     placeholder="Your name (first and last)..."/>
            </div>
            <div className={this.getInputCss(this.state.validationData.email)}>
              <label><span
                className={this.getLabelCss(this.state.validationData.email)}>{this.state.validationData.email}</span>
              </label>
              <input type="text" name="email" value={this.state.formData.email}
                     className={this.state.mode === 'mini' ? "form-control input" : "form-control input-lg"}
                     onChange={this.handleInputChange}
                     placeholder="Email Address..."/>
            </div>
            <div className={this.state.mode === 'mini' ? 'form-group' : ''}>
              <button type="button"
                      className={this.state.mode === 'mini' ? "form-control btn btn-gold" : "btn btn-lg btn-gold col-md-8 col-md-push-2"}
                      onClick={this.submit}>
                <div className="light-shadow-text"><i className="fa fa-envelope-open-o"/> Submit</div>
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

MailingListForm.propTypes = {
  mode: PropTypes.string.isRequired
};

export default MailingListForm;
import React, {PropTypes} from 'react';

const MailingListForm = (props) => {
  return (
    <div className="center-text light-text callout">
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
        <form className="col-md-8 col-md-push-2">
          <div className="form-group">
            <input type="text" className="form-control input-lg" placeholder="Your name (first and last)..."/>
          </div>
          <div className="form-group">
            <input type="text" className="form-control input-lg" placeholder="Email Address..."/>
          </div>
          <div>
            <button type="button" className="btn btn-lg btn-gold col-md-8 col-md-push-2" onClick={props.submitAction}>
              <div className="light-shadow-text"><i className="fa fa-envelope-open-o"/> Submit</div>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

MailingListForm.propTypes = {
  submitAction: PropTypes.func.isRequired
};

export default MailingListForm;
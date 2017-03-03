import React, {PropTypes} from 'react';

const TeeTimeCallout = (props) => {
  return (
    <div className={`center-text light-text  ${props.mode}-callout callout`}>
      <h3>Book a Tee Time</h3>
      <div className="row">
        <div className="col-md-12">
          <p>If you don't see a time online or have a group of 12 or more golfers please call the Golf Shop at
            412-462-9555 x101 to check for availability.</p>
        </div>
      </div>
      <div className="row callout-form">
        <form className="col-md-10 col-md-push-1">
          <div className={props.mode === 'mini' ? 'form-group hide-inputs hidden' : 'form-group hide-inputs'}>
            <input type="text" className="form-control input-lg" placeholder="Your name (first and last)..."/>
          </div>
          <div className={props.mode === 'mini' ? 'form-group hide-inputs hidden' : 'form-group hide-inputs'}>
            <input type="text" className="form-control input-lg" placeholder="Email Address..."/>
          </div>
          <div className={props.mode === 'mini' ? 'form-group' : ''}>
            <button type="button" className={props.mode === 'mini' ? "form-control btn btn-gold" : "btn btn-lg btn-gold col-md-8 col-md-push-2"} onClick={props.submitAction}>
              <div className="light-shadow-text"><i className="fa fa-calendar-o"/> Book Now</div>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

TeeTimeCallout.propTypes = {
  submitAction: PropTypes.func.isRequired,
  mode: PropTypes.string.isRequired
};

export default TeeTimeCallout;
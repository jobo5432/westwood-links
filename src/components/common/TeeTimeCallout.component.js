import React, {PropTypes} from 'react';

export default function TeeTimeCallout(props){
  return(
    <div className="center-text light-text callout">
      <h3>Tee Times</h3>
      <div className="row">
        <div className="col-md-12">
          <h4>Book a Tee Time Online</h4>
          <p>If you don't see a time online or have a group of 12 or more golfers please call the Golf Shop at 412-462-9555 x101 to check for availability.</p>
        </div>
      </div>
      <div className="row callout-form">
        <form className="col-md-8 col-md-push-2">
          <div className="button-push">
            <button type="button" className="btn btn-lg btn-gold col-md-8 col-md-push-2" onClick={props.submitAction}>
              <div className="light-shadow-text"><i className="fa fa-calendar-o"/> Book Now</div>
            </button>
          </div>
        </form>
      </div>
    </div>
    );
}

TeeTimeCallout.propTypes = {
  submitAction: PropTypes.func.isRequired
}
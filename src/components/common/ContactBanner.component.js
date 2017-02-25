import React from 'react';

const ContactBanner = (props) =>{
  return(
    <div className="contact-banner">
      <div className="container">
        <div className="pull-left icon">
          <i className="fa fa-location-arrow" />
        </div>
        <div className="pull-left">
          <div className="pull-left">
            <div className="text-align-right">825 Commonwealth Ave. West Mifflin, PA 15122</div>
          </div>
        </div>


        <div className="pull-right">
          <div className="pull-right">
            <div className="text-align-right">Tee Times: (412) 462-9555 ext. 100</div>
            <div className="text-align-right">Banquets & Weddings: (412) 462-9555 ext. 101</div>
          </div>
          <div className="pull-right icon">
            <i className="fa fa-phone" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBanner;
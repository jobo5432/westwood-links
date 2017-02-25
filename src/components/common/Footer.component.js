import React from 'react';

export default function Footer(props) {
  let year = '2017';
  return (
    <div className="site-footer">
      <div className="container">
        <div className="col-md-5">
          &copy;{year} Westwood Golf Club All rights reserved.
        </div>
        <div className="col-md-2 center-text">
          &#9971;
        </div>
        <div className="col-md-5 text-align-right">
          Site created and maintained by <a href="#">Jim Hoy</a>
        </div>
      </div>

    </div>
  );
}
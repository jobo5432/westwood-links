import React from 'react';
import {Link, IndexLink} from 'react-router';

export default function Navbar(props) {
  return (
    <div className="main-nav">
      <nav className="navbar navbar-default">
        <div>
          <div className="navbar-header hidden" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
            <button type="button" className="navbar-toggle collapsed navbar-toggle-center" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="glyphicon glyphicon-menu-hamburger"></span>
              <span className="navmenu">MENU</span>
            </button>
          </div>
          <div className="collapse navbar-collapse navbar-nav-justified" id="bs-example-navbar-collapse-1">
            <ul className="nav nav-pills nav-justified">
              <li ><IndexLink to="/" activeClassName="active-link">Home</IndexLink></li>
              <li ><Link to="/about" activeClassName="active-link">About Us</Link></li>
              <li ><Link to="/tee-off" activeClassName="active-link">Tee Off!</Link></li>
              <li><Link to="/banquets-and-weddings" activeClassName="active-link">Banquets & Weddings</Link></li>
              <li ><Link to="/bar-and-grill" activeClassName="active-link">Bar & Grill</Link></li>
              <li ><Link to="/contact" activeClassName="active-link">Contact Us</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

/*


 <div className="clearfix"></div>
 <nav className="navbar">
 <div className="navbar-header">
 <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
 <span className="sr-only">Toggle navigation</span>
 <span className="icon-bar" />
 <span className="icon-bar" />
 <span className="icon-bar" />
 </button>
 </div>

 <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
 <ul className="nav navbar-nav nav-justified">
 <li ><IndexLink to="/" activeClassName="active-link">Home</IndexLink></li>
 <li ><Link to="/about" activeClassName="active-link">About Us</Link></li>
 <li ><Link to="/tee-off" activeClassName="active-link">Tee Off!</Link></li>
 <li ><Link to="/banquets-and-weddings" activeClassName="active-link">Banquets & Weddings</Link></li>
 <li ><Link to="/bar-and-grill" activeClassName="active-link">Bar & Grill</Link></li>
 <li ><Link to="/contact" activeClassName="active-link">Contact Us</Link></li>
 </ul>
 </div>
 </nav>
 */
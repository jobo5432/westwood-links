import React from 'react';
import Header from '../common/Header.component';
import Navbar from '../common/Navbar.component';
import Subpage from '../common/Subpage.component';
import * as Constants from '../../constants';
import img1 from '../../static/tee-off-1.jpg';
import img2 from '../../static/tee-off-2.jpg';

class TeeOffPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentWillMount() {
    document.title = `${Constants.PAGE_TITLE_PREFIX} Tee Off!`;
  }

  render() {
    return (
      <div id="tee-off-page">
        <Header/>
        <div className="container">
          <Navbar/>
          <Subpage>
            <div>
              <h1>Tee Off!</h1>
              <div className="row info-row">
                <div className="col-md-6">
                  <img src={img1}/>
                </div>
                <div className="col-md-6">
                  <h3>Schedule a golf outing with us!</h3>
                  <p>
                    There is nothing quite like enjoying championship golf and dinner with your friends and co-workers
                    especially when it is sponsoring a good cause!
                  </p>

                  <ul className="no-bullet-list">
                    <li>Open to the public year-round</li>
                    <li>Mens par: 71, Ladies par: 74</li>
                    <li>Driving Range</li>
                    <li>Rental Carts</li>
                    <li>Golf Outings</li>
                    <li>Golf Lessons</li>
                    <li>PGA Golf Pro-Wes Grable</li>
                  </ul>
                </div>
              </div>
              <div className="row info-row">
                <div className="col-md-6">
                  <h3>Golf Prices</h3>
                  <div className="info-row">
                    <h4>WEEKDAYS (Monday - Friday)</h4>
                    <div className="row">
                      <div className="col-md-9">18 Holes & Cart</div>
                      <div className="col-md-3">$37</div>
                    </div>
                    <div className="row">
                      <div className="col-md-9">9 Holes & Cart</div>
                      <div className="col-md-3">$23</div>
                    </div>
                    <div className="row">
                      <div className="col-md-9">18 Holes Walking</div>
                      <div className="col-md-3">$20</div>
                    </div>
                    <div className="row">
                      <div className="col-md-9">9 Holes Walking</div>
                      <div className="col-md-3">$13</div>
                    </div>
                  </div>
                  <div className="info-row">
                    <h4>WEEKENDS (Saturday - Sunday)</h4>
                    <div className="row">
                      <div className="col-md-9">18 Holes</div>
                      <div className="col-md-3">$47</div>
                    </div>
                    <div className="row">
                      <div className="col-md-8 col-md-push-1">after 11:00</div>
                      <div className="col-md-3 col-md-push-1">$42</div>
                    </div>
                    <div className="row">
                      <div className="col-md-8 col-md-push-1">after 3:00</div>
                      <div className="col-md-3 col-md-push-1">$37</div>
                    </div>
                    <div className="row">
                      <div className="col-md-9">9 Holes</div>
                      <div className="col-md-3">$30</div>
                    </div>
                    <div className="row">
                      <div className="col-md-8 col-md-push-1">after 11:00</div>
                      <div className="col-md-3 col-md-push-1">$25</div>
                    </div>
                    <div className="row">
                      <div className="col-md-8 col-md-push-1">after 3:00</div>
                      <div className="col-md-3 col-md-push-1">$23</div>
                    </div>
                  </div>
                  <div className="info-row">
                    <h4>SENIORS (Monday - Friday)</h4>
                    <div className="row">
                      <div className="col-md-9">18 Holes & Cart</div>
                      <div className="col-md-3">$29</div>
                    </div>
                  </div>
                  <div className="info-row">
                    <h4>Additional Information</h4>
                    <div className="row">
                      <p>
                        APRIL THRU SEPTEMBER -DRESS CODE REQUIRED <br />
                        <em>(*wear collar shirt and *no jeans please)</em>
                      </p>
                      <p>
                        MEMBERSHIPS AVAILABLE AS LOW AS $1100- CALL WES
                      </p>
                      <em>* Walking not permitted before 3PM on Fridays.</em>
                    </div>
                  </div>
                </div>
                <div className="col-md-6"><img src={img2}/></div>
              </div>
            </div>
          </Subpage>
        </div>
      </div>
    );
  }
}

export default TeeOffPage;
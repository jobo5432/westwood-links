/*eslint-disable react/jsx-no-bind*/

 import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as siteActions from '../../actions/siteActions';

import Header from '../common/Header.component';
import Navbar from '../common/Navbar.component';
import Subpage from '../common/Subpage.component';
import * as Constants from '../../constants';

class PhotoGalleryPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    let arr = [];

    for (let i = 1; i <= 7; i++) {
      arr.push(require(`../../static/gallery/${i}.jpg`));
    }

    this.state = {
      images    : arr,
      defaultImg: arr[0]
    };

    this.changeBigImage = this.changeBigImage.bind(this);
  }

  componentWillMount() {
    document.title = `${Constants.PAGE_TITLE_PREFIX} Photo Gallery`;
  }

  changeBigImage(index) {
    let newBigImg = require(`../../static/gallery/${index + 1}.jpg`);
    this.setState({
      defaultImg: newBigImg
    });
  }

  render() {
    return (
      <div id="photo-gallery-page">
        <Header/>
        <div className="container">
          <Navbar/>
          <Subpage pageType="stacked">
            <div className="image-container">
              <h1>Photo Gallery</h1>

              <div className="row">
                <div className="col-xs-12">
                  <img src={this.state.defaultImg} className="thumbnail"/>
                </div>
              </div>
              <div className="row">
                {this.state.images.map((img, i) => {
                  return (
                    <div className="col-md-2" key={i}>
                      <img src={img} onClick={() => {
                        this.changeBigImage(i);
                      }} className="thumbnail"/>
                    </div>
                  );
                })}
              </div>
            </div>
          </Subpage>
        </div>
      </div>
    );
  }
}

export default PhotoGalleryPage;
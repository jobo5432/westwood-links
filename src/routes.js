import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage.component';
import AboutPage from './components/about/AboutPage.component';
import TeeOffPage from './components/tee-off/TeeOffPage.component';
import ContactPage from './components/contact/ContactPage.component';
import PhotoGalleryPage from './components/photo-gallery/PhotoGalleryPage.component';

export default (
  <Route path="/" component={App}>
    <IndexRoute components={HomePage}/>
    <Route path="about" component={AboutPage}/>
    <Route path="photo-gallery" component={PhotoGalleryPage}/>
    <Route path="tee-off" component={TeeOffPage}/>
    <Route path="contact-us" component={ContactPage}/>
  </Route>
);
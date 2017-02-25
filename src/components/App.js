import React, {PropTypes} from 'react';
import Footer from './common/Footer.component';
import ContactBanner from './common/ContactBanner.component';

class App extends React.Component {
  render() {
    return (
      <div>
        <ContactBanner/>
        <div className="container-fluid">
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
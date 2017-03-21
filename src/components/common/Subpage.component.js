import React, {PropTypes} from 'react';
import MailingListForm from '../common/MailingListForm.component';
import TeeTimeCallout from '../common/TeeTimeCallout.component';

class Subpage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.joinMailingList = this.joinMailingList.bind(this);
    this.viewTeeTimes    = this.viewTeeTimes.bind(this);
  }

  joinMailingList(e) {
    e.preventDefault();
    alert('join mailing list not implemented yet...');
  }

  viewTeeTimes(e) {
    e.preventDefault();
    alert('view tee times not implemented yet...');
  }

  renderTwoColumn() {
    return (
      <div id="content-container" className="subpage-container">
        <div className="inner row">
          <div className="col-md-8 equalH">
            <div className="page-content">
              {this.props.children}
            </div>
          </div>
          <div className="col-md-4 full-height callout-container">
            <div>
              <MailingListForm mode="mini" submitAction={this.joinMailingList}/>
            </div>
            <div>
              <TeeTimeCallout mode="mini" submitAction={this.viewTeeTimes}/>
            </div>
          </div>
        </div>
      </div>
    );
  }

  renderStacked() {
    return (
      <div id="content-container" className="subpage-container no-bottom-margin">
        <div className="inner">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12 equalH">
                <div className="page-content">
                  {this.props.children}
                </div>
              </div>
            </div>
            <div className="row callout-container">
              <div className="col-md-6">
                <MailingListForm mode="full" submitAction={this.joinMailingList}/>
              </div>
              <div className="col-md-6">
                <TeeTimeCallout mode="full" submitAction={this.viewTeeTimes}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    if(this.props.pageType && this.props.pageType === 'stacked')
      return this.renderStacked();

    return this.renderTwoColumn();
  }
}

Subpage.propTypes = {
  children: () => {return PropTypes.object.isRequired | PropTypes.array.isRequired;},
  pageType: PropTypes.string
};

export default Subpage;
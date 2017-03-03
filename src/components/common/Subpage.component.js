import React, {PropTypes} from 'react';
import MailingListForm from '../common/MailingListForm.component';
import TeeTimeCallout from '../common/TeeTimeCallout.component';

class Subpage extends React.Component{
  constructor(props, context) {
    super(props, context);

    this.joinMailingList = this.joinMailingList.bind(this);
    this.viewTeeTimes = this.viewTeeTimes.bind(this);
  }

  joinMailingList(e) {
    e.preventDefault();
    alert('join mailing list not implemented yet...');
  }

  viewTeeTimes(e){
    e.preventDefault();
    alert('view tee times not implemented yet...');
  }

  render(){
    return (
      <div id="content-container">
        <div className="inner row">
          <div className="col-md-8 equalH">
            {this.props.children}
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
}

Subpage.propTypes = {
  children: PropTypes.object.isRequired
};

export default Subpage;
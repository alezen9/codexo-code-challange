import React, { Component } from 'react';
import { connect } from 'react-redux';
//css
import './Details.css';
//components
import CompanyCard from '../components/CompanyCard';
import CompanyDetails from '../components/CompanyDetails';


class Details extends Component {

  render() {
    const { currentCompany } = this.props;
    return (
      <div className="details">
        {currentCompany ? <CompanyCard details company={currentCompany} /> : <div></div>}
        <div className="company-details">
          <CompanyDetails />
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    ...state,
    ...ownProps
  }
}

export default connect(mapStateToProps)(Details);
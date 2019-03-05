import React, { Component } from 'react';
import { connect } from 'react-redux';
//css
import './CompaniesList.css';
//components
import CompanyCard from '../components/CompanyCard';



class CompaniesList extends Component {

  render() {
    const { companies } = this.props;
    return (
      <div className="companies-list">
        {
          companies.map((el, i) => {
            return <CompanyCard key={i} company={el} />
          })
        }
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

export default connect(mapStateToProps)(CompaniesList);
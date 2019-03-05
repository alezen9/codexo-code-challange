import React, { Component } from 'react';
import { connect } from 'react-redux';
//css
import './Home.css';
//components
import CompaniesList from '../components/CompaniesList';
import CreateCard from '../components/CreateCard';



class Home extends Component {
  render() {
    const { companies } = this.props;
    return (
      <div className="home">
        <p className="title">Companies</p>
        <div className="content">
          <div className="create-forms">
            <CreateCard what="company" />
            {
              companies.length > 0 ?
                <CreateCard what="person" />
                :
                <span></span>
            }
          </div>
          <div className="companies">
            {
              companies.length > 0 ?
                <CompaniesList />
                :
                <div>No available companies</div>
            }
          </div>
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

export default connect(mapStateToProps)(Home);
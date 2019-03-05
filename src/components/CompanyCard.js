import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
//css
import './CompanyCard.css';
//actions
import { setCompany } from '../actions/index';



class CompanyCard extends Component {

    setCompany = () => { this.props.setCompany(this.props.company) }

    render() {
        const { details, company } = this.props;
        return (
            <div className="company-card">
                <p>{details ? 'Profile Overview' : company.name}</p>
                <table>
                    <tbody>
                        {details ? <tr><td>Adress:</td><td>Total Employees:</td></tr> : <tr><td>Adress:</td></tr>}
                        {details ? <tr><td>{company.adress}</td><td>{company.totalEmployees}</td></tr> : <tr><td>{company.adress}</td></tr>}
                        <tr><td>Revenue:</td></tr>
                        <tr><td>{company.revenue}</td></tr>
                        <tr><td>Phone:</td></tr>
                        <tr><td>{company.phone}</td></tr>
                    </tbody>
                </table>
                {
                    details ?
                        <span></span>
                        :
                        <Link onClick={this.setCompany} to={`/details/${company.name}`}>Company Overview</Link>
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

const mapDidpatchToProps = (dispatch) => {
    return {
        setCompany: (company) => { dispatch(setCompany(company)) }
    }
}

export default connect(mapStateToProps, mapDidpatchToProps)(CompanyCard);
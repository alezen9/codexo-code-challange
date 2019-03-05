import React, { Component } from 'react';
import { connect } from 'react-redux';
//css
import './CompanyDetails.css';
//components
import Employee from './Employer';



class CompanyDetails extends Component {
    render() {
        const { currentCompany } = this.props;
        return (
            <div className="company-employees">
                <p>Employees</p>
                <div className="employees">
                    {
                        currentCompany.employees.length > 0 ?
                            currentCompany.employees.map((el, i) => {
                                return <Employee key={i} employee={el} />
                            })
                            :
                            <p className="no-employees">This company has no employees.</p>
                    }
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

export default connect(mapStateToProps)(CompanyDetails);
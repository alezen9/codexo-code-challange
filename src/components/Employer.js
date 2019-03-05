import React, { Component } from 'react';
import { connect } from 'react-redux';
//css
import './Employer.css';



class Employee extends Component {
    render() {
        const { name, adress } = this.props.employee;
        return (
            <div className="employee">
                <p>{name}</p>
                <table>
                    <tbody>
                        <tr><td>Adress:</td></tr>
                        <tr><td>{adress}</td></tr>
                    </tbody>
                </table>
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

export default connect(mapStateToProps)(Employee);
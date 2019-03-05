import React, { Component } from 'react';
import { connect } from 'react-redux';
//css
import './CreateCard.css';
//actions
import { updateCompany, createCompany } from '../actions/index';


class CreateCard extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            adress: '',
            revenue: '',
            phone: '',
            selectedCompany: '',
            showError: false
        }
    }

    inputChange = (e) => { this.setState({ [e.target.id]: e.target.value, showError: false }) }

    submit = (e) => {
        const { what, createCompany, updateCompany, companies } = this.props;
        const { name, adress, revenue, phone, selectedCompany } = this.state;
        e.preventDefault();
        if (what === 'company') {
            if (name && adress && revenue && phone) {
                let company = {
                    name: name,
                    adress: adress,
                    revenue: revenue,
                    phone: phone
                }
                createCompany(company);
            } else {
                this.setState({ showError: true })
            }
        } else {
            if (name && adress && selectedCompany) {
                let employee = {
                    name: name,
                    adress: adress
                }
                let companyToUpdate = companies.filter((el, i) => {
                    return el.name === selectedCompany;
                })
                companyToUpdate = companyToUpdate[0];
                companyToUpdate.employees.unshift(employee);
                companyToUpdate.totalEmployees++;
                updateCompany(companyToUpdate);
            } else {
                this.setState({ showError: true })
            }
        }

    }

    selected = (e) => { this.setState({ selectedCompany: e.target.value }) }

    render() {
        const { name, adress, revenue, phone, showError } = this.state;
        const { what, companies } = this.props;
        return (
            <div className="create-card">
                <p>create new {what}</p>
                <form className="create-form">
                    {
                        showError ?
                            <div className="error">Make sure to fill all the fields.</div>
                            :
                            <span></span>
                    }
                    <label htmlFor="name">Name:</label>
                    <input id="name" type="text" placeholder="Text" value={name} onChange={this.inputChange} required />
                    <label htmlFor="adress">Adress:</label>
                    <input id="adress" type="text" placeholder="Text" value={adress} onChange={this.inputChange} required />
                    {
                        what === 'company' ?
                            <div>
                                <label htmlFor="revenue">Revenue:</label>
                                <input id="revenue" type="text" placeholder="Text" value={revenue} onChange={this.inputChange} required />
                                <label htmlFor="phone">Phone:</label>
                                <input id="phone" type="text" placeholder="Text" value={phone} onChange={this.inputChange} required />
                            </div>
                            :
                            <div className="custom-select">
                                <select onChange={this.selected} id="company" required>
                                    <option value="" slected="selected" data-default>Select Employer</option>
                                    {
                                        companies.map((el, i) => {
                                            return <option key={i} value={el.name}>{el.name}</option>
                                        })
                                    }
                                </select>
                            </div>
                    }
                    <div>
                        <button onClick={this.submit}>Salva</button>
                    </div>
                </form>
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
        createCompany: (company) => { dispatch(createCompany(company)) },
        updateCompany: (company) => { dispatch(updateCompany(company)) }
    }
}

export default connect(mapStateToProps, mapDidpatchToProps)(CreateCard);
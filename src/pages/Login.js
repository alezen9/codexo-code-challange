import React, { Component } from 'react'
import { connect } from 'react-redux';
//css
import './Login.css';
//actions
import { setLogged } from '../actions/index';


class Login extends Component {
    constructor() {
        super();
        this.state = {
            usernameClass: '',
            passwordClass: '',
            usr: '',
            pswd: ''
        }
    }

    inputChange = (e) => { this.setState({ [e.target.id]: e.target.value, usernameClass: '', passwordClass: '' }) }

    validateData = () => {
        const { username, password, setLogged } = this.props;
        const { usr, pswd } = this.state;
        if(usr !== username)  this.setState({ usernameClass: 'show-label' })
        if(pswd !== password)  this.setState({ passwordClass: 'show-label' })
        setLogged(usr === username && pswd === password);
    }

    submit = (e) => {
        e.preventDefault();
        this.validateData();
    }
    render() {
        const { usernameClass, passwordClass, usr, pswd } = this.state;
        return (
            <div className="login">
                <div className="form">
                    <form className="login-form">
                        <label htmlFor="usr" className={usernameClass}>{usr === '' ? 'This field is required' : 'Username is incorrect' }</label>
                        <input id="usr" type="text" placeholder="Username" value={usr} onChange={this.inputChange} required />
                        <label htmlFor="pswd" className={passwordClass}>{pswd === '' ? 'This field is required' : 'Password is incorrect'}</label>
                        <input id="pswd" type="password" placeholder="Password" value={pswd} onChange={this.inputChange} required />
                        <button onClick={this.submit}>Accedi</button>
                    </form>
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

const mapDidpatchToProps = (dispatch) => {
    return {
        setLogged: (val) => { dispatch(setLogged(val)) },
    }
}

export default connect(mapStateToProps, mapDidpatchToProps)(Login);
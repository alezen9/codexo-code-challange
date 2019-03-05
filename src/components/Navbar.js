import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router';
//css
import './Navbar.css';
//actions
import { unsetUser } from '../actions/index';

class Navbar extends Component {
    constructor() {
        super();
        this.state = {
            toggleMenu: false
        }
    }

    showMenu = (e) => { this.setState({ toggleMenu: this.state.toggleMenu ? false : true }) }

    logout = () => {
        localStorage.clear();
        this.props.unsetUser();
    }

    render() {
        const { toggleMenu } = this.state;
        const { username, location, currentCompany } = this.props;
        return (
            <div className="navbar">
                <p>{location.pathname.split('/')[1] === 'details' ? currentCompany.name : 'Companies'}</p>
                <div onClick={this.showMenu} className="avatar">{username.substring(0, 2)}</div>
                {
                    toggleMenu ?
                        <div className="menu">
                            <div className="arrow-up"></div>
                            <Link onClick={this.showMenu} to="/">Home</Link>
                            <div className="line"></div>
                            <div onClick={this.logout} className="logout">Log out</div>
                        </div>
                        :
                        ''
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
        unsetUser: () => { dispatch(unsetUser()) }
    }
}

export default connect(mapStateToProps, mapDidpatchToProps)(withRouter(Navbar));
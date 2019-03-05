import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
// components and pages
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Details from './pages/Details';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        {
          this.props.logged ?
            <div className="App">
              <Navbar />
              <div className="content">
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/details/:company" component={Details} />
                </Switch>
              </div>
            </div>
            :
            <div>
              <Switch>
                <Route exact path="/" component={Login} />
                <Redirect from="*" to="/" />
              </Switch>
            </div>
        }
      </BrowserRouter>
    );
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    ...state,
    ...ownProps,
  }
}

export default connect(mapStateToProps)(App);
import React, { Component, Fragment } from 'react';
import Login from './components/Login';
import NewQuestion from './components/NewQuestion';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LeaderBoard from './components/LeaderBoard';
import Home from './components/Home';
import Poll from './components/Poll';
import {handleInitialData} from './actions/shared'
import { connect } from 'react-redux'
import ErrorPage from './components/ErrorPage';
import { LoadingBar } from 'react-redux-loading'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      
      <Router>
        <Fragment>
          <LoadingBar />
          <div className="container">
            {this.props.loading === 0 
            ? null
            : this.props.loggedOut === true 
              ? <div>
                  <Login />
                </div>
              : <div>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/questions/:id/" component={Poll} />
                    <Route exact path="/add" component={NewQuestion} />
                    <Route exact path="/leaderboard" component={LeaderBoard} />
                    <Route exact path="/404" component={ErrorPage} />
                </div>
            }
            </div>
          </Fragment>
      </Router>
    );
  }
}

function mapStateToProps({authUser, users}) {
  return {
    loggedOut: authUser === null,
    loading: Object.keys(users).length,
  }
}

export default connect(mapStateToProps)(App);

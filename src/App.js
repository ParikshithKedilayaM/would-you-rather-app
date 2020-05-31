import React, { Component } from 'react';
import Login from './components/Login';
import NewQuestion from './components/NewQuestion';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LeaderBoard from './components/LeaderBoard';
import Home from './components/Home';
import Poll from './components/Poll';
import {handleInitialData} from './actions/shared'
import { connect } from 'react-redux'
import ErrorPage from './components/ErrorPage';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      
      <Router>
        <div className="container">
        {this.props.loading === true 
        ? <div>
            <Login />
          </div>
        : <div>
              <Route exact path="/" component={Home} />
              <Route exact path="/poll/:id/" component={Poll} />
              <Route exact path="/newquestion" component={NewQuestion} />
              <Route exact path="/leaderboard" component={LeaderBoard} />
              <Route exact path="/404" component={ErrorPage} />
          </div>
          }
          </div>
      </Router>
    );
  }
}

function mapStateToProps({authUser}) {
  return {
    loading: authUser === null
  }
}

export default connect(mapStateToProps)(App);

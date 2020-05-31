import React, { Component } from 'react';
import Login from './components/Login';
import NewQuestion from './components/NewQuestion';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LeaderBoard from './components/LeaderBoard';
import Home from './components/Home';
import Poll from './components/Poll';
import {handleInitialData} from './actions/shared'
import { connect } from 'react-redux'

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
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/poll/:id/" component={Poll} />
              <Route exact path="/newquestion">
                <NewQuestion />
              </Route>   
              <Route exact path="/leaderboard">
                <LeaderBoard />
              </Route>
            </div>
          }
          </div>
      </Router>
    );
  }
}

function mapStateToProps({authUser}) {
  console.log(authUser)
  return {
    loading: authUser === null
  }
}

export default connect(mapStateToProps)(App);

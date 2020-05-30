import React, { Component } from 'react';
import Login from './components/Login';
import Card from './components/Card';
import NewQuestion from './components/NewQuestion';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LeaderBoard from './components/LeaderBoard';
import Home from './components/Home';

class App extends Component {
  componentDidMount() {
    //this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <div className="container">
        <Router>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/poll">
            <Card />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/newquestion">
            <NewQuestion />
          </Route>   
          <Route exact path="/leaderboard">
            <LeaderBoard />
          </Route>
        </Router>
      </div>
    );
  }
}

export default App;

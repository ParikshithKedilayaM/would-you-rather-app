import React from 'react';
import Login from './components/Login';
import Header from './components/Header';
import Card from './components/Card';
import NewQuestion from './components/NewQuestion';

function App() {
  return (
    <div className="container">
      <Header />
      <Card />
      <Login />
      <NewQuestion />
    </div>
  );
}

export default App;

import React from 'react';
import Login from './components/Login';
import Header from './components/Header';
import Card from './components/Card';

function App() {
  return (
    <div className="container">
      <Header />
      <Card />
      <Login />
    </div>
  );
}

export default App;

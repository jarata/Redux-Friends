import React, { Component } from 'react';
import './App.css';
import Friend from './components/Friend'
import CreateFriendForm from './components/CreateFriendForm'
import UpdateFriendForm from './components/UpdateFriendForm'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Friend />
        <CreateFriendForm />
        <UpdateFriendForm />
      </div>
    );
  }
}

export default App;

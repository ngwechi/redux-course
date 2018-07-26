import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import Header from './component/header';
import TodoFrom from './component/todo';
import TodoList from './component/todolist';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header logo={logo} />
        <TodoFrom />
        <TodoList />
      </div>
    );
  }
}

export default App;

import React, { Component, Fragment } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import { Route, Switch } from 'react-router';
import { BrowserRouter as Router } from "react-router-dom"
import SingleStudent from "../src/components/SingleStudent";
import LoginForm from './components/auth/LoginForm';

class App extends Component {
  state = { 
    logged_in:localStorage.getItem('token') ? true: false, 
    username: '',
    token: ''
  }
  handle_logout = () => {
    localStorage.removeItem('token');
    this.setState({ logged_in: false, username: '' });
  };
  
  handle_token = (data) =>{
    this.setState({ ...this.state,logged_in: data.logged_in,username: data.username});
  }
  
  render() {
    return (
      <Fragment>
        <Header handle_logout={this.handle_logout} logged_in={this.state.logged_in} />
        <LoginForm logged_in={this.state.logged_in} handle_token={this.handle_token} />
      </Fragment>
    );
  }
}

export default App;
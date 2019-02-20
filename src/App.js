import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 style={{ color: '#fff' }}>{this.props.auth.user}</h1>
          <button onClick={this.props.onLogin}>Click me</button>
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLogin: () => dispatch({
      type: 'LOGIN_USER', payload: {
        user: 'Mateen',
        token: 'random token'
      }
    }),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);

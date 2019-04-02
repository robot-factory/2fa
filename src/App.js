import React, { Component } from 'react';
import {observable} from 'mobx'
import {observer} from 'mobx-react'
// import logo from './logo.svg';
import './App.css';
import speakeasy from "speakeasy"

@observer
class App extends Component {
  @observable
  secretCode = ''
  handlechangeSC = (e)=>{
    this.secretCode = e.target.value;
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <input type="text" value={this.secretCode} onChange={this.handlechangeSC} />
        </header>
      </div>
    );
  }
}

export default App;

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
  @observable
  token = ''
  handlechangeSC = (e)=>{
    this.secretCode = e.target.value;
  }

  saveSC = () => {
    window.localStorage.setItem('sc',this.secretCode)
  }

  genToken = () => {
    console.log(this.secretCode)
    const token = speakeasy.totp({
      secret: 'w5fmpnpvg2urnzza',
      encoding: 'base32'
    });
    this.token = token
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <div>
            <input type="text" value={this.secretCode} onChange={this.handlechangeSC} />
            <button onClick={this.saveSC}> 保存秘钥 </button>
            <button onClick={this.genToken}>生成验证码</button>
          </div>
          <div>验证码：{this.token}</div>
        </header>
      </div>
    );
  }
}

export default App;

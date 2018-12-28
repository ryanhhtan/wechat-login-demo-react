import React, { Component } from 'react';
import queryString from 'query-string';
import { signupWithWechat } from '../../service'; 

class WechatLogin extends Component {
  render() {
    const queries = queryString.parse(this.props.location.search);
    const code = queries.code;

    const result = signupWithWechat(code);

    console.log(result);

    return (
      <div className="App">
        <p>Wechat signup with code: {code}</p>
      </div>
    );
  }
}

export default WechatLogin;


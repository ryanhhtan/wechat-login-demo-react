import React, { Component } from 'react';
import queryString from 'query-string';
import { signinWithWechat } from '../../service'; 

class WechatLogin extends Component {
  state = {};
  async componentDidMount() {
    const queries = queryString.parse(this.props.location.search);
    const code = queries.code;
    const auth = await signinWithWechat(code);
    console.log(auth);
    this.setState({
      auth, 
    });
  }
  render() {
    const {auth} = this.state;
    return (
      <div className="App">
        { auth && 
            this.extractObject(auth)
        }
      </div>
    );
  }

  extractObject (obj) {
    return Object.keys(obj).map(key => {
      const content =(typeof obj[key] === 'object') 
        ? (
          <div key={key}>{key}: {this.extractObject(obj[key])} </div>
        ):(
          <div key={key}>{key}: {obj[key]}</div>
        );
      return content;
    });
  }
}

export default WechatLogin;


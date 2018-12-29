import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <a href={`${process.env.REACT_APP_AUTH_URL}/login/wechat/authorize`}>Signup with wechat</a>
      </div>
    );
  }
}

export default Home;


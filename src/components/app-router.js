import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import  WechatLogin from "./login/wechat";
import  Home from "./home";

const AppRouter = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>

      <Route path="/" exact component={Home} />
      <Route path="/auth/login/wechat" component={WechatLogin} />
    </div>
  </Router>
);

export default AppRouter;

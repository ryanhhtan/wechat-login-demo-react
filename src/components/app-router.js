import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import  WechatSignup from "./signup/wechat";
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
      <Route path="/signup/wechat" component={WechatSignup} />
    </div>
  </Router>
);

export default AppRouter;

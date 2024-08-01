import React from "react";
import { BrowserRouter as Router, } from "react-router-dom";
import Header from "./Header";
import Sider from "./Sider";
import Content from "./Content";

function Admin() {

  return (<Router>
    <Header />
    <div>
      <div>
        <Sider/>
      </div>
      <br/>
      <br/>
      <hr/>
      <br/>
      <br/>
      <div>
        <Content/>
      </div>
    </div>
  </Router>)
}

export default Admin
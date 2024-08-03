import React from "react";
import Header from "./Header";
import Sider from "./Sider";
import Content from "./Content";

function Admin() {

  return (<div>
    <Header />
    <div>
      <div>
        <Sider />
      </div>
      <br />
      <br />
      <hr />
      <br />
      <br />
      <div>
        <Content />
      </div>
    </div>
  </div>)
}

export default Admin
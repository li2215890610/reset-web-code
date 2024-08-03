import React from "react";
import { NavLink} from "react-router-dom";

function Sider() {
  return (<div>
    <NavLink to={'/hooks'}>Hooks</NavLink>
    <br />
    <NavLink to={'/rouerV6'}>RouerV6</NavLink>
    <br />
    <NavLink to={'/renderHtml'}>测试</NavLink>
  </div>)
}

export default Sider
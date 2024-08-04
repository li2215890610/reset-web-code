import React from "react";
import { Outlet, useRoutes, NavLink, Link } from "react-router-dom";
import { RouerV6List } from "../Routers/RouerV6";
import Head from "./Head";


function Index() {
    const element = useRoutes(RouerV6List)

    return (
        <>
            <Head/>

            {/* caseSensitive 区分大小写 */}
            <Link to={'/rouerV6'}  >这是 RouterV6 学习</Link>

            <hr></hr>
            <NavLink className={(is)=>{
                return is ? 'div1':'div2'
            }} to={'home'}  >主页</NavLink>
            <br />
            <NavLink to={'about'}  >关于</NavLink>
            <hr />
            {element}
            <Outlet />
        </>
    )
}
export default Index
import React from "react";

import AsyncComponent from "./components/AsyncComponent/AsyncComponent";


import './styles/common.less';


import { Layout } from 'antd';

// const { Footer } = Layout;

// import Header from "./components/Header/Header";
const Header =  AsyncComponent(() => import("./components/Header/Header"));

// import Footers from "./components/Footer/Footer";
const Footers =  AsyncComponent(() => import("./components/Footer/Footer"));

// import NavLefts from "./components/NavLeft/NavLeft";
const NavLefts =  AsyncComponent(() => import("./components/NavLeft/NavLeft"));

// import Contents from "./components/Content/Content";
const Contents =  AsyncComponent(() => import("./components/Content/Content"));



class Admin extends React.Component {

  constructor(props) {
    super(props)
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <Header />
        <Layout className='container'>
          <NavLefts className='nav_left' />
          <Layout className='content' style={{ overflowY: 'auto'}}>
            <Contents/>
            <Footers />
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default Admin;
import React from 'react';

import { Layout } from 'antd';

import { Route, Switch } from 'react-router-dom';

// import Breadcrumbs from "../Breadcrumb/Breadcrumbs";

import AsyncComponent from "../AsyncComponent/AsyncComponent";

// import Home from "../../pages/Home/Home";
const Home =  AsyncComponent(() => import("../../pages/Home/Home"));

// import Ui from "../../pages/Ui/Ui";
const Ui =  AsyncComponent(() => import("../../pages/Ui/Ui"));

// import Form from "../../pages/Form/Form";
const Form =  AsyncComponent(() => import("../../pages/Form/Form"));

// import Table from "../../pages/Table/Table";
const Table =  AsyncComponent(() => import("../../pages/Table/Table"));

// import City from "../../pages/City/City";
const City =  AsyncComponent(() => import("../../pages/City/City"));

// import Order from "../../pages/Order/Order";
const Order =  AsyncComponent(() => import("../../pages/Order/Order"));

// import NoMatch from "../../pages/NoMatch/NoMatch";
const NoMatch =  AsyncComponent(() => import("../../pages/NoMatch/NoMatch"));

// import LifeCycle from "../../pages/Component/LifeCycle";
const LifeCycle =  AsyncComponent(() => import("../../pages/Component/LifeCycle"));

const { Content } = Layout


class Contents extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }

  }

  render() {
    return (
      <div>
        {/* <Breadcrumbs/> */}
        <Content style={{ margin: '0px 16px 0px 16px', padding: '20px 5px', background: '#fff', minHeight: 280 }}>
          <Switch>
            <Route path="/home" component={Home}/>
            <Route path="/home/:type/:ks?" exact component={Home}/>
            <Route path='/ui' component={Ui} />
            <Route path='/form' component={Form} />
            <Route path='/table' component={Table} />
            <Route path='/city' component={City} />
            <Route path='/order' component={Order} />
            <Route path='/component' component={LifeCycle} />
            <Route component={NoMatch} />
          </Switch>
        </Content>
      </div>
    );
  }
}

export default Contents
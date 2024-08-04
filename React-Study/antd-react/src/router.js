import React from 'react';

import { BrowserRouter, Route, Switch, Router } from 'react-router-dom';

import AsyncComponent from "./components/AsyncComponent/AsyncComponent";

// import App from "./App";
import history from "./history";

// import Login from "./pages/Login/Login";
const Login = AsyncComponent(() => import("./pages/Login/Login"));

// import Admin from "./Admin";
const Admin = AsyncComponent(() => import("./Admin"));

// import NoMatch from "./pages/NoMatch/NoMatch";
const NoMatch = AsyncComponent(() => import("./pages/NoMatch/NoMatch"));

class IRouter extends React.Component {
  constructor(porps) {
    super(porps)
    this.state = {

    }
  }

  render() {
    return (
      <BrowserRouter>
        <Router history={history}>
          <Switch>
            <Route path='/login' component={Login} exact />
            <Route path='/' component={Admin} />
            {/* 没有开发完的组件 默认跳转 NoMatch 404组件 */}
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </BrowserRouter>
    )
  }
}

export default IRouter
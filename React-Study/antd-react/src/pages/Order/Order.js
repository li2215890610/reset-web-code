import React from 'react';

import { Route, Switch, } from 'react-router-dom';

import OrderDetail from "./OrderDetail/OrderDetail";

export default class Order extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }

  render() {
    return (
      <div>
        <Switch>
          <Route path="/order/detail" component={OrderDetail}/>
        </Switch>
      </div>
    );
  }
}



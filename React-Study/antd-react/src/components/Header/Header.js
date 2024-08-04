import React from 'react';

import "./Header.less";

import { Layout, Col, Row } from 'antd';

import Historys from "../../history";

const { Header } = Layout;


class Headers extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  componentWillMount = () => {
    this.setState({
      userName: "热特姐"
    })
  }

  loginGoOut = () => {
    const location = {
      pathname: `/login`,
      // pathname: `/home`,
    }
    Historys.push(location);
  }


  render() {

    let { userName } = this.state;
    return (
      <Header>
        <Row className='headers'>
          <Col span='24' className='header_top'>
            <div className='header_Go_Out'>
              <span>欢迎～{userName}</span>
              <a onClick={this.loginGoOut}>退出</a>
            </div>
          </Col>
        </Row>
      </Header>
    );
  }
}


export default Headers;
import React from 'react';

import { Breadcrumb,Col,Row } from 'antd';

import { connect } from "react-redux";

import "./Breadcrumbs.less";

import utlis from "../../utlis/utlis";

class Breadcrumbs extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      weatherData: {}
    }
  }

  componentDidMount = () => {
    setInterval(() => {
      this.setState({
        sysTime: utlis.formateData(new Date().getTime())
      })
    }, 1000)
  }

  render() {
    let { sysTime } = this.state;

    return (
      <div className='weather_data'>
        <Row>
          <Col span='24'>
            <div>
              <span className="sysTime">{sysTime}</span>
              <span>
                {this.props.menuName}{this.props.routerPage}
              </span>
              <Breadcrumb>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item><a href="">Application Center</a></Breadcrumb.Item>
                <Breadcrumb.Item><a href="">Application List</a></Breadcrumb.Item>
                <Breadcrumb.Item>An Application</Breadcrumb.Item>
              </Breadcrumb>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    menuName: state.menuName,
    routerPage: state.routerPage
  }
};


export default connect(mapStateToProps)(Breadcrumbs);
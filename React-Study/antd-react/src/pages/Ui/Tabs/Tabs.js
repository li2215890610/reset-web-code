import React from 'react';

import { Card, Row } from "antd";

import BasicsTabs from "./BasicsTabs/BasicsTabs";

import IconTabs from "./IconTabs/IconTabs";

import CustomDynamicAddTabs from "./CustomDynamicAddTabs/CustomDynamicAddTabs";

class Tabs extends React.Component {

  render() {
    return (
      <div>
        <Card title='Tab页签' className='card'>
          <Row>
            <BasicsTabs/>
          </Row>
        </Card>
        <Card title='Icon-Tab页签' className='card'>
          <Row>
            <IconTabs/>
          </Row>
        </Card>
        <Card title='自定义Tab页签' className='card'>
          <CustomDynamicAddTabs/>
        </Card>
        
      </div>
    );
  }
}

export default  Tabs ;

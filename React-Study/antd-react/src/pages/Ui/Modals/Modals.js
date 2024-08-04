import React from 'react';

import { Card } from "antd";

import BasicsModals from "./BasicsModals/BasicsModals";

import InformationConfirmModals from "./InformationConfirmModals/InformationConfirmModals";

class Modals extends React.Component {

  render() {
    return (
      <div>
        <Card title='基础模态框' className='card'>
          <BasicsModals/>
        </Card>
        <Card title='信息确认框' className='card'>
          <InformationConfirmModals/>
        </Card>
      </div>
    );
  }
}

export default  Modals ;

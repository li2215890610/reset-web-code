import React from 'react';

import { Card } from "antd";

import BasicsButton from "../Button/BasicsButton/BasicsButton";

import IconButton from "../Button/IconButton/IconButton";

import LoadingButton from "../Button/LoadingButton/LoadingButton";

import ButtonGroup from "../Button/ButtonGroup/ButtonGroup";

import ButtonSize from "../Button/ButtonSize/ButtonSize";

class Buttons extends React.Component {

  render() {
    return (
      <div>
        <Card title='基础按钮' className='card'>
          <BasicsButton/>
        </Card>
        <Card title='Icon按钮' className='card'>
          <IconButton/>
        </Card>
        <Card title='Loading按钮' className='card'>
          <LoadingButton/>
        </Card>
        <Card title='按钮组' className='card'>
          <ButtonGroup/>
        </Card>
        <Card title='按钮尺寸' className='card'>
          <ButtonSize/>
        </Card>
        
      </div>
    );
  }
}

export default  Buttons ;

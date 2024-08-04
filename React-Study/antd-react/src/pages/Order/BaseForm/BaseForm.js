import React from 'react'

import { Input, Select, Form, Button, DatePicker, Row, Col } from 'antd'

import Utils from '../../../utlis/utlis';

const FormItem = Form.Item;

class FilterForm extends React.Component {

  handleFilterSubmit = () => {
    let fieldsValue = this.props.form.getFieldsValue();
    
    const values = {
      ...fieldsValue,
      'begin_time': fieldsValue['begin_time'].format('YYYY-MM-DD HH:mm:ss'),
      'end_time': fieldsValue['end_time'].format('YYYY-MM-DD HH:mm:ss'),
    };    

    this.props.filterSubmit(values);
  }

  reset = () => {
    this.props.form.resetFields();
  }

  formList = [
    {
      list: [{ id: '0', name: '全部' }, { id: '1', name: '北京' }, { id: '2', name: '天津' }, { id: '3', name: '上海' }]
    },
    {
      list: [{ id: '0', name: '全部' }, { id: '1', name: '进行中' }, { id: '2', name: '结束行程' }]
    }
  ]



  render() {
    const { getFieldDecorator } = this.props.form;
    let { formList} = this;
    return (
      <Form layout="inline">
        <Row>
          <Col span={13}>
            <FormItem label="订单时间" >
              {
                getFieldDecorator('begin_time')(
                  <DatePicker showTime={true} placeholder='请输入' format="YYYY-MM-DD HH:mm:ss" />
                )
              }
            </FormItem>
            <FormItem label="~" colon={false} >
              {
                getFieldDecorator('end_time')(
                  <DatePicker showTime={true} placeholder='请输入' format="YYYY-MM-DD HH:mm:ss" />
                )
              }
            </FormItem>
          </Col>
          <Col span={3}>
            <FormItem  key='city'>
              {
                  getFieldDecorator('city')(
                    <Select
                      style={{width:'100px'}}
                      placeholder='请选择'
                    >
                        {Utils.getOptionList(formList[0].list)}
                    </Select>
                  )
              }
            </FormItem>
          </Col>
          <Col span={3}>
            <FormItem  key='order_status'>
              {
                  getFieldDecorator('order_status')(
                    <Select
                      style={{width:'100px'}}
                      placeholder='请选择'
                    >
                        {Utils.getOptionList(formList[1].list)}
                    </Select>
                  )
              }
            </FormItem>
          </Col>
          <Col span={5}>
            <FormItem>
                {
                  getFieldDecorator('inputValue')(

                    <Input type="text" placeholder='请输入搜索内容' />
                  )
                }
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span={5}>
            <FormItem>
              <Button type="primary" style={{ margin: '0 20px' }} onClick={this.handleFilterSubmit}>查询</Button>
              <Button onClick={this.reset}>重置</Button>
            </FormItem>
          </Col>
        </Row>
      </Form>
    );
  }
}
export default Form.create({})(FilterForm);
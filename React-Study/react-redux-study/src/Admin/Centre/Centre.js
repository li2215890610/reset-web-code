import React from 'react';

import { connect } from "react-redux";

import { removeListItem, completeListItem } from "../../actions/list";

import "../common.css";

class Centre extends React.Component {
  constructor(props){
    super(props)
    this.state = {
     
    }
  }
  
  removeListItem = (data) =>{
    console.log(data)
    this.props.removeListItem({
      ...data,
    })
  }

  completeListItem = (data) =>{
    this.props.completeListItem({
      ...data,
    })
  }

  render() {
    let { list} = this.props;

    const listArray = list.map(( item, index)=>{
      return (
        <li key={index} className="li">
          <div className="li_item_box"> 
            <div className={item.isSelect ? "li_item li_item_select":"li_item" } onClick={this.completeListItem.bind(this,item)}>
              {item.value}
            </div>
            {
              item.isSelect ?
              "":
              <div className="li_item_btn" >
                <button onClick={this.removeListItem.bind(this,item)}>删除</button>
              </div>
            }
          </div>
        </li>
      )
    })

    console.log(list)
    return (
      <div style={{marginTop:'20px'}}>
        <ul>
         {listArray}
        </ul>
      </div>
    );
  }
}


// connect 接受四个参数
// connect([mapStateToProps], [mapDispatchToProps])


// mapStateToProps 这个函数来指定如何把当前 Redux store树中的state 映射到展示组件的 props 中

// mapDispatchToProps() 方法接收 dispatch() 方法并返回期望注入到展示组件的 props 中的回调方触发action  


// 连接 redux
export default connect(({ list}) =>{
  
  return {
    list: list.list
  }
},(dispatch)=>{
  return {
    removeListItem(payload) {
      dispatch(removeListItem(payload));
    },
    completeListItem(payload) {
      dispatch(completeListItem(payload))
    }
  }
})(Centre);

import React from 'react';

import { connect } from "react-redux";

import { addListItem } from "../../actions/list";

import "../common.css";

class Header extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      value: ""
    }
  }

  static newId = 1

  clearTime = null 

  onInputChange = (e)=>{
    clearTimeout( this.clearTime); // 避免多次 render 属于性能提升优化
    this.setState({
      value: e.target.value
    })
  }

  inputChangeDispatch  = (value) =>{
    this.props.addListItem({
      ...value
    })
  }

  saveInputValue = () =>{
    console.log(this.props)
    if (this.state.value.length > 20) {
      alert("最多20个字符")
      return 
    }

    this.inputChangeDispatch({
      value: this.state.value,
      id: Header.newId++,
      isSelect: false
    }) 
    this.setState({
      value: ''
    })
  }

  render() {
    let { value} = this.state;
    return (
      <div className="head_box">
        <input value={value} onChange={ this.onInputChange}/>
        <button onClick={this.saveInputValue} className="head_box_save_btn">
          保存
        </button>
      </div>
    );
  }

}


// connect 接受四个参数 https://www.redux.org.cn/docs/basics/ExampleTodoList.html
// connect([mapStateToProps], [mapDispatchToProps])

// mapStateToProps 这个函数来指定如何把当前 Redux store树中的state 映射到展示组件的 props 中

// mapDispatchToProps() 方法接收 dispatch() 方法并返回期望注入到展示组件的 props 中的回调方法


// 连接 redux
export default connect(({ 
  list
}) =>{
  return {

  }
},(dispatch)=>{
  return {
    addListItem(payload) {
      dispatch(addListItem(payload));
    },
  }
})(Header);

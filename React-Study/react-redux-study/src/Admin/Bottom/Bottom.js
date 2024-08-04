import React from 'react';

import { connect } from "react-redux";

import { emptyList } from "../../actions/list";

import "../common.css";

class Bottom extends React.Component {
  constructor(props){
    super(props)
    this.state = {
     
    }
  }
  
  emptyListCLick = (data) =>{
    console.log(data)
    this.props.emptyList()
  }

  render() {
    let { list} = this.props;
    return (
      <div style={{marginTop:'20px'}} >
        {
          list.length !== 0 ? <button onClick={this.emptyListCLick}>清空</button>:""
        }
      </div>
    );
  }
}


// 连接 redux
export default connect(({ list}) =>{
  
  return {
    list: list.list
  }
},(dispatch)=>{
  return {
    emptyList(payload) {
      dispatch(emptyList(payload));
    },
  }
})(Bottom);

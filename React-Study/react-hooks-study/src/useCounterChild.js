import React, { useContext } from "react";
import { CreateContext } from "./useContext";

function CounterChild() {
  console.log('CounterChild___组件');
  return (<div style={{ border: 'solid 1px red' }}>
    <br />
    <br />
    <br />

    <p>CounterChild___组件</p>
    <br />
    <br />
    <br />
    <Child1 />

    <br />
    <br />
    <br />
  </div>)
}



function Child1() {
  const { count,onClickNumber, onReset } = useContext(CreateContext) //接收上下文数据
  
  console.log('Child1___组件');
  return (<div style={{ border: 'solid 1px blue' }}>
    <h2 onClick={() => {
      onClickNumber(count)
    }} style={{ cursor: 'pointer' }}>
      {count}{`我是一个普通文本点我`}
    </h2>
    <button onClick={()=>onReset()}>点我重置</button>
  </div>)
}




export default CounterChild
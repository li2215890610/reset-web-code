import React, { useContext } from "react";
import { CreateContextValue } from "./useContext";

function CounterChild(props) {

  const { count } = useContext(CreateContextValue) //接收上下文数据

  return (<h2 onClick={() => {
    props.onClick(count)
  }} style={{ cursor: 'pointer' }}>
    {count}{`我是一个普通文本点我`}
  </h2>)
}

export default CounterChild
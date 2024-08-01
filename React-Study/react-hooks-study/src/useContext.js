import React, { useState, createContext } from "react";
import CounterChild from "./useCounterChild";

export const CreateContextValue = createContext() //创建上下文

// 在跨组件层级获取数据时简化获取数据的代码，


//  createContext ,useContext 配合使用 父子组件传值
export default () => {

  const [count, setCount] = useState(0);

  function onClick(number) {
    alert(number)
  }

  return (
    <div>
      <h2>记录点击{count}次</h2>

      <button onClick={() => {
        setCount(count + 1)
      }}>点我</button>

      {/* 
        count 与 text 变量允许跨层级实现传递和使用（也就是实现了上下文），
        当父组件的count变量发生变化时，子组件也会发生变化
      */}

      <CreateContextValue.Provider value={{
        count,
      }}>
        <CounterChild onClick={onClick} />
      </CreateContextValue.Provider>
    </div>)
}
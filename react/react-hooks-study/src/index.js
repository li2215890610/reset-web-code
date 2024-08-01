import React from 'react';
import ReactDOM from 'react-dom';
import Admin from "./Admin/index";



// 对函数型组件进行增强,让函数型组件可以存储状态,
// 可以拥有处理副作用的能力.
//让开发者在不使用类组件的情况下, 实现相同的功能,


// 1.2 类组件的不足 (Hooks 要解决的问题)
//   1.缺少逻辑复用机制
//   为了复用逻辑增加无实际渲染效果的组件，增加了组件层级 
//   显示十分臃肿增加了调试的难度以及运行效率的降低
//   2.类组件经常会变得很复杂难以维护
//   将一组相干的业务逻辑拆分到了多个生命周期函数中在一个生命周期函数内存在多个不相干的业务逻辑
//   3.类成员方法不能保证this指向的正确性

// Hooks 意为钩子, React Hooks 就是一堆钩子函数,
//React 通过这些钩子函数对函数型组件进行增强,不同的钩子函数提供了不同的功能。


ReactDOM.render(
  // <React.StrictMode>
    <Admin/>
  // </React.StrictMode>
  ,
  document.getElementById('root')
);


import React, { useState } from 'react';
import { useUpdateInput } from "./UseCustom";

function Example(props) {


  /***
   * 1.接收唯一的参数即状态初始值,初始值可以是任意数据类型,
   * 2.返回值为数组,数组中存储状态值和更改状态值的方法,
   *    方法名称约定以set开头,后面加上状态名称.
   * 3.方法可以被调用多次,用以保存不同状态值.
   * 4.参数可以是一个函数,函数返回什么,初始状态就是什么,
   *  函数只会被调用一次,用在初始值是动态值的情况
   */

  //set方法是异步的 
  const [count, setCount] = useState(0);
  // ES6 语法中的数组解构导出
  // useState(0) 参数 0 是初始化数据
  // 导出的数据 
  // count [ 当前数据值, 修改数据的方法]
  const [preson, setPreson] = useState([{ name: '张三', age: "李四" }]);

  const userNameInput = useUpdateInput('');
  const userAgeInput = useUpdateInput('');

  const savePreson = () => {

    if (!userNameInput.value || !userAgeInput.value) return alert("请输入数据")

    setPreson(_data => {
      let newPreson = {
        age: userAgeInput.value,
        name: userNameInput.value
      }

      //清空
      userAgeInput.onChange('')
      userNameInput.onChange('')
      return [..._data,newPreson]
    })

    //异步
    console.log(preson);
  }

  const [fun] = useState(() => props.count || 100);
  console.log('我是父组件');

  return (
    <div>
      <h2>记录点击{count}次</h2>

      {/* 下面是错误的 必须嵌套一个函数*/}
      {/* <button onClick={
       setCount(count+1)
     }>点我</button> */}

      <button onClick={() => {
        // 第一种调用方式:setCount(新值)
        setCount(count + 1)
      }}>点我+1</button>
      <button onClick={() => {
        // 第二种调用方式:setCount(fn)
        // 第二种调用方式:setCount((prev)=> 基于prev计算并return一个新值)
        // 强调:当我们修改 state 状态的时候，如果我们发现:新值依赖于旧值(基于旧值进行计算，最终得到新值)
        // 此时，不要直接在外部进行计算，而是要通过 fn 函数的形参拿到旧值，并进行计算，最终 return 新值

        setCount((prev) => prev + 1)
        setCount((prev) => prev + 1)
      }}>点我+2,在上一次基础上加</button>

      <hr></hr>
      <input name='name' {...userNameInput} placeholder='请输入姓名' type='text' />
      <input name='age' {...userAgeInput} placeholder='请输入年龄' type='text' />
      <button onClick={savePreson}>保存</button>
      <ul>
        {preson.map(item => (<div key={`${item.name}-${item.age}`}><p>姓名：{item.name}</p>
          <p>年龄：{item.age}</p></div>))}
      </ul>


      <hr></hr>
      {fun}
      <hr></hr>

      <Child/>

    </div>
  );
}


function Child() {
  //模拟强制刷新
  const [,forceUpdate] = useState({});

  const update = ()=>forceUpdate({})
  console.log('我是子组件');
  return <>
    <button onClick={update}> forceUpdate {Date.now()}</button>
  </>
}

export default Example;

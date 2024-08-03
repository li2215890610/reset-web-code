import React, { useState, useMemo, memo } from "react";

// useMemo 缓存变量

const FC = () => {
  const [hanMeiMei, setHanMeiMei] = useState('韩梅梅代课状态');
  const [liLei, setLiLei] = useState('李磊代课状态');

  return <div>
    <button onClick={() => {
      setHanMeiMei(new Date().getTime())
    }}>韩梅梅</button>
    <br />

    <button onClick={() => {
      setLiLei(`${new Date().getTime()}-向我们走来`)
    }}>李磊</button>
    <br />

    {/* 父组件产生任何状态子组件都会执行  changeHanMeiMei  而 useMemo 绑定一个参数，如果这个参数变化了才去执行*/}
    <ChildComponent name={hanMeiMei}>
      {liLei}
    </ChildComponent>
  </div>
}


function ChildComponent({ name, children }) {

  function changeHanMeiMei(name) {
    console.log('她来了----她来了---她带着妹妹走来了');
    return `${name} 韩梅梅向我们走来了`
  }

  /**
   * 1、useMemo 的行为类似 Vue 中的计算属性,
   * 可以监测某个值的变化,根据变化值计算新值
   * 2、useMemo 会缓存计算结果,如果监测值没有发生变化,
   * 即使组件重新渲染,也不会重新计算,
   * 此行为可以有助于避免在每个渲染上进行昂贵的计算
   */

  //缓存name变量状态状态 监听状态,
  //name 发生改变后 才会执行这个函数
  const actionHanMeiMei = useMemo(() => {
    console.log('执行子组件的函数了');
    return changeHanMeiMei(name)
  }, [name]);
  // 不传数组，每次更新都会重新计算
  // 空数组，只会计算一次
  // 依赖对应的值，对应的值发生变化时会重新执行cb

  // const actionHanMeiMei = changeHanMeiMei(name);
  console.log('执行了子组件');
  return (<>
    <div>{actionHanMeiMei}</div>
    <br />
    {name}
    <div>{children}</div>
  </>)
}


const Son =  memo((props) => <div>{props.num}</div>)

// 父组件
const Father = () => {
  // 定义 count 和 flag 两个状态
  const [count, setCount] = useState(0)
  const [flag, setFlag] = useState(false)

  // 根据布尔值进行计算，动态返回内容
  // const tips = () => {
  //   console.log('触发了 tips 的重新计算')
  //   return flag ? <p>哪里贵了，不要睁着眼瞎说好不好</p> : <p>这些年有没有努力工作，工资涨没涨</p>
  // }

  const Tips = useMemo(() => {
    console.log('触发了 tips 的重新计算')
    return flag ? <p>哪里贵了，不要睁着眼瞎说好不好</p> : <p>这些年有没有努力工作，工资涨没涨</p>
  }, [flag]);


  return (
    <>
      <h1>父组件</h1>
      <p>count 的值是：{count}</p>
      <p>flag 的值是：{String(flag)}</p>
      {Tips}
      <button onClick={() => setCount((prev) => prev + 1)}>+1</button>
      <button onClick={() => setFlag((prev) => !prev)}>Toggle</button>
      <hr />
      <Son num={count} />
    </>
  )
}


const Index = () => <>
  <FC />
  <hr></hr>
  <Father/>
</>

export default Index;
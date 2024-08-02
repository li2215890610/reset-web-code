import React, { useRef, useState, useEffect, forwardRef, useImperativeHandle } from "react";

const Child = forwardRef((props, ref) => {
  const [count, setCount] = useState(0)
  useImperativeHandle(ref, () => {

    return {
      count,
      name: "useImperativeHandle 配合 ref使用"
    }
  })

  return <>
    <button onClick={() => setCount(prev => prev + 1)}>+1</button>
    <button onClick={() => setCount(prev => prev - 1)}>-1</button>

    <h1>子组件 {count}</h1>
  </>
})


export default () => {
  //只在组件第一次渲染的时候创建
  //如果多次 render ，不会重新创建

  //两个特性
  // 获取JSX里面的DOM值
  const inputEl = useRef(null);
  const onHandleClick = () => {
    //获取焦点
    inputEl.current.focus()
    inputEl.current.value = "哈喽，韩梅梅";
    console.log(inputEl);
  }

  // 保存变量
  const valueRef = useRef();
  const [value, setValue] = useState("哈喽,李磊");

  useEffect(() => {
    valueRef.current = value;
    console.log(valueRef.current);
  })


  //进入组件会加载代码，当重新渲染的时候 valueTimer.current 不会丢失
  const valueTimer = useRef();

  const [count, setCount] = useState(0);

  useEffect(() => {
    valueTimer.current = setInterval(() => {
      setCount((count) => count + 1)
    }, 2 * 1000);

  }, [])

  useEffect(() => {
    return () => {
      console.log(valueTimer.current);
      clearInterval(valueTimer.current)
    }
  }, [])


  const childRef = useRef();
  console.log('渲染了');

  return (<div>
    <input ref={inputEl} type='text' />
    <button onClick={onHandleClick}>在input上展示文字</button>
    <hr></hr>
    <br />
    <br />
    <br />
    <input type='text' value={value} onChange={(e) => { setValue(e.target.value) }}></input>
    <hr></hr>
    <br />
    <br />
    <br />
    每隔几秒+1{count}
    <br />
    <br />
    <br />
    <hr></hr>

    <button onClick={() => {
      console.log(childRef.current);
    }}>ref 结合 useImperativeHandle</button>
    <Child ref={childRef} />
  </div>)
}
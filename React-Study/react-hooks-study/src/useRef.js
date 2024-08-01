import React, { useRef, useState, useEffect } from "react";



export default () => {
  //两个特性
  // 获取JSX里面的DOM值
  const inputEl = useRef(null);
  const onHandleClick = () => {
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
      setCount( (count) => count + 1)
    }, 2 * 1000);

  }, [])

  useEffect(() => {
    return () => {
      console.log(valueTimer.current);
      clearInterval(valueTimer.current)
    }
  }, [])


  return (<div>
    <input ref={inputEl} type='text' />
    <button onClick={onHandleClick}>在input上展示文字</button>
    <br />
    <br />
    <br />
    <input type='text' value={value} onChange={(e) => { setValue(e.target.value) }}></input>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    {count}
  </div>)
}
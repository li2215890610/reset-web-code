import React, { useCallback, useEffect, useState, memo } from "react";


// useCallback 缓存函数

const useResize = () => {

  const [size, setSize] = useState({
    windth: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  })

  // 性能优化,缓存函数,使组件重新渲染时得到相同的函数实例.

  const onResize = useCallback(() => {
    console.log('resize________useCallback');
    setSize({
      windth: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    })
  }, [])

  useEffect(() => {
    window.addEventListener("resize", onResize)
    return () => {
      window.removeEventListener("resize", onResize)
    }
  }, [onResize])

  return size
}

export default () => {
  const [count, setCount] = useState(0);

  const size = useResize();
  console.log(size);

  const handeklReSetCount = useCallback(() => setCount(0), [setCount])

  return <div>
    <button onClick={() => {
      setCount(count + 1)
    }}>点我+1</button>
    <br />

    <button onClick={() => {
      setCount(count)
    }}>点我测试子组件不渲染</button>
    <br />
    <br />
    <br />

    我是展示count{count} <br />
    页面的Size: {size.windth} x {size.height}
    <Child count={count} handeklReSetCount={handeklReSetCount} onClick={() => {
      setCount(count - 1)
    }} />
  </div>
}

const Child = memo((props) => {

  console.log("执行子组件");
  return (<div>

    <button onClick={props.onClick}>点我-1</button>
    <br />

    <button onClick={() => {
      props.handeklReSetCount(0)
    }}>点我归0</button>
    
    <br />
  </div>)
})
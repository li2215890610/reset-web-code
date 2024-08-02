import React, { useLayoutEffect, useState, useEffect } from "react";


// useLayoutEffect //渲染完毕之前

/***
 * 用法相似
 * useLayoutEffect 和 useEffect 的使用方式很相似：
 * 
 * 1. useLayout 接收一个函数和一个依赖项数组作为参数
 * 2. 只有在数组中的依赖项发生改变时才会再次执行副作用函数
 * 3. useLayoutEffect 也可以返回一个清理函数 
 */

/***
 * 
 * 两者的区别
 * 执行时机不同：
 *    useEffect       中的回调函数在浏览器重新绘制屏幕之后触发
 *    useLayoutEffect 中的回调函数在浏览器重新绘制屏幕之前触发
 * 执行过程不同：
 *    useEffect       中的回调函数异步执行，不阻塞浏览器绘制
 *    useLayoutEffect 中的回调函数同步执行，阻塞浏览器重新绘制
 * 
 * 注意：React 保证了 useLayoutEffect 
 * 中的代码以及其中任何计划的状态更新都会在浏览器重新绘制屏幕之前得到处理。
 */

export default () => {

  return <>
    <RandomNumber/>
    <hr></hr>
    <RandomNumberLayout/>
  </>
}


const RandomNumber = () => {
  const [num, setNum] = useState(Math.random() * 200)

  useEffect(() => {
    if (num === 0) {
      setNum(10 + Math.random() * 200)
    }
  }, [num])

  // 代码，我们会发现这串数字会出现闪烁的情况。原因是页面会先将 h1 渲染为 0，
  // 然后再渲染成随机的数字，由于更新的很快便出现了闪烁 
  return (
    <>
      <h1>会闪烁</h1>
      <h2>num 的值是：{num}</h2>

      {/* 点击按钮，把 num 值设置为 0，当页面更新完成后，
      判断 num 是否等于 0，如果等于 0，则在 useEffect 中把 num 赋值为随机的数字：*/}

      <button onClick={() => setNum(0)}>重置 num</button>
    </>
  )
} 


const RandomNumberLayout = () => {
  const [num, setNum] = useState(Math.random() * 200)

  useLayoutEffect(() => {
    if (num === 0) {
      setNum(10 + Math.random() * 200)
    }
  }, [num])

  return (
    <>
      <h1>不会闪烁</h1>
      <h2>num 的值是：{num}</h2>
      <button onClick={() => setNum(0)}>重置 num</button>
    </>
  )
} 
import React from 'react'
import { useNavigationType, useResolvedPath } from "react-router-dom";

export default function About() {

  console.log(useNavigationType());
  // 1.作用: 返回当前的导航类型(用户是如何来到当前页面的)。
  // 2.返回值: POP、PUSH 、REPLACE
  // 3.备注: POP 是指在浏览器中直接打开了这个路由组件(刷新页面)。

  console.log(useResolvedPath(window.location.hash));
  //解析路由
  return (
    <div>About</div>
  )
}

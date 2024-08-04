import React, { useEffect } from "react";

export default function UseEffectIndex() {
  // 类似于  componentDidUpdate,componentDidMount
  useEffect(() => {
    console.log('我进来了 Index ');
  }, [])

  useEffect(() => {
    return () => {
      // componentWillUnmont  组件销毁
      console.log('我离开了 --- Index');
    }
  }, [])


  return <div>来了老弟 ---》 Index</div>
}

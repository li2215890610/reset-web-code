import React, { useEffect } from "react";

export default function UseEffectList() {
  // 类似于  componentDidUpdate,componentDidMount
  useEffect(() => {
    console.log('我进来了 List ');
  }, [])

  useEffect(() => {
    return () => {
      // componentWillUnmont  组件销毁
      console.log('我离开了 --- List');
    }
  }, [])

  return <div>来了老弟 ---》 List</div>
}

import React,{ useState, useMemo } from "react";

export default ()=>{
  const [ hanMeiMei, setHanMeiMei] = useState('韩梅梅代课状态');
  const [ liLei, setLiLei] = useState('李磊代课状态');

  return <div>
    <button onClick={()=>{
      setHanMeiMei(new Date().getTime())
    }}>韩梅梅</button>
    <br/> 

    <button onClick={()=>{
      setLiLei(`${new Date().getTime()}-向我们走来`)
    }}>李磊</button>
    <br/>

    {/* 父组件产生任何状态子组件都会执行  changeHanMeiMei  而 useMemo 绑定一个参数，如果这个参数变化了才去执行*/}
    <ChildComponent name={hanMeiMei}>
      {liLei}
    </ChildComponent>
  </div>
}


function ChildComponent({name,children}) {
  
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

  //缓存name状态 监听状态,name 发生改变后 才会执行这个函数
  const actionHanMeiMei = useMemo(()=> changeHanMeiMei(name),[name]);

  // const actionHanMeiMei = changeHanMeiMei(name);
  console.log('执行了子组件');
  return (<>
    <div>{actionHanMeiMei}</div>
    <br/>
    {name}
    <div>{children}</div>
  </>)
} 
import React,{ useState, memo } from "react";

// memo
//类似于 PureComponent 和 shouldComponentUpdate
//缓存组件，Props 不一样 就不运行

const Child = memo((props)=> {
    
  console.log("执行子组件");
    return (<div>
        我是展示{props.count}
    </div>)
})

export default ()=>{
  const [ count, setCount] = useState(0);

  return <div>
    <button onClick={()=>{
      setCount(count+1)
    }}>点我+1</button>
    <br/> 

    <button onClick={()=>{
      setCount(count-1)
    }}>点我-1</button>
    <br/> 

    <button onClick={()=>{
      setCount(count)
    }}>点我测试子组件不渲染</button>
    <br/> 

    <Child count={count}/>
  </div>
}


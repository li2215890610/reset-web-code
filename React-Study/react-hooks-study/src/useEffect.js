import React, { useEffect, useRef, useState, memo} from "react";
import { Route, Link } from "react-router-dom";
import imgUrl from "./useEffect.jpg";

function Index() {
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

function List() {

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


function getData(params) {

  const data = {
    code: 200,
    message: null,
    list: [{
      name: '张三',
      age: 20
    }, {
      name: '张四',
      age: 20
    }, {
      name: '张五',
      age: 20
    },]
  }

  return new Promise((resolve, reject) => {

    setTimeout(() => {
      resolve(data)
    }, 2 * 1000);
  })
}

let showComponent = false;

const useMouseInfo = () => {

  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {

    window.addEventListener("mousemove", onMousemove)

  }, [])

  function onMousemove(e) {
    setPosition({ x: e.clientX, y: e.clientY })
  }

  useEffect(() => {
    return () => {
      window.removeEventListener('mousemove', onMousemove)
    }
  }, [])

  return [position, onMousemove]
}

const MouseInfo =  memo(() => {
  const [position] = useMouseInfo()

  return (<>
    {position.x} ,{position.y}
  </>)
})


export default () => {

  let timer = useRef();

  const [count, setCount] = useState(0)
  const [list, setList] = useState([])

  useEffect(() => {

    console.log('componentDidMount-----1');
    // 类似于 componentDidMount
    console.log('初始化函数');

    showComponent = true;

    timer.current = setInterval(() => {
      setCount(_ => _ + 1)
    }, 5 * 1000);

    //自调用函数，成异步
    console.log('0');
    (async () => {
      console.log('2');
      let { list: listData } = await getData()
      console.log('3');
      setList(listData)
      console.log('4');
    })(); (async () => {
      await getData()
    })()


    console.log('1');
    console.log('1.1');
    console.log('1.2');

  }, [])


  useEffect(() => {

    // componentWillUnmont  组件销毁
    return () => {
      showComponent = false
      clearInterval(timer.current)
      console.log('我离开了/useEffect  ');
    }
  }, [])



  // 类似于  componentDidUpdate
  useEffect(() => {

    if (showComponent) {
      console.log(`
        count 变化了
        类似于 componentDidUpdate
      `);

      if (count > 4) clearInterval(timer.current)
    }
    // else {
    //   showComponent = true

    //   console.log(`
    //     count 初始化
    //     类似于componentDidMount
    //   `);
    // }
    console.log('监听 count ，count变化就执行');
    //监听 count ，count变化就执行
  }, [count])

  console.log(list);
  return (<div>
    <img alt="" src={imgUrl} style={{ width: '800px', height: "300px" }} />

    <h2>记录点击{count}次</h2>

    <button onClick={() => {
      setCount(count + 1)
    }}>点我</button>

    <ul>
      {list && list.map(_ => (<li key={_.name + _.age}>
        <p>姓名：{_.name} 年龄：{_.age}</p>
      </li>))}
    </ul>

    <hr></hr>
    <MouseInfo />
    <hr></hr>

    <div>
      <br />
      <Link to="/useEffect/index">/useEffect/index</Link>
      <br />
      <br />
      <Link to="/useEffect/list">/useEffect/list</Link>
    </div>
    <Route path="/useEffect/index" component={Index} />
    <Route path="/useEffect/list" component={List} />

  </div>)
}
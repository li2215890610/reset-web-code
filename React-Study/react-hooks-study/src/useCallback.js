import React, { useCallback, useEffect, useState, memo } from "react";



const SearchInput = memo((props) => {

  useEffect(() => {
    console.log('触发了 SearchInput 的 rerender')
  })

  return <input onChange={props.onChange} placeholder="请输入搜索关键字" />
} )

// 子组件：搜索结果
const SearchResult = (props) => {
  const [list, setList] = useState([])

  useEffect(() => {
    console.log('触发了 SearchResult 的 rerender')
  })

  useEffect(() => {
    // 如果 query 为空字符串，则清空当前的列表
    if (!props.query) return setList([])

    // 查询数据
    setTimeout(() => {
      setList([{
        id:1,
        word:'111'
      },
      {
        id:2,
        word:'111'
      },
      {
        id:3,
        word:'111'
      },
      {
        id:4,
        word:'111'
      }])
    }, 2 * 1000);
  }, [props.query])

  // 渲染列表数据
  return list.map((item) => <p key={item.id}>{item.word}</p>)
} 


// 父组件
export const SearchBox = () => {
  const [kw, setKw] = useState('')

  // const onKwChange = (e) => {
  //   setKw(e.currentTarget.value)
  // }

  //缓存这个函数，等改变kw值的时候，函数重新执行， SearchInput不会重新执行
  const onKwChange = useCallback((e)=>{
    setKw(e.currentTarget.value)
  },[])

  return (
    <div style={{ height: 500 }}>
      <SearchInput onChange={onKwChange} />
      <hr />
      <SearchResult query={kw} />
    </div>
  )
} 

export default SearchBox


// // useCallback 缓存函数

// const useResize = () => {

//   const [size, setSize] = useState({
//     windth: document.documentElement.clientWidth,
//     height: document.documentElement.clientHeight
//   })

//   // 性能优化,缓存函数,使组件重新渲染时得到相同的函数实例.

//   const onResize = useCallback(() => {
//     console.log('resize________useCallback');
//     setSize({
//       windth: document.documentElement.clientWidth,
//       height: document.documentElement.clientHeight
//     })
//   }, [])

//   useEffect(() => {
//     window.addEventListener("resize", onResize)
//     return () => {
//       window.removeEventListener("resize", onResize)
//     }
//   }, [onResize])

//   return size
// }

// export default () => {
//   const [count, setCount] = useState(0);

//   const size = useResize();
//   console.log(size);

//   const handeklReSetCount = useCallback(() => {
//     console.log('执行 useCallback');
//     setCount(0)
//   }, [setCount])

//   return <div>
//     <button onClick={() => {
//       setCount(count + 1)
//     }}>点我+1</button>
//     <br />

//     <button onClick={() => {
//       setCount(count)
//     }}>点我测试子组件不渲染</button>
//     <br />
//     <br />
//     <br />

//     我是展示count{count} <br />
//     页面的Size: {size.windth} x {size.height}
//     <Child count={count} handeklReSetCount={handeklReSetCount} onClick={() => {
//       setCount(count - 1)
//     }} />
//   </div>
// }

// const Child = memo((props) => {

//   console.log("执行子组件");
//   return (<div>

//     <button onClick={props.onClick}>点我-1</button>
//     <br />

//     <button onClick={() => {
//       props.handeklReSetCount(0)
//     }}>点我归0</button>
    
//     <br />
//   </div>)
// })
import React, { useRef, useState, forwardRef, useImperativeHandle } from "react";

const Child = forwardRef((_, ref) => {
    const [count, setCount] = useState(0)

    //首次渲染执行，并且后续只要state 变化 都会执行
    // useImperativeHandle(ref, () => {
    //     console.log('执行了 useImperativeHandle 的回调函数');
    //     return {
    //         count,
    //         reset: () => setCount(0),
    //         name: "useImperativeHandle 配合 ref使用"
    //     }
    // })


    //首次渲染执行，后续不会执行
    // useImperativeHandle(ref, () => {
    //     console.log('执行了 useImperativeHandle 的回调函数');
    //     return {
    //         count,
    //         reset: () => setCount(0),
    //         name: "useImperativeHandle 配合 ref使用"
    //     }
    // },[])

    //依赖count变化，调用回调函数
    useImperativeHandle(ref, () => {
        console.log('执行了 useImperativeHandle 的回调函数');
        return {
            count,
            reset: () => setCount(0),
            name: "useImperativeHandle 配合 ref使用"
        }
    }, [count])


    return <>
        <button onClick={() => setCount(prev => prev + 1)}>+1</button>
        <button onClick={() => setCount(prev => prev - 1)}>-1</button>

        <h1>子组件 {count}</h1>
    </>
})


export default  function UseImperativeHandleApp () {

    const childRef = useRef();
    console.log('渲染了');

    return (<div>

        <button onClick={() => {
            console.log(childRef.current);
        }}>ref 结合 useImperativeHandle</button>

        <button onClick={() => {
            childRef.current.reset()
        }}>重置</button>

        <Child ref={childRef} />
    </div>)
}
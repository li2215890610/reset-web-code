import React, { useState} from 'react';

function Example(props) {


  /***
   * 1.接收唯一的参数即状态初始值,初始值可以是任意数据类型,
   * 2.返回值为数组,数组中存储状态值和更改状态值的方法,
   *    方法名称约定以set开头,后面加上状态名称.
   * 3.方法可以被调用多次,用以保存不同状态值.
   * 4.参数可以是一个函数,函数返回什么,初始状态就是什么,
   *  函数只会被调用一次,用在初始值是动态值的情况
   */
  //set方法是异步的 
  const [ count, setCount] = useState(0);
  // ES6 语法中的数组解构导出
  // useState(0) 参数 0 是初始化数据
  // 导出的数据 
  // count [ 当前数据值, 修改数据的方法]
  const [ preson, setPreson] = useState({name:'张三',age:"李四"});

  const onChange = ({target}) =>{
    console.log(target.value);
    setPreson( _data => ({
      ..._data,
      [target.name]:target.value
    }))
  }

  const savePreson = () => {
    setPreson( _data => {

      const newPreson = {
        ..._data,
      }
      
      document.title = newPreson.name;
      return newPreson
    })
  }
   
  const [ fun ] = useState(()=> props.count || 100);

  return (
    <div>
     <h2>记录点击{count}次</h2>

     {/* 下面是错误的 必须嵌套一个函数*/}
     {/* <button onClick={
       setCount(count+1)
     }>点我</button> */}
     
     <button onClick={()=>{
       setCount(count+1)
     }}>点我</button>

     <hr></hr>
     <input name='name' placeholder='请输入姓名' type='text' onChange={onChange} />
     <input name='age' placeholder='请输入年龄' type='text' onChange={onChange} />
     <button onClick={savePreson}>保存</button>
     <p>姓名：{preson.name}</p>
     <p>年龄：{preson.age}</p>

     <hr></hr>
     {fun}
    </div>
  );
}

export default Example;

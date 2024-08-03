import React,{ useState } from "react";


function Example2() {
  const [ name] = useState("jack");
  const [ age] = useState(27);
  const [ work] = useState("新闻记者");

  if (age > 26) {
    console.log('222');
  }  

  return (<div>
    {name}今年{age}职业{work}
  </div>)
}

export default Example2

/**
 * 
 
//错误实例

import React, { useState } from 'react';

let showSex = true
function Example2(){
    const [ age , setAge ] = useState(18)
    if(showSex){
        const [ sex , setSex ] = useState('男')
        showSex=false
    }

    const [ work , setWork ] = useState('程序员')
    return (
        <div>
            <p>JSPang 今年:{age}岁</p>
            <p>性别:{sex}</p>
            <p>工作是:{work}</p>

        </div>
    )
}
export default Example2;






错误信息
```
React Hook "useState" is called conditionally. React Hooks must be called in the exact same order in every component render
```
错误的大概信息是 **React Hooks** 不能出现在条件判断语句中，因为它必须在最外层，不能嵌套。

**++所有的 hooks 不能嵌套，必须在最外层++**
 * 
 */
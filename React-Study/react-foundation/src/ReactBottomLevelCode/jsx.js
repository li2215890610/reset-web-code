import React from 'react';

//内部为这样转换
// JXS --> React.createElement --> React元素（虚拟DOM）

//JXS 是React.createElement的（简化语法）

//以下三者相等，一步一步转换
//JXS 语法被@babel/preset-react编译成React.createElement创建的元素
const ElementJsx = () => (<h1 className='box_h1'>我创建了一个元素</h1>)

const ElementCreate = ()=> React.createElement('h1',{
    className:'box_h1'
},'我创建了一个元素')

const ReactCreateElementDom = {
    type: 'h1',
    props:{
        className:'box_h1',
        children: '我创建了一个元素'
    },
}

const App = () => {
    
    return (<div>
        <ElementJsx/>
        <ElementCreate/>
        {ReactCreateElementDom.type}
    </div>)
}

export default App


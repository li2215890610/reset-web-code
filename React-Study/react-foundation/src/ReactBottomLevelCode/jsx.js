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

//1、虚拟DOM，本质就是Object类型
//2、虚拟DOM属性值少 轻，真实的DOM属性多 重。虚拟DOM是React内部在用，无需真实 DOM上那么多属性
//3、
const ReactCreateElementDom = {
    type: 'h1',
    ref:null,
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


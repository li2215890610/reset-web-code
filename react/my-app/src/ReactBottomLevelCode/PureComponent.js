
import React from 'react';

// 纯组件:PureComponent 与React.Component 
// 功能相似区别:PureComponent 内部自动实现了 shouldComponentUpdate 钩子,不需要手动比较
// 原理:纯组件内部通过分别 对比 前后两次 props 和 state 的值，来决定是否重新渲染组件


/***** 
 * 说明:纯组件内部的对比是 shallow compare(浅层对比)
 * 对于值类型来说: 比较两个值是否相同(直接赋值即可，没有坑)
 * let number = 0
 * let newNumber = number
 * newNumber = 2
 * console.1og(number ==newNumber) //false
 *     state = { number : 0 }
 *     setState({
 *        number: Math.floor(Math.random()*3)
 *     })
    // PureComponent 内部对比:
    最新的state.number === 上一次的state.number // false，重新渲染组件
 * 
 * 对于引用类型来说:只比较对象的引用(地址)是否相同
 * const obj={number:0}
 * const newobj= obj 
 * newobj.number = 2 
 * console.log(newobj === obj) //true
 * 
 * // 错误做法 比较的是内存地址，所以浅拷贝不行
 * state={ obj:{number:0}}
 * state.obj.number=2
 * this.setState({ obj: state.obj })
 * //Purecomponent内部比较:
 * 最新的state.obj === 上一次的state.obj // true，不重新渲染组件
 * 
 * 
 * // 正确 创建新数据
 * const newohj={...state.obj, nuber: 2}
 * this.setState({ obj: newobj })
 * // 正确 创建新数据
 * //不要用数组的push / unshift 等直接修改当前数组的的方法
 * // 而应该用 concat 或 slice 等这些返回新数组的方法
 * //解构方式的深拷贝
 * this.setState({list:[...this.state.list，{新数据}]})
 */

class Child extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        //每次组件渲染都会触发，用来渲染UI
        console.log('Child__render--');
        return (
            <div>
                <h1>大标题React的生命周期 {this.props.count}</h1>
            </div>
        );
    }

}


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            countNum: 0
        }
    }


    handleClick() {
        this.setState({
            count: Math.floor(Math.random() * 2),
            countNum: this.state.countNum + 1
        })
    }

    render() {
        //每次组件渲染都会触发，用来渲染UI
        console.log('render--');
        return (
            <div>
                <h1>纯组件--PureComponent--,替代 shouldComponentUpdate </h1>
                <button onClick={this.handleClick.bind(this)}>点我随机生成数</button>
                {this.state.countNum < 10 && <Child count={this.state.count} />}
            </div>
        );
    }
}

export default App;



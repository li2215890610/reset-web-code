import React from "react";

class ThisTMClass extends React.Component {
    constructor() {
        super()
        this.state = {
        }
    }

    //类实例方法
    handleClick = _ => {
        console.log(this);
    }

    handleClick1() {
        console.log(this);
    }

    render() {
        // 利用箭头函数自身不绑定this
        //render 方法是 class 里面实例方法，可以直接调用

        return (<div>
            <h6>Class 方式</h6>

            <button onClick={this.handleClick}>
                这是一个测试 Class 实例方法 箭头函数的this组件1
            </button>
            <button onClick={(e) => {
                console.log(e);
                this.handleClick()
            }}>
                这是一个测试箭头函数的this组件2
                用来获取 event
            </button>
            <button onClick={this.handleClick1.bind(this)}>
                这是一个测试函数的this组件 用bind 绑定
            </button>
        </div>)
    }
}

export default ThisTMClass
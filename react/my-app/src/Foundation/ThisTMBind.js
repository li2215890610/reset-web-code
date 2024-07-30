import React from "react";

class ThisTMClass extends React.Component {
    constructor() {
        super()
        this.state = {
        }

        // this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        console.log(this);
    }

    handleClick1() {
        console.log(this);
    }

    render() {

        return (<div>
            <h6>Bind 方式</h6>
            <button onClick={this.handleClick}>
                这是一个测试普通函数的this组件1
            </button>
            <button onClick={this.handleClick1.bind(this)}>
                这是一个测试普通函数的this组件2
            </button>
        </div>)
    }
}

export default ThisTMClass
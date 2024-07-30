import React from "react";

class Test2 extends React.Component {
    //在 constructor 使用 props
    constructor(props) {
        super(props)
        this.state = {

        }
    }


    render() {
        return (<div>
            <h3>子组件接收 父组件通讯函数组件{this.props.name}</h3>
            <button onClick={() => {
                this.props.handleClick(222)
            }}>{this.props.children}</button>
        </div>)
    }
}

export default Test2
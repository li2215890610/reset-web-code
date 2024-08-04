import React from "react";

import Child from "./Child";

export default class Life extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count:0
        }
    }
    
    handeAdd = () => {
        this.setState({
            count:this.state.count + 1
        })
    }

    render() {
        let { count} = this.state;
        return <div>
            <p>测试</p>
            <button onClick={this.handeAdd.bind(this)}>点击</button>
            <p>{count}</p>
            <Child name={count}/>
        </div>
    }
}



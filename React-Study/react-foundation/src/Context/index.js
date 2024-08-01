import React from "react";

const { Provider, Consumer } = React.createContext()

class App extends React.Component {
    //在 constructor 使用 props
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    onClick = () => {
        this.setState({
            count: this.state.count+1
        })
    }

    render() {
        //跨组件传递数据（比如：主题、语言）
        //从 app 直接传值到 child
        //Provider 包裹父组件，提供数据
        return (<Provider value={this.state.count}>
            <div className="app">
                <h3>Context</h3>

                <button onClick={this.onClick}>点我</button>
                <Node />
            </div>
        </Provider>)
    }
}

const Node = props => {
    console.log('node__');
    return (<div className="node">
        <SubNode />
    </div>)
}

const SubNode = props => {
    console.log('SubNode__');
    return (<div className="sub__node">
        <Child />
    </div>)
}


const Child = props => {
    //Consumer 子组件，接收数据
    return (<div className="child">
        <Consumer>
            {
                data => <span>我是子节点----{data}</span>
            }
        </Consumer>
    </div>)
}


export default App

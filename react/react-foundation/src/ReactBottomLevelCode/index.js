import React from 'react';
import JsxEle from "./jsx";
import ChildComponent from "./ChildComponent";
import PureComponent from "./PureComponent";
import Diff from "./Diff";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1
    }
  }
  handleClick(){
    // 1. setState()的说明
    //异步更新数据
    //可以调用多次 setState 但是只触发一次 render
    console.log(this.state.count);
    this.setState({
      count: this.state.count + 1
    },()=>{
      console.log(this.state.count);
    })

    console.log(this.state.count);
  }

  render() {
    //每次组件渲染都会触发，用来渲染UI
    console.log('render--');
    return (
      <div>
          <h1>底层揭秘 </h1>
          <button onClick={this.handleClick.bind(this)}>setState异步 {this.state.count}</button>
          {/* 2. JSX 语法的转化过程 */}
          <JsxEle/>
          {/* 3. 组件更新机制  父组件更新，子组件全部更新
              4. 组件性能优化
          */}
          <ChildComponent />
          <PureComponent />
          {/* 5. 虚拟 DOM 和 Diff 算法 */}
          <Diff/>
      </div>
    );
  }
}
export default App;



import React from "react";

import Test1 from "./Test1";
import Test2 from "./Test2";

class Index extends React.Component {
    //在 constructor 使用 props
    constructor(props){
        super(props)
        this.state = {
          count:0
        }
    }
    
    handleFun(data) {
      this.setState({
        count: this.state.count+1
      },()=>{
        console.log('子组件给父组件传值',data, this.state.count);
      })
    }
    
    render() {
        return (<div>
          <h3>组件通讯</h3>
          <Test2 name="李四" handleClick={this.handleFun.bind(this)}>
            {/* 嵌套children */}
            <div>
              点我打印父组件的方法 +1吧！
            </div>
          </Test2>
          <Test1 count={this.state.count}/>
        </div>)
    }
}

export default Index

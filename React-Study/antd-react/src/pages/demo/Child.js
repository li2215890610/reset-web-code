import React from "react";

// import "./index.less";
import styles from "./index.css";

export default class Child extends React.Component {
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
    //组件初始化时只调用，以后组件更新不调用，整个生命周期只调用一次， vue里面mounted jq 的 document.ready
    componentWillMount = () => {
      console.log("初始化");
      
    }
    componentDidMount = () => {
      console.log('组件渲染之后调用，只调用一次')
    }
    //接收父组件参数
    componentWillReceiveProps = (newProps) =>{
      console.log('组件初始化时不调用，组件接受新的props时调用。 接收父组件属性',newProps.name);
      
    }
    
    shouldComponentUpdate = () =>{
      //如果 return false 下面的方法就不会走了
      //使用情况如下  react性能优化非常重要的一环。组件接受新的state或者props时调用，
      //我们可以设置在此对比前后两个props和state是否相同，如果相同则返回false阻止更新，
      //因为相同的属性状态一定会生成相同的dom树，这样就不需要创造新的dom树和旧的dom树进行diff算法对比，
      //节省大量性能，尤其是在dom结构复杂的时候 
      return true
    }
    componentWillUpdate = () =>{
      console.log('在组件接收到新的props或者state但还没有render时被调用。在初始化时不会被调用。');
      
    }
    componentDidUpdate = () =>{
      console.log(' 在组件完成更新后立即调用。在初始化时不会被调用。或者 shouldComponentUpdate 返回 true 也调用')
    }

    componentWillUnmount = ()=>{
      console.log(' 在组件从 DOM 中移除的时候立刻被调用')
    }
    render() {
        let { name} = this.props;
        return <div className={styles.p}>
          <p>我是子组件</p>
           <p>{name}</p>
        </div>
    }
}



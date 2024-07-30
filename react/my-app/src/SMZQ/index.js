import React from 'react';


//创建时
//constructor --> render --> componentDidMount
//更新时 导致更新的方式 newProps、setState、forceUpdate“强制更新”
//render --> componentDidUpdate 
//卸载时
//componentWillUnmount

class Child extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    //创建组件，最先运行 
    // 1.初始化 state
    // 2.为事件处理绑定this
    console.log('Child__Child__constructor__初始化');
  }

  //在第一次 render 渲染 后调用
  //才能进行 dom操作
  //用来 Ajax
  componentDidMount() {
    console.log('Child__Component DID MOUNT!')
    setTimeout(() => {
      document.querySelector('h1').innerText = '我是更改过的 h1 文案'
    }, 2000);
  }

  //getDerivedStateFromProps 会在调用 render 方法之前调用，
  //即在渲染 DOM 元素之前会调用，并且在初始挂载及后续更新时都会被调用。
  //返回一个对象来更新状态，或者返回null来表明新属性不需要更新任何状态
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('Child__getDerivedStateFromProps!');
    if (nextProps !== prevState) {
      return {
        nextProps: nextProps
      };
    }
    return null;
  }

  //返回一个布尔值。在组件接收到新的props或者state时被调用。
  //在初始化时或者使用 forceUpdate时不被调用。 可以在你确认不需要更新组件时使用。
  shouldComponentUpdate(newProps, newState) {
    console.log('Child__shouldComponentUpdate!');
    
    //新的和旧的相同 就不让返回，用于性能优化   
    //简化写法 return newProps.count !== this.props.count 
    if (newProps.count === this.props.count ) {
      debugger
      return false
    }

    return true;
  }

  // 方法在最近一次渲染输出（提交到 DOM 节点）之前调用。
  //在组件接收到新的props或者state但还没有render时被调用。
  //在初始化时不会被调用。
  //参数为 老的值
  getSnapshotBeforeUpdate(prevProps, preState) {
    console.log(prevProps, 'Child__Component getSnapshotBeforeUpdate!');
    return 'getSnapshotValue———— 返回值11'
  }

  // 在组件完成更新后立即调用。在初始化时不会被调用。
  componentDidUpdate(prevProps, prevState, getSnapshotValue) {
    console.log('         ');
    console.log('         ');
    console.log('Child__', getSnapshotValue);
    console.log('Child__Component DID UPDATE!')

    if (this.props.count !== prevProps.count) {
      console.log("数据不一样了--老 ", prevProps.count);
      console.log("数据不一样了--新 ", this.props.count);
    }
    console.log('         ');
    console.log('         ');
  }
  // //在组件从 DOM 中移除的时候立刻被调用。
  componentWillUnmount() {
    console.log('Child__Component WILL UNMOUNT!')
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
    //创建组件，最先运行 
    // 1.初始化 state
    // 2.为事件处理绑定this
    console.log('constructor__初始化');
  }

  //在第一次 render 渲染 后调用
  //才能进行 dom操作
  //用来 Ajax
  componentDidMount() {
    console.log('Component DID MOUNT!')
    setTimeout(() => {
      document.querySelector('h1').innerText = '我是更改过的 h1 文案,点击5次就消失'
    }, 2000);
  }

  //返回一个对象来更新状态，或者返回null来表明新属性不需要更新任何状态
  //getDerivedStateFromProps 会在调用 render 方法之前调用，
  //即在渲染 DOM 元素之前会调用，并且在初始挂载及后续更新时都会被调用。
  //返回一个对象来更新状态，或者返回null来表明新属性不需要更新任何状态
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('Component__getDerivedStateFromProps!');
    if (nextProps !== prevState) {
      return {
        nextProps: nextProps
      };
    }
    return null;
  }


  //返回一个布尔值。在组件接收到新的props或者state时被调用。在初始化时或者使用forceUpdate时不被调用。 可以在你确认不需要更新组件时使用。
  shouldComponentUpdate(newProps, newState) {
    console.log('Component__shouldComponentUpdate!');

    return true;
  }


  //在组件接收到新的props或者state但还没有render时被调用。
  //在初始化时不会被调用。
  //参数为 老的值
  getSnapshotBeforeUpdate(prevProps, preState) {
    console.log('Component getSnapshotBeforeUpdate!');
    return null
  }

  // 在组件完成更新后立即调用。在初始化时不会被调用。
  componentDidUpdate(prevProps, prevState) {
    console.log('Component DID UPDATE!')
  }

  // //在组件从 DOM 中移除的时候立刻被调用。
  componentWillUnmount() {
    console.log('Component WILL UNMOUNT!')
  }

  handleClick() {
    this.setState({
      count: Math.floor(Math.random() * 5),
      countNum: this.state.countNum + 1
    })
  }

  render() {
    //每次组件渲染都会触发，用来渲染UI
    console.log('render--');
    return (
      <div>
        <h1>大标题,点击5次就消失 </h1>
        <button onClick={this.handleClick.bind(this)}>点我随机生成数</button>
        {this.state.countNum < 5 && <Child count={this.state.count} />}
      </div>
    );
  }
}

export const ChildTM = _ => <Child />
export default App;



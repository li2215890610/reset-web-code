import React from 'react';
import ImgUrl from "./index.jpg";

// 虚拟 DOM:本质上就是一个JS 对象，用来描述你希望在屏幕上看到的内容(UI)。

/***
 * //react 会把虚拟DOM对象 转化为 ————————————————》  页面元素
 * const ReactCreateElement = {
 *    type: 'h1',                                   <h1 class="box_h1">我创建了一个元素</h1>
 *    props:{
 *      className:'box_h1',
 *      children: '我创建了一个元素'
 *    },
 * }
 * 
 * const ReactCreateElement = {
 *    type: 'div',                                   <div class="box_h1"> <h1>我是大标题</h1> <div> 我创建了一个元素</div>  </div>
 *    props:{
 *      className:'box_h1',
 *      children: [
 *        {
 *          type: 'h1',                                   
 *          props:{
 *          children: '我是大标题'
 *        },
 *        {
 *          type: 'div',                                   
 *          props:{
 *          children: '我创建了一个div元素'
 *        }]
 *    },
 * }
 */

/****
 * 1、初次渲染时，React 会根据初始 state( Model),创建一个虛拟 DOM 对象(树)。
 * 2、根据虛拟 DOM 生成真正的 DOM,渲染到页面中,
 * 3、 newProps、setState、forceUpdate“强制更新” 
 *     当以上操作导致虚拟DOM变化时，
 *     重新根据新的数据进行渲染，创建新的虚拟DOM数
 * 4、与上一次得到的虚拟 DOM 对象,使用 Diff 算法 对比(找不同)，
 *    得到需要更新的内容。
 * 5、最终，React 只将变化的内容更新(patch)到DOM中，重新渲染到页面，
 */


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1
    }
  }
  
  render() {
  /***
  * 1、组件 render() 调用后，根据 状态 和 JSX结构 生成虚拟DOM对象
  * 2、每次 state 改变 都会触发render，
  * 3、用来渲染UI,但是并不代表渲染所有的UI
  * 4、通过diff算法找出差异，更新有差异的UI
  */

    console.log('render--');
    return (
      <div>
        <img src={ImgUrl}></img>
      </div>
    );
  }
}
export default App;



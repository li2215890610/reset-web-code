import React from 'react';
import { BrowserRouter, Link } from "react-router-dom";
import Route from "./Route";
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }

  }

  //发展历程 https://www.cnblogs.com/yuboon/p/10415898.html
  /***
   * 现代的前端应用大多都是 SPA(单页应用程序)，也就是只有一个 HTML 页面的应用程序。
   * 因为它的用户体验更好、对服务器的压力更小，所以更受欢迎。
   * 为了有效的使用单个页面来管理原来多页面的功能，前端路由应运而生。
   * 1、前端路由的功能:让用户从一个视图(页面)导航到另一个视图(页面 )
   * 2、前端路由是一套映射规则，在React中，是URL路径 与 组件 的对应关系
   * 3、使用React路由简单来说，就是配置 路径和组件(配对)
   */

  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <BrowserRouter>
          {/* 指定入口 */}
          <Link to={'/foundation'}>React基础</Link>
          <Link to={'/comment-list'}>渲染列表</Link>
          <Link to={'/props-comment'}>组件传值</Link>
          <Link to={'/context'}>Context</Link>
          <Link to={'/render-props'}>高阶组件</Link>
          <Link to={'/smzq'}>生命周期</Link>
          <Link to={'/ReactBottomLevelCode'}>底层代码</Link>
          <Link to={'/route-tm'}>跳转路由(下面有二级路由)</Link>
          { /****
              *
              *  路由执行过程
              * 1.点击 Link 组件(a标签),修改了浏览器地址栏中的 url 。
              * 2. React 路由监听到地址栏 url 的变化。
              * 3.React 路由内部遍历所有 Route 组件,
              * 使用路由规则( path)与 pathname 进行匹配。
              * 4.当路由规则(path)能够匹配地址栏中的 pathname 时，
              * 就展示该 Route 组件的内容.
              */ }
          <div>
            <br/>
            <br/>
            <br/>
            <hr></hr>
            <br/>
            <br/>
            <br/>
            {/* 指定出口 */}
            <Route />
          </div>
        </BrowserRouter>
      </div>

    );
  }
}
export default App;

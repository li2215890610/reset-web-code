import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import PropsComment from "../PropsComment";
import CommentList from "../CommentList";
import Context from "../Context";

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
            <BrowserRouter>
                {/* 指定入口 */}
                路由基础
                <Link to={'/page1'}>PropsComment</Link>
                <Link to={'/page2'}>CommentList</Link>
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
                    {/* 指定出口 */}
                    <Route exact path='/' component={Context}></Route>
                    <Route path='/page1' component={PropsComment}></Route>
                    <Route path='/page2' component={CommentList}></Route>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;


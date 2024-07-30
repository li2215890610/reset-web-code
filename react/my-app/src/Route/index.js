import React from 'react';
import { Route, Link } from "react-router-dom";
import TM1 from "./TM1";
import TM2 from "./TM2";

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
            <div>
                {/* 指定入口 */}
                <div>路由测试</div>
                <Link to={'/route-tm/page1'}>跳转1</Link>
                <Link to={'/route-tm/page2'}>跳转2</Link>
                { /****
                *
                *  路由执行过程
                * 1.点击 Link 组件(a标签),修改了浏览器地址栏中的 url 。
                * 2. React 路由监听到地址栏 url 的变化。
                * 3. React 路由内部遍历所有 Route 组件,
                *     使用路由规则( path)与 pathname 进行匹配。
                * 4.当路由规则(path)能够匹配地址栏中的 pathname 时，
                * 就展示该 Route 组件的内容.
                */ }

                <div>
                    {/* 指定出口 */}
                    {/* //子路由精准匹配，父路由就不要了 */}
                    <Route exact path='/route-tm/page1' component={TM1}></Route>
                    <Route exact path='/route-tm/page2' component={TM2}></Route>
                </div>
            </div>
        );
    }
}

export default App;


import React from 'react';

import ReactDOM from 'react-dom';

import { LocaleProvider } from 'antd';

import zhCN from 'antd/lib/locale-provider/zh_CN';

import './index.css';

import moment from 'moment';

import registerServiceWorker from './registerServiceWorker';

// 全局设置 locale 日期插件中文显示
import 'moment/locale/zh-cn';

import Routers from "./router";

// 配置全局 redux 
import { Provider } from 'react-redux'

import configureReduxStore from './redux/Store/Store';

// Redux Store对象，管理所有的Redux状态
const store = configureReduxStore.configureStore();

// import Life from "./pages/demo/Life";
// import Admin from "./Admin";
// import Home from "./pages/route_demo/route1/Home";
// import Home from "./pages/route_demo/route2/router";

moment.locale('zh-cn');

ReactDOM.render(
  <Provider store={store}>
    <LocaleProvider locale={zhCN}>
      <Routers/>
    </LocaleProvider>
  </Provider>
, document.getElementById('root'));

registerServiceWorker();

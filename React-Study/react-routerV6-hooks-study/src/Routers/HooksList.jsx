import { lazy, Suspense } from "react";
import { Navigate } from "react-router-dom";
import UseState from "../Hooks/UseState";
import UseStateError from "../Hooks/UseStateError";
import UseReducer from "../Hooks/UseReducer";
import UseContext from "../Hooks/UseContext";
import UseEffect from "../Hooks/UseEffect";
import UseEffectList from "../Hooks/UseEffectList";
import UseEffectIndex from "../Hooks/UseEffectIndex";
import UseMemo from "../Hooks/UseMemo";
import Memo from "../Hooks/Memo";
import UseCallback from "../Hooks/UseCallback";
import UseRef from "../Hooks/UseRef";
import UseCustom from "../Hooks/UseCustom";
import UseImperativeHandle from "../Hooks/UseImperativeHandle";
import ReducerContext from "../Hooks/Reducer-Context/Index";
import UseTransition from "../Hooks/UseTransition/Index";
import UseDeferredValue from "../Hooks/UseDeferredValue";
import UseLayoutEffect from "../Hooks/UseLayoutEffect";

const App = ()=>{
    console.log('正在加载中');
    return <>'正在加载中'</>
  }

/***
 * <Routes/>与 <Route/>
 * 1. v6版本中移出了先前的<switch>，引入了新的替代者:<Routes>.
 * 2. <Routes>和<Route>要配合使用，且必须要用<Routes>包裹<Route>
 * 3. <Route〉相当于一个if语句，如果其路径与当前 URL 匹配，则呈现其对应的组件。
 * 4. <Route casesensitive /> 属性用于指定:匹配时是否区分大小写(默认为 false)。
 * 5. 当URL发生变化时，<Routes>都会查看其所有子<Route》元素以找到最佳匹配并呈现组件
 * 6. <Route》也可以嵌套使用，且可配合 useRoutes()配置“路由表”，但需要通过<outlet>组件来渲染其子路由。 
 * 
 * */


export const HooksList = [{
    path: "/",
    element: <Navigate to={'/hooks/useState'} />
}, {
    path: "/useState",
    element: <UseState />
}, {
    path: "/useState-error",
    element: <UseStateError />
}, {
    path: "/useReducer",
    element: <UseReducer />
}, {
    path: "/useContext",
    element: <UseContext />
}, {
    path: "/useEffect",
    element: <UseEffect />,
    children: [
        {
            path: "index",
            element: <UseEffectIndex />
        },
        {
            path: "list",
            element: <UseEffectList />
        }
    ]
}, {
    path: "/useMemo",
    element: <UseMemo />,
}, {
    path: "/Memo",
    element: <Memo />
}, {
    path: "/useCallback",
    element: <UseCallback />
}, {
    path: "/useRef",
    element: <UseRef />
}, {
    path: "/useImperativeHandle",
    element: <UseImperativeHandle />
}, {
    path: "/Reducer-Context",
    element: <ReducerContext />
}, {
    path: "/UseCustom",
    element: <UseCustom />
}, {
    path: "/useTransition",
    element: <UseTransition />
}, {
    path: "/UseDeferredValue",
    element: <UseDeferredValue />
}, {
    path: "/useLayoutEffect",
    element: <UseLayoutEffect />
}]


export const routes = [{
    path: "/",
    element: <Navigate to={'/hooks/useState'} />
}, {
    path: "/useState",
    element: () => import('../Hooks/UseState')
}, {
    path: "/useState-error",
    element: () => import('../Hooks/UseStateError')
}, {
    path: "/useReducer",
    element: () => import('../Hooks/UseReducer')
}, {
    path: "/useContext",
    element: () => import('../Hooks/UseContext'),
}, {
    path: "/useEffect",
    element: () => import('../Hooks/UseEffect'),
    children: [
        {
            path: "index",
            element: () => import('../Hooks/UseEffectIndex')
        },
        {
            path: "list",
            element: () => import('../Hooks/UseEffectList')
        }
    ]
}, {
    path: "/useMemo",
    element: () => import('../Hooks/UseMemo'),
}, {
    path: "/Memo",
    element: () => import('../Hooks/Memo')
}, {
    path: "/useCallback",
    element: () => import('../Hooks/UseCallback')
}, {
    path: "/useRef",
    element: () => import('../Hooks/UseRef')
}, {
    path: "/useImperativeHandle",
    element: () => import('../Hooks/UseImperativeHandle')
}, {
    path: "/Reducer-Context",
    element: () => import('../Hooks/Reducer-Context/Index')
}, {
    path: "/UseCustom",
    element: () => import('../Hooks/UseCustom')
}, {
    path: "/useTransition",
    element: () => import('../Hooks/UseTransition/Index')
}, {
    path: "/UseDeferredValue",
    element: () => import('../Hooks/UseDeferredValue')
}, {
    path: "/useLayoutEffect",
    element: () => import('../Hooks/UseLayoutEffect')
}]


function LazyElement(props) {
    const { importFunc } = props
    const LazyComponent = lazy(importFunc)
    return (
        <Suspense fallback={() => {
            debugger
            console.log('懒加载了！！！！');
            return <div>路由懒加载...</div>
        }}>
            <LazyComponent />
        </Suspense>
    )
}

// 处理routes 如果element是懒加载，要包裹Suspense
function dealRoutes(routesArr) {
    if (routesArr && Array.isArray(routesArr) && routesArr.length > 0) {
        routesArr.forEach((route) => {
            if (route.element && typeof route.element == 'function') {
                const importFunc = route.element
                route.element = <LazyElement importFunc={importFunc} />
            }
            if (route.children) {
                dealRoutes(route.children)
            }
        })
    }

    // debugger
    console.log(routesArr);
}

// dealRoutes(routes)



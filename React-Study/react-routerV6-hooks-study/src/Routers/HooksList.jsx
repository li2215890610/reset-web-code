import { Navigate, } from "react-router-dom";
import UseState from "../Hooks/UseState";
import UseStateError from "../Hooks/UseStateError";
import UseReducer from "../Hooks/UseReducer";
import UseContext from "../Hooks/UseContext";
import UseEffect, { List as UseEffectList, Index as UseEffectIndex } from "../Hooks/UseEffect";
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
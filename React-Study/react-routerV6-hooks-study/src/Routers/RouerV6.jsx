import { Navigate, } from "react-router-dom";
import About from "../RouerV6/About";
import Home from "../RouerV6/Home/Index";
import News from "../RouerV6/Home/News";
import Message from "../RouerV6/Home/Message";
import Create from "../RouerV6/Home/Create";
import Detail from "../RouerV6/Home/Message/Detail";
import SearchParamsDetail from "../RouerV6/Home/Message/SearchParamsDetail";


export const RouerV6List = [{
    path: "/",
    element: <Navigate to={'/rouerV6/home'} />
}, {
    path: "/home",
    element: <Home />,
    children: [{
        path: "news",
        element: <News />,
    }, {
        path: "message",
        element: <Message />,
        children: [{
            path: "detail/:id",
            element: <Detail />,
        }, {
            path: "detail1",
            element: <SearchParamsDetail />,
        }]
    },{
        path:"create",
        element: <Create />,
    }]
}, {
    path: "/about",
    element: <About />
}]
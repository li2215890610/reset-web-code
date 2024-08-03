import { Navigate, } from "react-router-dom";
import About from "../RouerV6/About";
import Home from "../RouerV6/Home";

export const RouerV6List = [{
    path: "/",
    element: <Navigate to={'/rouerV6'} />
}, {
    path: "/home",
    element: <Home />
}, {
    path: "/about",
    element: <About />
}]
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import useState1 from "../useState1";
import useState2 from "../useState2";
import useReducer from "../useReducer";
import useContext from "../useContext";
import useEffect from "../useEffect";
import useMemo from "../useMemo";
import Memo from "../memo";
import useCallback from "../useCallback";
import useRef from "../useRef";
import UseCustom from "../UseCustom";
import useImperativeHandle from "../useImperativeHandle";
import ReducerContext from "../Reducer-Context";


import Example10 from "../Example10";
import Example11 from "../Example11";
import useLayoutEffect from "../useLayoutEffect";

function Content() {

  return (
    <Switch>
      <Route exact path="/" component={() => (<Redirect to="/useState1" />)} />
      <Route path="/useState1" component={useState1} />
      <Route path="/useState2" component={useState2} />
      <Route path="/useReducer" component={useReducer} />
      <Route path="/useContext" component={useContext} />
      <Route path="/useEffect" component={useEffect} />
      <Route path="/useMemo" component={useMemo} />
      <Route path="/Memo" component={Memo} />
      <Route path="/useCallback" component={useCallback} />
      <Route path="/useRef" component={useRef} />
      <Route path="/useImperativeHandle" component={useImperativeHandle} />
      <Route path="/Reducer-Context" component={ReducerContext} />
      <Route path="/UseCustom" component={UseCustom} />

    

      <Route path="/Example10" component={Example10} />
      <Route path="/Example11" component={Example11} />
      <Route path="/useLayoutEffect" component={useLayoutEffect} />
    </Switch>
  )
}

export default Content
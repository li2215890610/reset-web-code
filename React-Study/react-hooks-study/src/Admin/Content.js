import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import useState from "../useState";
import useStateError from "../useState-error";
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
import useTransition from "../UseTransition/index";
import useDeferredValue from "../useDeferredValue";
import useLayoutEffect from "../useLayoutEffect";

function Content() {

  return (
    <Switch>
      <Route exact path="/" component={() => (<Redirect to="/useState" />)} />
      <Route path="/useState" component={useState} />
      <Route path="/useState-error" component={useStateError} />
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
      <Route path="/useTransition" component={useTransition} />
      <Route path="/useDeferredValue" component={useDeferredValue} />
      <Route path="/useLayoutEffect" component={useLayoutEffect} />
    </Switch>
  )
}

export default Content
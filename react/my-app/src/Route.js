

import React from 'react';
import { Route, Switch,Redirect } from "react-router-dom";
import Foundation from "./Foundation";
import CommentList from "./CommentList";
import PropsComment from "./PropsComment";
import Context from "./Context";
import SMZQ from "./SMZQ";
import RenderProps from "./RenderProps";
import ReactBottomLevelCode from "./ReactBottomLevelCode";
import RouteTM from "./Route/index";
import NoMatch from "./404/404";

function App() {

  return (
    <Switch>

      {/* <Foundation /> */}
      <Route path="/foundation" component={Foundation} />

      {/* <CommentList /> */}
      <Route exact path="/comment-list" component={CommentList} />
      {/* <PropsComment /> */}
      <Route exact path="/props-comment" component={PropsComment} />
      {/* <Context /> */}
      <Route exact path="/context" component={Context} />
      {/* <RenderProps/> */}
      <RenderProps exact path="/render-props" component={RenderProps} />
      {/* <SMZQ/> */}
      <Route exact path="/smzq" component={SMZQ} />
      {/* <ReactBottomLevelCode/> */}
      <Route exact path="/ReactBottomLevelCode" component={ReactBottomLevelCode} />
      {/* <RouteTM/> */}
      <Route path="/route-tm" component={RouteTM} />

      <Redirect to="/foundation" />
      <Route component={NoMatch} />

    </Switch>
  );
}


export default App;

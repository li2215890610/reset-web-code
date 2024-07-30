import Foundation from "./Foundation";
import logo from './logo.svg';
import CommentList from "./CommentList";
import PropsComment from "./PropsComment";
import Context from "./Context";
import SMZQ from "./SMZQ";
import RenderProps from "./RenderProps";
import ReactBottomLevelCode from "./ReactBottomLevelCode";
import RouteTM from "./Route";
import './App.css';

function App() {

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <RouteTM/>
      {/* <PropsComment />
      <Foundation />
      <CommentList />
      <Context />
      <SMZQ />
      <RenderProps/>
      <ReactBottomLevelCode/> */}
    </div>
  );
}

export default App;

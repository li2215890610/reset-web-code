import { Route, Link } from "react-router-dom";
import LeiZuJian from "./LeiZuJian";
import RenderTM from "./RenderTM";
import ThisTMClass from "./ThisTMClass";
import ThisTMBind from "./ThisTMBind";
import Controlled from "./Controlled";


function App() {

  return (
    <div>
      <div>
        <Link to={'/foundation'}>渲染表达</Link>
        <br/>
        <br/>
        <Link to={'/foundation/LeiZuJian'}>类组件</Link>
        <br/>
        <br/>
        <Link to={'/foundation/ThisTMClass'}>class利用箭头函数自身不绑定this</Link>
        <br/>
        <br/>
        <Link to={'/foundation/ThisTMBind'}>this-bind</Link>
        <br/>
        <br/>
        <Link to={'/foundation/Controlled'}>受控组件</Link>
        <br/>
        <br/>        
        <br/>
        <br/>
      </div>

      <div>
        <Route exact path='/foundation' component={RenderTM}></Route>
        <Route exact path='/foundation/LeiZuJian' component={LeiZuJian}></Route>
        <Route exact path='/foundation/ThisTMClass' component={ThisTMClass}></Route>
        <Route exact path='/foundation/ThisTMBind' component={ThisTMBind}></Route>
        <Route exact path='/foundation/Controlled' component={Controlled}></Route>
        {/* <Route
          path="/foundation" render={() => (
            <Redirect to="/foundation/index" />
          )} /> */}
      </div>
    </div>
  );
}

export default App;

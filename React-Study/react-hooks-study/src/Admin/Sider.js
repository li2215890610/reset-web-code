import React from "react";
import { Link } from "react-router-dom";

function Sider() {

  return (<div>
    <section>
      <Link to='/useState'>useState</Link>
    </section>

    <section>
      <Link to='/useState-error'>useStateError示范</Link>
    </section>

    <section>
      <Link to='/useReducer'>useReducer</Link>
    </section>

    <section>
      <Link to='/useContext'>useContext</Link>
    </section>
    
    <section>
      <Link to='/Reducer-Context'>useReducer、useContext实例</Link>
    </section>

    <section>
      <Link to='/useEffect'>useEffect</Link>
    </section>

    <section>
      <Link to='/useLayoutEffect'>useLayoutEffect</Link>
    </section>

    <section>
      <Link to='/Memo'>Memo</Link>
    </section>

    <section>
      <Link to='/useMemo'>useMemo</Link>
    </section>

    <section>
      <Link to='/useCallback'>useCallback</Link>
    </section>

    <section>
      <Link to='/useRef'>useRef</Link>
    </section>
    
    <section>
      <Link to='/useImperativeHandle'>useImperativeHandle</Link>
    </section>
    
    <section>
      <Link to='/useTransition'>useTransition</Link>
    </section>


    <section>
      <Link to='/useDeferredValue'>useDeferredValue</Link>
    </section>

    <section>
      <Link to='/UseCustom'>封装hooks</Link>
    </section>
  </div>)
}

export default Sider
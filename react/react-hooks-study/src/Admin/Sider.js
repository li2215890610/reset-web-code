import React from "react";
import { Link } from "react-router-dom";

function Sider() {

  return (<div>
    <section>
      <Link to='/useState1'>useState1</Link>
    </section>

    <section>
      <Link to='/useState2'>useState2</Link>
    </section>

    <section>
      <Link to='/useReducer'>useReducer</Link>
    </section>

    <section>
      <Link to='/useContext'>useContext</Link>
    </section>

    <section>
      <Link to='/useEffect'>useEffect</Link>
    </section>
    
    <section>
      <Link to='/useMemo'>useMemo</Link>
    </section>

    <section>
      <Link to='/Memo'>Memo</Link>
    </section>

    <section>
      <Link to='/useCallback'>useCallback</Link>
    </section>

    <section>
      <Link to='/useRef'>useRef</Link>
    </section>

    <section>
      <Link to='/Example6'>useReducer、useContext实例</Link>
    </section>

    <section>
      <Link to='/UseCustom'>封装hooks</Link>
    </section>
    


    <section>
      <Link to='/Example10'>useImperativeHandle</Link>
    </section>

    <section>
      <Link to='/Example11'>useDebugValue</Link>
    </section>

    <section>
      <Link to='/Example12'>useLayoutEffect</Link>
    </section>
  
  </div>)
}

export default Sider
import { useRoutes, Outlet, Link} from "react-router-dom";
import {  HooksList } from "../Routers/HooksList";

const HooksNav = ()=> {
    return (<div>
      <section>
        <Link to='useState'>useState</Link>
      </section>
  
      <section>
        <Link to='useState-error'>useStateError示范</Link>
      </section>
  
      <section>
        <Link to='useReducer'>useReducer</Link>
      </section>
  
      <section>
        <Link to='useContext'>useContext</Link>
      </section>
      
      <section>
        <Link to='Reducer-Context'>useReducer、useContext实例</Link>
      </section>
  
      <section>
        <Link to='useEffect'>useEffect</Link>
      </section>
  
      <section>
        <Link to='useLayoutEffect'>useLayoutEffect</Link>
      </section>
  
      <section>
        <Link to='Memo'>Memo</Link>
      </section>
  
      <section>
        <Link to='useMemo'>useMemo</Link>
      </section>
  
      <section>
        <Link to='useCallback'>useCallback</Link>
      </section>
  
      <section>
        <Link to='useRef'>useRef</Link>
      </section>
      
      <section>
        <Link to='useImperativeHandle'>useImperativeHandle</Link>
      </section>
      
      <section>
        <Link to='useTransition'>useTransition</Link>
      </section>
  
  
      <section>
        <Link to='useDeferredValue'>useDeferredValue</Link>
      </section>
  
      <section>
        <Link to='UseCustom'>封装hooks</Link>
      </section>
    </div>)
  }


function Index() {

    //根据路由表渲染路由
    const element = useRoutes(HooksList)

    return <>
        {HooksNav()}
        <br />
        <br />
        <br />
        {element}
        {/* 指定路由的渲染地址 */}
        <Outlet/>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
    </>

    // return (
    //     <>
    //         {route}
    //         {/* <Route path="/hooks/useState" element={<UseState/>} />
    //   <Route path="/hooks/useState-error" element={<UseStateError/>} />
    //   <Route path="/hooks/useReducer" element={<UseReducer/>} />
    //   <Route path="/hooks/useContext" element={<UseContext/>} />
    //   <Route path="/hooks/useEffect" element={<UseEffect/>} />
    //   <Route path="/hooks/useMemo" element={<UseMemo/>} />
    //   <Route path="/hooks/Memo" element={<Memo/>} />
    //   <Route path="/hooks/useCallback" element={<UseCallback/>} />
    //   <Route path="/hooks/useRef" element={<UseRef/>} />
    //   <Route path="/hooks/useImperativeHandle" element={<UseImperativeHandle/>} />
    //   <Route path="/hooks/Reducer-Context" element={<ReducerContext/>} />
    //   <Route path="/hooks/UseCustom" element={<UseCustom/>} />
    //   <Route path="/hooks/useTransition" element={<UseTransition/>} />
    //   <Route path="/hooks/useDeferredValue" element={<UseDeferredValue/>} />
    //   <Route path="/hooks/useLayoutEffect" element={<UseLayoutEffect/>} />
    //   {/* 重定向 */}
    //         <Route path="/hooks" element={<Navigate to={'/hooks/useState'} />} /> */}
    //     </>
    // )
}


export default Index
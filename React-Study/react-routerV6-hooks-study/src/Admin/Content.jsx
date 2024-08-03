import React from 'react'
import { Routes, Route, Navigate,} from "react-router-dom";
import Hooks from "../Hooks";
import RouerV6 from "../RouerV6";
import RenderHtml from "./RenderHtml";

function Content() {
  return (
    <div>
      开始展示内容
      <br />
      <br />
      <hr />
      <br />
      <br />

      <Routes>
        <Route path="/hooks/*" element={<Hooks />} />
        <Route path="/rouerV6/*" element={<RouerV6/>} />
        
        {/* caseSensitive 区分大小写 */}
        <Route caseSensitive path="/renderHtml/*" element={<RenderHtml/>} />

        <Route path="/" element={<Navigate to={'/hooks'} />} />
        {/* 404页面 */}
        <Route path="*" element={<><h1>404!</h1></>}></Route>
      </Routes>
    </div>
  )
}

export default Content
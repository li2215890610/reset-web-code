import React,{ useState } from 'react'
import { Navigate } from "react-router-dom";
export default function Home() {
  const [ sum, setSum] = useState(1)
  return (
    <div>

        <h1>Home</h1>
        
        {sum ===2 ? <Navigate to={'about'}/>:<h4>当前sum的值：{sum}</h4>}
        
        <button onClick={()=>{
          setSum(2)
        }}>点击sum的值变为2</button>
    </div>
  )
}

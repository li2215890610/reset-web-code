import React, { useState } from 'react'
import { Navigate, Outlet, NavLink, useOutlet } from "react-router-dom";

export default function Home() {
  const [sum, setSum] = useState(1)

  console.log('####',useOutlet());
  return (
    <div>

      <h1>Home</h1>

      {sum === 2 ? <Navigate to={'about'} /> : <h4>当前sum的值：{sum}</h4>}

      <button onClick={() => {
        setSum(2)
      }}>点击sum的值变为2</button>

      <NavLink to={'news'}>news导航</NavLink>
      <NavLink to={'message'}>message导航</NavLink>
      <NavLink to={'create'}>Create导航</NavLink>
      
      <Outlet />
    </div>
  )
}

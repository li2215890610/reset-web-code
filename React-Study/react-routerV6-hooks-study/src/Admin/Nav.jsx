import React from 'react'
import { useNavigate } from "react-router-dom";
function Nav() {
  const navigate = useNavigate()
  
  return (
    <div>
      <button onClick={() => {
        navigate(`/hooks`)
      }}>去Hooks</button>

      <button onClick={() => {
        navigate(`/rouerV6`)

      }}>去RouerV6</button>
    </div>
  )
}

export default Nav
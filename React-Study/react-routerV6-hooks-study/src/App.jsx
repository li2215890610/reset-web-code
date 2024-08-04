import React from 'react'
import { BrowserRouter, useInRouterContext } from 'react-router-dom';
import Admin from "./Admin";

const Demo = () => {

  return <>
    Demo---{useInRouterContext().toString()}
  </>
}


export default function App() {
  return (
    <div>
      <Demo/>
      <hr />
      <BrowserRouter>
        <Admin />
      </BrowserRouter>
    </div>
  )
}

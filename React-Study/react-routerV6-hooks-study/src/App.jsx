import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import Admin from "./Admin";

export default function App() {
  return (
    <BrowserRouter>
      <Admin/>
    </BrowserRouter>
  )
}

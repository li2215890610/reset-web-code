import React from "react";
import Buttons from "./Buttons";
import ShowArea from "./ShowArea";
import { Colors } from "./Colors";


const Child = () => (<>
  <ShowArea />
</>)

const Father = () => {
  return (<>
    <Child />
  </>)
}

export default  function index () {

  return <div>
    <Colors>
      <Buttons />
      <Father />
    </Colors>
  </div>
}
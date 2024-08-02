import React, { useContext } from "react";
import { CreateContext, UPDATE_COLOR } from "./Colors";

export default () => {
  
  const { dispatch } = useContext(CreateContext);

  return <div>
    <button onClick={() => {
      dispatch({ playlod: { color: 'red' }, type: UPDATE_COLOR })
    }}>红色</button>
  </div>
}
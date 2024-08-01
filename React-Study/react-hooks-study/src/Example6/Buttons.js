import React, { useContext } from "react";
import { CreateContextData, UPDATE_COLOR } from "./Colors";

export default () => {
  const { dispatch } = useContext(CreateContextData);

  return <div>
    <button onClick={() => {
      dispatch({ value: { color: 'red' }, type: UPDATE_COLOR })
    }}>红色</button>
    <button onClick={() => {
      dispatch({ value: { color: 'grey' }, type: UPDATE_COLOR })
    }}>灰色</button>
  </div>
}
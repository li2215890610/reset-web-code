import React, { useContext } from "react";
import { CreateContext, UPDATE_COLOR } from "./Colors";

export default () => {
  const { color,dispatch } = useContext(CreateContext);

  return <div style={{ color: color }}>
    字体颜色为{color}
    <br/>
    <hr></hr>
    <br/>
    <button onClick={() => {
      dispatch({ playlod: { color: 'grey' }, type: UPDATE_COLOR })
    }}>灰色</button>
  </div>
}
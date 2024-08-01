import React, { useContext } from "react";
import { CreateContextData } from "./Colors";

export default () => {
  const { color } = useContext(CreateContextData);

  return <div style={{ color: color }}>
    字体颜色为{color}
  </div>
}
import { combineReducers } from 'redux'

//导入所有的 state
import list from "./list";

//我们如何使用多个reducer呢？ 我们将用到Redux包中提供的 combineReducers 函数挂载所有的 reducer
export default combineReducers({
  list,
})




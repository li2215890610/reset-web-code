

import { type} from "../Type/Type";


//数据处理
const initialState = {
  menuName:"首页",
  routerPage:"/home"
}

export default ( state = initialState, action)=>{

  switch (action.type) {
    case type.SWITCH_MENU:
      return {
        ...state, //保存以前的值
        menuName:action.menuName,
        routerPage:action.routerPage
      }
    default:
      return {
        ...state,
      } 
  }



  
}

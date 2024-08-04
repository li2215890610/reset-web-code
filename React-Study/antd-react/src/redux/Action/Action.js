import { type} from "../Type/Type";

console.log(type);

//定义处理函数
export default { 
  switchMenu(menuName,routerPage) {
    return{
      type: type.SWITCH_MENU,
      menuName,
      routerPage,
    }
  }
}
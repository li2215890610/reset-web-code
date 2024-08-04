
import { ADD_LIST_ITEM, REMOVE_LIST_ITEM, COMPLETE_LIST_ITEM, EMPTY_LIST } from "../constants/list";

const INITIAL_STATE = {
  list:[]
}

export default function addList( state = INITIAL_STATE, action){
  switch (action.type) {
    //添加
    case ADD_LIST_ITEM:
      let newState = [...state.list,{...action.payload}];

      return {
        list : [...newState]
      }

    //删除
    case REMOVE_LIST_ITEM:
      let list = [...state.list];
      
      list.splice(list.findIndex((e) => e.id === action.payload.id),1);

      return {
        list:[...list]
      }

    //完成任务的状态
    case COMPLETE_LIST_ITEM: 

      let newlist = [...state.list];
       
      newlist[state.list.findIndex((e) => e.id === action.payload.id)].isSelect = newlist[state.list.findIndex((e) => e.id === action.payload.id)].isSelect ? false: true
      
      return{
        list: newlist,
      }

    //清空
    case EMPTY_LIST:
      
      return{
        list: []
      }

    default:
      return state
  }
}
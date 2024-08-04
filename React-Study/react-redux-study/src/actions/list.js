import { ADD_LIST_ITEM, REMOVE_LIST_ITEM, COMPLETE_LIST_ITEM, EMPTY_LIST } from "../constants/list";


// 定义 dispatch 触发事件行为
export const addListItem = (payload) => {
  return {
    type: ADD_LIST_ITEM,
    payload
  }
}

export const removeListItem = (payload) =>{
  return {
    type: REMOVE_LIST_ITEM,
    payload
  }
}

export const completeListItem = (payload) =>{
  return {
    type: COMPLETE_LIST_ITEM,
    payload
  }
}

export const emptyList = (payload) =>{
  return {
    type: EMPTY_LIST,
    payload
  }
}




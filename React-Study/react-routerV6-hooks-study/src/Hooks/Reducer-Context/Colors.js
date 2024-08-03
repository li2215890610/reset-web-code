import React, { createContext, useReducer } from "react";

export const CreateContext = createContext();

export const UPDATE_COLOR = 'UPDATE_COLOR';

export const reducer = (state, action) => {

  switch (action.type) {
    case UPDATE_COLOR:

      return {
        ...state,
        ...action.playlod
      }

    default:
      return state
  }
}

export const Colors = props => {

  const [ color, dispatch] = useReducer(reducer, { color: 'blue' },(data)=>{
    return {
      ...data
    }
  })

  return (
    <CreateContext.Provider value={{ ...color, dispatch }}>
      {props.children}
    </CreateContext.Provider>
  )
}
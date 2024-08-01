import React, { createContext, useReducer } from "react";

export const CreateContextData = createContext();

export const UPDATE_COLOR = 'UPDATE_COLOR';

export const reducer = (state, action) => {

  switch (action.type) {
    case UPDATE_COLOR:

      return {
        ...state,
        ...action.value
      }

    default:
      return state
  }
}

export const Colors = props => {

  const [color, dispatch] = useReducer(reducer, { color: 'blue' })

  return (
    <CreateContextData.Provider value={{ ...color, dispatch }}>
      {props.children}
    </CreateContextData.Provider>
  )
}
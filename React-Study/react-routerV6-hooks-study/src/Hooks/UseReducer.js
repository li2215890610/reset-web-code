import React, { useReducer } from "react";

// Reducer 函数
const ADD = 'ADD';
const SUB = 'SUB';

function handleData(state, action) {

  switch (action.type) {
    case ADD:
      return {
        ...state,
        name: action.playlod,
        count: state.count + 1
      }

    case SUB:
      return {
        ...state,
        count: state.count - 1
      }
    default:
      return state
  }
}

const initialState = { count: 0 };


// 如果 父组件APP 和子组件 Child 想去改变那个值，
// 子组件可以直接调用 dispatch 方法修改

// 父组件
const App = () => {

  const [state, dispatch] = useReducer(handleData, initialState, (data) => {
    // initialState 这个数据会先传入 这个函数
    console.log(data);
    return {
      ...data
    }
  });

  function increment() {
    dispatch({ type: ADD, playlod: "name" });
  }

  console.log('父组件', state.count);
  return (
    <div>
      <button onClick={() => {
        dispatch({ type: SUB });
      }}>Decrement-1</button>
      playlod：{state.name}
      <ChildApp count={state.count} increment={increment} />
    </div>
  );
};

// 子组件
const ChildApp = ({ count, increment }) => {

  console.log('子组件', count);

  return (
    <div>
      <p>现在的分数是: {count}</p>
      <button onClick={increment}>+1</button>
    </div>
  )
};

export default App;

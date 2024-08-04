
/**
 * 
 * 引入createStore创建store
 */

import { createStore } from 'redux';

import Reducer from "./../Reducer/Reducer";

const configureStore = () => createStore(Reducer);

export default {
  configureStore
};
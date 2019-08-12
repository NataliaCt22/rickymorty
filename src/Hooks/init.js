import React, { Component, createContext } from 'react'
import CharacterReducer from '../Reducers/CharacterReducer'

export const Store = createContext();
export const InitialState = {characters: []}
export function StoreProvider(props) {
  const [state, dispatch] = React.useReducer(CharacterReducer, InitialState);
  const value = {state, dispatch};
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}

export default {
  Store,
  StoreProvider
}
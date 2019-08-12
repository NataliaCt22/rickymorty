import ListCharacters from '../Components/ListCharacters';
import Styles from "./Styles/styles.sass"
import CharacterDetail from '../Components/CharacterDetail';
import React, { useReducer, useLayoutEffect, useState, useContext } from 'react'
import RequestService from "../Services/RequestServices"
import Hooks, {Store} from "../Hooks/init"

function AllContent () {

  const {state, dispatch} = useContext(Store)

  const getInfo = () => {
    RequestService.getCharacters(dispatch)
  }

  useLayoutEffect(() => {
    getInfo()
  }, [])

  console.log('state', state)
  return (
    <div className="vh-100">
      <h1 className="charactersHeader">R&M CHARACTERS</h1>
      <span className="quantity bg-transparent"> {state.characters.length} characters</span>
      <div className="row m-0 text-break">
      	<ListCharacters />
      	<CharacterDetail />
      </div>
    </div>
  );
}

export default AllContent
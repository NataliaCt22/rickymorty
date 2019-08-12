import React, { useReducer, useEffect, useState, useContext } from 'react'
import { Button, Form } from 'semantic-ui-react';
import Styles from "./Styles/styles.sass"
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RequestService from "../Services/RequestServices"
import Hooks, {Store} from "../Hooks/init"

function ListCharacters (props) {

  const {state, dispatch} = useContext(Store)
  let openDetail = false, containerClasses
  const selectCharacter = (key) => {
    state.characters.forEach((e) => {
      if (e.selected) e.selected = false
    })
    state.characters[key].selected = true
    openDetail = true
    
    console.log('openDetail', openDetail, typeof openDetail, containerClasses)
  }


  let items = state.characters.map((item, key) =>
    <div key={key} className="list-group-item list-group-item-action d-flex flex-row bg-transparent item-row">
      <div className="col-md-5 text-left">
        <span className="d-block font-weight-bold "> {item.name} </span>
        <span className="d-block"> Species:  {item.species} </span>
      </div>
      <div className="col-md-5 align-text-bottom">
        <div className="text-left">
          <span><FontAwesomeIcon icon={faPlayCircle} /></span>
          <span className="font-weight-bold"> {item.episode.length} </span>
          <span> Episodes </span>
        </div>
      </div>
      <div className="col-md-2">
        <button className="btn btn-get-info" onClick={() => selectCharacter(key)}> Get Info</button>
      </div>
    </div>
  );

  containerClasses = openDetail === true ? 'content-view col-md-6' : 'content-view col-md-12'

  return (
    <div className='col-md-6 col-sm-12'>
      <div className="list-group list-group-flush">
        {items}
      </div>
    </div>
  );

}

export default ListCharacters
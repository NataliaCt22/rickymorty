import React, { useReducer, useEffect, useState, useContext } from 'react'
import { Button, Form } from 'semantic-ui-react';
import Styles from "./Styles/styles.sass"
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Hooks, {Store} from "../Hooks/init"

function CharacterDetail (props) {

  const {state, dispatch} = useContext(Store)
  const [info, setInfo] = useState({})

  useEffect(() => {
  	setInterval(() => { 
  	  let character = state.characters.find((e) => e.selected)
  	  if (character) setInfo(character)
  	}, 1000);
  })

  return (
    <div className="col-md-6 col-sm-12 ">
      { info && info.name ? <div className="offset-md-2 col-md-8">
          <div className="detailImage my-4" style={{backgroundImage: 'url('+info.image+')'}}></div>
          <div>
            <h3 className="bg-main-blue p-3 text-white detail-name">{info.name}</h3>
            <div className="text-left">
              <div className="color-main-blue font-weight-bold">Status: {info.status ? info.status : '-'}</div>
              <div className="color-font-gray">Spiece: {info.species ? info.species : '-'}</div>
              <div className="color-font-gray">Type: {info.type ? info.type : '-'}</div>
              <div className="color-font-gray">Origin: {info.origin && info.origin.name ? info.origin.name : '-'}</div>
              <div className="color-font-gray">Location: {info.location && info.location.name ? info.location.name : '-'}</div>
            </div>
          </div>
        </div>
      : null}
    </div>
  );

}

export default CharacterDetail
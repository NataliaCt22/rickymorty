import React, { useReducer, useEffect, useState, useContext } from 'react'
import { Button, Form } from 'semantic-ui-react';
import Styles from "./Styles/styles.sass"
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function ListCharacters (props) {
  const [errors, setErrors] = useState({})

  const state = [{name: 'a'},{name: 'ab'},{name: 'ac'},{name: 'ad'}]
  
  const getInfo = () => {
    console.log('getInfo')
  }

  let items = state.map((item, key) =>
    <div key={key} className="list-group-item list-group-item-action d-flex flex-row">
      <div className="col-md-5">
        <span className="d-block"> {item.name} </span>
        <span className="d-block"> {item.description} q</span>
      </div>
      <div className="col-md-5 align-text-bottom">
        <FontAwesomeIcon icon={faPlayCircle} />
        <span>{item.quantity} Episodes</span>
      </div>
      <div className="col-md-2">
        <button className="btn btn-get-info" onClick={getInfo}> Get Info</button>
      </div>
    </div>
  );

  return (
    <div className="content-view col-md-6">
      <div className="list-group">
        {items}
      </div>
    </div>
  );

}

export default ListCharacters
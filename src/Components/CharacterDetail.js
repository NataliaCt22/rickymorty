import React, { useReducer, useEffect, useState, useContext } from 'react'
import { Button, Form } from 'semantic-ui-react';
import Styles from "./Styles/styles.sass"
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CharacterDetail (props) {

  const getInfo = () => {
    console.log('getInfo')
  }

  return (
    <div className="col-md-6 containerDetail">
      <div className="detailImage" style={{backgroundImage: 'url('+'https://www.tangible-eluniversal.com.mx/sites/default/files/styles/corte_1_1230x692/public/field/image/rm_7.jpg?itok=UUCG0pI3)'}}></div>
    </div>
  );

}

export default CharacterDetail
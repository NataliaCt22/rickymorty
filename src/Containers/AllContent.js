import React, { Component } from 'react';
import ListCharacters from '../Components/ListCharacters';
import Styles from "./Styles/styles.sass"
import CharacterDetail from '../Components/CharacterDetail';

function AllContent () {

  return (
    <div className="vh-100">
      <h1 className="charactersHeader">R&M CHARACTERS</h1>
      <span className="quantity"> 15 characters</span>
      <div className="d-flex flex-row">
      	<ListCharacters/>
      	<CharacterDetail/>
      </div>
    </div>
  );
}

export default AllContent
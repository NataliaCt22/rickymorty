import axios from 'axios';

const getCharacters = async (dispatch) => {
  try {
    const result = await axios(
      'https://rickandmortyapi.com/api/character/',
    );
    dispatch({type: 'CHARACTERS_LIST', payload: result.data.results})
  } catch (e) {
    console.log('here is the error', e)
  }
}

export default {
  getCharacters
} 

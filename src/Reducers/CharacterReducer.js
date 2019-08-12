export default (state, action) => {
  switch (action.type) {
    case 'CHARACTERS_LIST':
      return state = {...state, characters: action.payload}
    default:
      throw new Error();
  }
};

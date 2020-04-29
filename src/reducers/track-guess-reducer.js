import * as a from "../actions/ActionTypes";

export default (state = [], action) => {
  switch (action.type) {
    case a.ADD_LETTER:
      const newState = [ ...state, action.letter ];
      return newState;
    case a.RESET_LETTERS:
      return [];
    default:
      return state;
  }
};

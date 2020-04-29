import * as a from '../actions/ActionTypes';

export default (state = 11, action) => {
  switch(action.type) {
    case a.WRONG_GUESS:
      return state - 1;
    case a.RESET_GUESS:
      return 11
    default:
      return state;
  }
}
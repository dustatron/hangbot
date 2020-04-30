import * as a from '../actions/ActionTypes';

export default (state = null, action) => {
  switch (action.type) {
    case a.WIN_GAME:
      return true;
    case a.LOSE_GAME:
      return false;
    case a.RESET_GAME:
      return null;
    default:
      return state;
  }
};

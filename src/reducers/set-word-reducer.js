import * as a from "../actions/ActionTypes";
import WordList from "../components/WordList";
export default (state = "", action) => {
  switch (action.type) {
    case a.SET_WORD:
      const newWord = WordList[Math.floor(Math.random() * WordList.length)];
      return newWord;
    default:
      return state;
  }
};

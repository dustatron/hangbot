import setWordReducer from "./set-word-reducer";
import trackGuessReducer from "./track-guess-reducer";
import winGameReducer from "./win-game-reducer";
import wrongGuessReducer from "./wrong-guess-reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  winGame: winGameReducer,
  wrongGuesses: wrongGuessReducer,
  trackGuess: trackGuessReducer,
  currentWord: setWordReducer
});

export default rootReducer;

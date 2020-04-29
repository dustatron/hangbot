//win-Game-Reducer commands
export const WIN_GAME = "WIN_GAME"; //set state to true
export const LOSE_GAME = "LOSE_GAME"; //set state to false
export const RESET_GAME = "RESET_GAME"; //reset winGame state to null

//wrong-guess-reducer
export const WRONG_GUESS = "WRONG_GUESS"; //decrement by 1
export const RESET_GUESS = "RESET_GUESS"; //reset to 11

//track-guess-reducer
export const ADD_LETTER = "ADD_LETTER"; // add the selected letter to letter guess array
export const RESET_LETTERS = "RESET_LETTERS"; // empty letter guess array

//current-word-reducer
export const SET_WORD = "SET_WORD"; //get random word.

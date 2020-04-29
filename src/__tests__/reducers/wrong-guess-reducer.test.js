import wrongGuessReducer from "../../reducers/wrong-guess-reducer";

describe("wrongGuessReducer", () => {
  it("will return the default state if there is no action type given", () => {
    expect(wrongGuessReducer(undefined, {type: null})).toEqual(11);
  });
  it("will successfully decrement wrongGuesses", () => {
    expect(wrongGuessReducer(undefined, {type: 'WRONG_GUESS'})).toEqual(10);
  });
  it("will successfully reset guess count to 11", () => {
    expect(wrongGuessReducer(undefined, {type: 'RESET_GUESS'})).toEqual(11)
  });
});
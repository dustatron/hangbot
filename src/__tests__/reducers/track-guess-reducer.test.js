import trackGuessReducer from "../../reducers/track-guess-reducer";
describe("trackGuessReducer", () => {
  test("Should return default state if no action type is passed to the reducer", () => {
    expect(trackGuessReducer([], { type: null })).toEqual([]);
  });

  test("Should successfully add a letter to the track guesses array", () => {
    const currentState = [ "c", "a", "t" ];
    const action = {
      type: "ADD_LETTER",
      letter: "b"
    };
    expect(trackGuessReducer(currentState, action)).toEqual([ "c", "a", "t", "b" ]);
  });

  test("Should reset letter array back to an empty array", () => {
    const currentState = [ "a", "b", "c" ];
    const action = { type: "RESET_LETTERS" };
    expect(trackGuessReducer(currentState, action)).toEqual([]);
  });
});

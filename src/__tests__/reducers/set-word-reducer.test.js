import setWordReducer from "../../reducers/set-word-reducer";

describe("setWordReducer ", () => {
  test("Should return a default state if no action type passed into reducer", () => {
    expect(setWordReducer(undefined, { type: null })).toEqual("");
  });
  test("Should successfully add a new word to state", () => {
    expect(setWordReducer(undefined, { type: "SET_WORD" }).length).toBeGreaterThan(0);
  });
});

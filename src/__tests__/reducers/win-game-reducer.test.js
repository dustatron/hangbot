import winGameReducer from "../../reducers/win-game-reducer";

describe("winGameReducer", () => {
  it("Should return default state if there is no action type passed into the reducer", () =>  {
    expect(winGameReducer({}, {type: null})).toEqual({});
  });

  it("Should successfully change the state to true", () => {
    expect(winGameReducer({}, {type: 'WIN_GAME'})).toEqual(true);
  });

  it("Should successfully change the state to false", () => {
    expect(winGameReducer({}, {type: 'LOSE_GAME'})).toEqual(false);
  });

  it("Should successsfully reset game state null", () => {
    expect(winGameReducer({}, {type: 'RESET_GAME'})).toEqual(null);
  })
});

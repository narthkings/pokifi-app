import { ActionTypes } from "../actionTypes";
import { ReduxAction } from "../actions";
import rootState from "./initialState";

const reducer = (state = rootState.pokemonList, action: ReduxAction) => {
  switch (action.type) {
    case ActionTypes.GET_POKEMON_LIST_SUCCESS: {
      return {
        ...state,
        pokemonLists: action.payload,
        meta: {
          previous: action.meta.previous,
          next: action.meta.next,
        },
      };
    }
    default:
      return state;
  }
};

export default reducer;

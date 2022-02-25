import { ActionTypes } from "../actionTypes";
import { ReduxAction } from "../actions";
import rootState from "./initialState";

const reducer = (state = rootState.pokemonDetail, action: ReduxAction) => {
  switch (action.type) {
    case ActionTypes.GET_POKEMON_DETAIL_SUCCESS: {
      return {
        ...state,
        pokemonDetail: action.payload,
        pokemonDetailsSuccess: "successful",
      };
    }

    case ActionTypes.CLEAR_POKEMON_DETAILS: {
      return {
        ...state,
        pokemonDetailsSuccess: "",
      };
    }
    default:
      return state;
  }
};

export default reducer;

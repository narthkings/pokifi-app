import { Dispatch } from "redux";
import { ReduxAction } from "../actions/index";
import { ActionTypes } from "../actionTypes/";

export const getPokemonList =
  (url?: string) => async (dispatch: Dispatch<ReduxAction>) => {
    const uri = url || `${process.env.NEXT_PUBLIC_BASE_URL}?limit=${16}`;
    try {
      const response = await fetch(uri);
      const data = await response.json();
      dispatch({
        type: ActionTypes.GET_POKEMON_LIST_SUCCESS,
        payload: data.results,
        meta: {
          previous: data.previous,
          next: data.next,
        },
      });
    } catch (error: any) {
      dispatch({
        type: ActionTypes.GET_POKEMON_LIST_FAILURE,
        payload: {
          message: error.message,
        },
      });
    }
  };

export const getPokemonDetail =
  (name: string) => async (dispatch: Dispatch<ReduxAction>) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/${name}`
      );
      const data = await response.json();

      dispatch({
        type: ActionTypes.GET_POKEMON_DETAIL_SUCCESS,
        payload: data,
      });
    } catch (error: any) {
      dispatch({
        type: ActionTypes.GET_POKEMON_DETAIL_FAILURE,
        payload: {
          message: error.message,
        },
      });
    }
  };

export const clearPokemonDetails = () => (dispatch: Dispatch<ReduxAction>) => {
  dispatch({
    type: ActionTypes.CLEAR_POKEMON_DETAILS,
  });
};

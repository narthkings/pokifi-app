import { PokemonDetails, Error, PokemonList } from "../../types";
import { ActionTypes } from "../actionTypes";

interface GetPokemonDetailsSuccess {
    type: ActionTypes.GET_POKEMON_DETAIL_SUCCESS;
    payload: PokemonDetails;
}
interface GetPokemonDetailsFailure {
    type: ActionTypes.GET_POKEMON_DETAIL_FAILURE;
    payload: Error;
}

interface GetPokemonListSuccess {
    type: ActionTypes.GET_POKEMON_LIST_SUCCESS;
    payload: PokemonList[];
    meta: {
        previous: string;
        next: string;
    }
}
interface GetPokemonListFailure {
    type: ActionTypes.GET_POKEMON_LIST_FAILURE;
    payload: Error;
}

interface clearPokemonDetails {
    type: ActionTypes.CLEAR_POKEMON_DETAILS;
}

export type ReduxAction = GetPokemonListSuccess | GetPokemonListFailure | GetPokemonDetailsSuccess | GetPokemonDetailsFailure | clearPokemonDetails;
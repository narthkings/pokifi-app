import { combineReducers } from "redux";
import pokemonDetail from "./pokemonDetail";
import pokemonList from "./pokemonList";
const reducers = combineReducers({
    pokemonList,
    pokemonDetail
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;

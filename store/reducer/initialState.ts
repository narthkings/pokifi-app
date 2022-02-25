import { RootState } from "../../types/";

const rootState: RootState = {
    pokemonDetail: {
        pokemonDetails: [],
        pokemonDetail: {
            moves: [],
            species: { name: '' },
            types: [],
            weight: 0,
            height: 0,
            stats: []
        },
        pokemonDetailError: {
            message: ""
        },
        pokemonDetailsSuccess: ""
    },
    pokemonList: {
        pokemonLists: [],
        pokemonError: {
            message: ""
        },
        pokemonSuccess: ""
    }
}

export default rootState;

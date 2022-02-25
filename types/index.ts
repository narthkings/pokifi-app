
export type RootState = {
    pokemonList: {
        pokemonLists: PokemonList[] | any[],
        pokemonError: Error,
        pokemonSuccess: string
        meta?: Meta
    },
    pokemonDetail: {
        pokemonDetails: PokemonDetails[] | any[];
        pokemonDetail: PokemonDetails;
        pokemonDetailError: Error;
        pokemonDetailsSuccess: string;
    };

}
export type Error = {
    message: string;
};

export type Meta = {
    previous: string;
    next: string;

}

export type PokemonList = {
    name: string;
    url: string;
}

export type PokemonDetails = {
    moves: Moves[]
    species: Species
    types: Types[]
    weight: number;
    height: number;
    stats: Stats[]
}

export type Moves = {
    name: string;
}
export type Species = {
    name: string;
}

export type Types = {
    type: {
        name: string;
    }
}

export type Stats = {
    base_stat: string;
}

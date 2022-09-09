export interface PokemonProps {
    id: number,
    url?: string,
    name: string,
    weight: number,
    height: number,
    sprites: Array<PokemonSprites>,
    abilities?: any,
    data?: any,
}

interface PokemonSprites{
    front_default: string,
}
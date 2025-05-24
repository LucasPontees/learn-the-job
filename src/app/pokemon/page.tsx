// app/(protected)/pokemons/page.tsx
import { getPokemonByName } from "@/http/pegarPokemons"
import { PokemonCard } from "@/components/pokemonCard"

export default async function Pokemon() {
  const pokemons = await Promise.all([
    getPokemonByName("pikachu"),
    getPokemonByName("bulbasaur"),
    getPokemonByName("charmander"),
  ])

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {pokemons.map(pokemon => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  )
}

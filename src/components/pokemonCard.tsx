// components/pokemon/PokemonCard.tsx
import { Pokemon } from "@/schemas/pokemonSchema"

interface Props {
  pokemon: Pokemon
}

export function PokemonCard({ pokemon }: Props) {
  return (
    <div className="border rounded-xl p-4 text-center shadow-md">
      <img
        src={pokemon.sprites.front_default || ""}
        alt={pokemon.name}
        className="w-24 h-24 mx-auto"
      />
      <h2 className="text-lg font-bold capitalize mt-2">{pokemon.name}</h2>
      <div className="text-sm text-gray-500">
        Tipos: {pokemon.types.map(t => t.type.name).join(", ")}
      </div>
    </div>
  )
}

// http/getPokemonByName.ts
import ky from "ky"
import { pokemonSchema } from "@/schemas/pokemonSchema"

export async function getPokemonByName(name: string) {
  const res = await ky.get(`https://pokeapi.co/api/v2/pokemon/${name}`).json()
  const result = pokemonSchema.safeParse(res)

  if (!result.success) throw new Error("Dados inválidos da PokéAPI")
  return result.data
}

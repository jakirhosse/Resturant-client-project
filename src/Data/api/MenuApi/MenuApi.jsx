import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api' }),
  endpoints: (builder) => ({
    getAllPokemons: builder.query({
      query: () => `/menus`,
    }),
    getSinglePokemon: builder.query({
      query: (_id) => `/menus/${_id}`,
    }),
    postPokemon: builder.mutation({
      query: (newPokemon) => ({
        url: `/menus`,
        method: 'POST',
        body: newPokemon,
      }),
    }),
  }),
})

export const { useGetAllPokemonsQuery, useGetSinglePokemonQuery, usePostPokemonMutation } = pokemonApi;

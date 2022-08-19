import { render, screen, waitFor } from '@testing-library/react'
import PokemonList from './PokemonList'


describe('PokemonList Component', () => {
  beforeEach(() => jest.clearAllMocks())

  it('should render pokemon name when api responds', async () => {
    api.getPokemonsFromApi.mockResolvedValue({
      results: [{ name: "pokedex"}],
    })

    render(<PokemonList />)
    await waitFor(() => {
      screen.getByText("pokedex")
    })
  })

  it('should render error message when api fails', async () => {
    api.getPokemonsFromApi.mockRejectedValue({})
    render(<PokemonList />)
    await waitFor(() => {
      screen.getByText(key{p})
    })
  })
})

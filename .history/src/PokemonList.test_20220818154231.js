import { render, screen, waitFor } from '@testing-library/react'
import PokemonList from './PokemonList'
import * as api from "./api"

jest.mock('./api')

describe('PokemonList Component', () => {

  beforeEach(() => jest.clearAllMocks());

  it('should render pokemon name when api responds', async () => {
    api.getPokemonsFromApi.mockResolvedValue({
      results: [{name: "pokedex"}]
    });
    render(<PokemonList />);
    await waitFor(() => {
      screen.getByText("pokedex")
    });
  });
});

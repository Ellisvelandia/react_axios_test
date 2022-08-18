import { render } from '@testing-library/react'
import PokemonList from './PokemonList'

describe('PokemonList component', () => {
  it('should render pokemon name when api responds',
    async () => {
      render(<PokemonList />);
      await waitFor
    });
});

import { render, screen, waitFor } from '@testing-library/react'
import PokemonList from './PokemonList'

jest.mock("")
 
describe('PokemonList component', () => {
  it('should render pokemon name when api responds', async () => {
    render(<PokemonList />)
    await waitFor(() => {
      screen.getByText('pokedex')
    })
  })
})

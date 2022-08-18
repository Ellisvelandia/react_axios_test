import { axios } from "axios";


export const getPokemonsFromApi = () => {
  return fetch('https://pokeapi.co/api/v2/pokemon').then((resp)=> {
    if (resp.status === 200) return resp.jason()
    else throw new Error('invalidad reponse')
  })
}

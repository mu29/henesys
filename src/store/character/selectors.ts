import createCachedSelector from 're-reselect'
import { AppState } from '../selectors'

export type Character = {
  name: string;
  level: number;
  job: string;
  imageUrl: string;
}

export type CharacterState = {
  characters: Character[];
  selected: number;
}

const initialState: CharacterState = {
  characters: [{
    name: '별빛뒤로',
    level: 0,
    job: '',
    imageUrl: '',
  }],
  selected: 0,
}

export default initialState

export const getCharacters = (state: AppState) => state.character.characters

export const getSelectedCharacter = (state: AppState) => state.character.characters[state.character.selected]

export const getCharacterByName = createCachedSelector(
  [getCharacters, (_: AppState, name: string) => name],
  (characters, name) => characters.find(c => c.name === name),
)((_, name) => name)

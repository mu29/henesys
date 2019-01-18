import createCachedSelector from 're-reselect'
import { createSelector } from 'reselect'
import { AppState, getEntity } from 'src/store/selectors'

export type CharacterState = {
  characters: string[];
  selected: string;
  candidate: {
    name: string;
    imageUrl: string;
  };
}

const initialState: CharacterState = {
  characters: [],
  selected: '',
  candidate: {
    name: '',
    imageUrl: '',
  },
}

export default initialState

export const getCharacters = (state: AppState) => getEntity(state).characters

export const getSelectedCharacterName = (state: AppState) => state.character.selected

export const getSelectedCharacter = createSelector(
  [getCharacters, getSelectedCharacterName],
  (characters, name) => characters[name] || { name },
)

export const getCharacterByName = createCachedSelector(
  [getCharacters, (_: AppState, name: string) => name],
  (characters, name) => characters[name],
)((_, name) => name)

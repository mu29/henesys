import React from 'react'
import { Action, Dispatch } from 'redux'
import { connect } from 'react-redux'
import { CharacterInfo } from 'src/components'
import { CharacterInfoProps } from 'src/components/character/CharacterInfo'
import {
  getCharacterInfoActions,
  GetCharacterInfoParams,
} from 'src/store/actions'
import {
  AppState,
  getCharacterByName,
  getIsLoading,
} from 'src/store/selectors'

export interface CharacterInfoContainerProps {
  name: string,
}

const CharacterInfoContainer: React.SFC<CharacterInfoProps> = props => <CharacterInfo { ...props } />

const mapStateToProps = (state: AppState, { name }: CharacterInfoContainerProps) => {
  const character = getCharacterByName(state, name) || {}
  return {
    name,
    level: character.level,
    job: character.job,
    imageUrl: character.imageUrl,
    isLoading: getIsLoading(state.loading, getCharacterInfoActions.type),
  }
}

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  getCharacterInfo: (params: GetCharacterInfoParams) => dispatch(getCharacterInfoActions.request(params)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CharacterInfoContainer)

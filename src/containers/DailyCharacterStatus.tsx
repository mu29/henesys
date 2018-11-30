import React from 'react'
import { connect } from 'react-redux'
import { CharacterStatus } from 'src/components'
import { CharacterStatusProps } from 'src/components/character/CharacterStatus'
import {
  AppState,
  getSelectedCharacter,
  getCurrentDate,
  getDailyProgress,
} from 'src/store/selectors'

const DailyCharacterStatusContainer: React.FunctionComponent<CharacterStatusProps> = props => (
  <CharacterStatus { ...props } />
)

const mapStateToProps = (state: AppState) => ({
  name: getSelectedCharacter(state).name,
  progress: getDailyProgress(state, getCurrentDate(state)),
})

export default connect(mapStateToProps)(DailyCharacterStatusContainer)

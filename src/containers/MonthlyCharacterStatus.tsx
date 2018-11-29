import React from 'react'
import { connect } from 'react-redux'
import { CharacterStatus } from 'src/components'
import { CharacterStatusProps } from 'src/components/character/CharacterStatus'
import {
  AppState,
  getSelectedCharacter,
  getPeriodProgress,
} from 'src/store/selectors'

const MonthlyCharacterStatusContainer: React.SFC<CharacterStatusProps> = props => <CharacterStatus { ...props } />

const mapStateToProps = (state: AppState) => ({
  name: getSelectedCharacter(state).name,
  progress: getPeriodProgress(state, 30),
})

export default connect(mapStateToProps)(MonthlyCharacterStatusContainer)

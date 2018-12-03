import React from 'react'
import { connect } from 'react-redux'
import { CharacterStatus } from 'src/components'
import { CharacterStatusProps } from 'src/components/character/CharacterStatus'
import {
  AppState,
  getSelectedCharacter,
  getMonthlyProgress,
} from 'src/store/selectors'

export interface MonthlyCharacterStatusContainerProps {
  month: string,
}

const MonthlyCharacterStatusContainer: React.FunctionComponent<CharacterStatusProps> = props => (
  <CharacterStatus { ...props } />
)

const mapStateToProps = (state: AppState, { month }: MonthlyCharacterStatusContainerProps) => ({
  name: getSelectedCharacter(state).name,
  progress: getMonthlyProgress(state, month),
})

export default connect(mapStateToProps)(MonthlyCharacterStatusContainer)

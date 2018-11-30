import React from 'react'
import { Action, Dispatch } from 'redux'
import { connect } from 'react-redux'
import { MissionItem } from 'src/components'
import { MissionItemProps } from 'src/components/mission/MissionItem'
import { toggleTodoAction } from 'src/store/actions'
import {
  AppState,
  getSelectedCharacterName,
  getMissionStatus,
  getCurrentDate,
} from 'src/store/selectors'

const MissionItemContainer: React.FunctionComponent<MissionItemProps> = props => <MissionItem { ...props } />

const mapStateToProps = (state: AppState, { name }: MissionItemProps) => ({
  date: getCurrentDate(state),
  character: getSelectedCharacterName(state),
  completed: getMissionStatus(state, getCurrentDate(state), name),
})

const mapDispatchToProps = (dispatch: Dispatch<Action>, { name }: MissionItemProps) => ({
  toggleTodo: (character: string, date: string) => () => dispatch(toggleTodoAction({ character, date, name })),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  (stateProps, dispatchProps, ownProps) => ({
    ...stateProps,
    ...dispatchProps,
    ...ownProps,
    onPress: dispatchProps.toggleTodo(stateProps.character, stateProps.date),
  }),
)(MissionItemContainer)

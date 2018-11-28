import React from 'react'
import { Action, Dispatch } from 'redux'
import { connect } from 'react-redux'
import { MissionItem } from 'src/components'
import { MissionItemProps } from 'src/components/mission/MissionItem'
import { toggleTodoAction } from 'src/store/actions'
import { AppState } from 'src/store/selectors'
import { today } from 'src/utils'

const MissionItemContainer: React.SFC<MissionItemProps> = props => <MissionItem { ...props } />

const mapStateToProps = ({ character, mission }: AppState, { name }: MissionItemProps) => ({
  character: character.selected,
  completed: mission.records[character.selected][today()][name],
})

const mapDispatchToProps = (dispatch: Dispatch<Action>, { name }: MissionItemProps) => ({
  toggleTodo: (character: string) => () => dispatch(toggleTodoAction({ character, name })),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  (stateProps, dispatchProps, ownProps) => ({
    ...stateProps,
    ...dispatchProps,
    ...ownProps,
    onPress: dispatchProps.toggleTodo(stateProps.character),
  }),
)(MissionItemContainer)

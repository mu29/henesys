import React from 'react'
import { Action, Dispatch } from 'redux'
import { connect } from 'react-redux'
import { EditableMissionList } from 'src/components'
import { EditableMissionListProps } from 'src/components/mission/EditableMissionList'
import {
  addTodoAction,
  removeTodoAction,
} from 'src/store/actions'
import {
  AppState,
  getTodos,
  getSelectedCharacterName,
} from 'src/store/selectors'

const EditableMissionListContainer: React.FunctionComponent<EditableMissionListProps> = props => (
  <EditableMissionList { ...props } />
)

const mapStateToProps = (state: AppState) => ({
  character: getSelectedCharacterName(state),
  todos: getTodos(state),
})

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  toggle: (character: string) => (name: string, add: boolean) => dispatch(add
    ? addTodoAction({ character, name })
    : removeTodoAction({ character, name }),
  ),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  (stateProps, dispatchProps, ownProps) => ({
    ...stateProps,
    ...dispatchProps,
    ...ownProps,
    toggle: dispatchProps.toggle(stateProps.character),
  }),
)(EditableMissionListContainer)

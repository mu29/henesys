import React from 'react'
import { Action, Dispatch } from 'redux'
import { connect } from 'react-redux'
import { EditView } from 'src/components'
import { EditViewProps } from 'src/components/character/EditView'
import { removeCharacterAction } from 'src/store/actions'
import {
  AppState,
  getSelectedCharacterName,
} from 'src/store/selectors'

const EditViewContainer: React.FunctionComponent<EditViewProps> = props => (
  <EditView { ...props } />
)

const mapStateToProps = (state: AppState) => ({
  character: getSelectedCharacterName(state),
  canRemove: state.character.characters.length > 1,
})

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  remove: (name: string) => () => dispatch(removeCharacterAction({ name })),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  (stateProps, dispatchProps, ownProps) => ({
    ...stateProps,
    ...dispatchProps,
    ...ownProps,
    remove: dispatchProps.remove(stateProps.character),
  }),
)(EditViewContainer)

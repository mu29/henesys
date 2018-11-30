import React from 'react'
import { Action, Dispatch } from 'redux'
import { connect } from 'react-redux'
import { SettingsView } from 'src/components'
import { SettingsViewProps } from 'src/components/character/SettingsView'
import { removeCharacterAction } from 'src/store/actions'
import {
  AppState,
  getSelectedCharacterName,
} from 'src/store/selectors'

const SettingsViewContainer: React.FunctionComponent<SettingsViewProps> = props => (
  <SettingsView { ...props } />
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
)(SettingsViewContainer)

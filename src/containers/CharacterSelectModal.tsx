import React from 'react'
import { Action, Dispatch } from 'redux'
import { connect } from 'react-redux'
import { CharacterSelectModal } from 'src/components'
import { CharacterSelectModalProps } from 'src/components/character/CharacterSelectModal'
import { hideModalAction } from 'src/store/actions'
import {
  AppState,
  isModalVisible,
} from 'src/store/selectors'

const CharacterSelectModalContainer: React.SFC<CharacterSelectModalProps> = props => (
  <CharacterSelectModal { ...props } />
)

const mapStateToProps = (state: AppState) => ({
  characters: state.character.characters,
  isVisible: isModalVisible(state, 'CharacterSelect'),
})

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  close: () => dispatch(hideModalAction({ modal: 'CharacterSelect' })),
})

export default connect(mapStateToProps, mapDispatchToProps)(CharacterSelectModalContainer)

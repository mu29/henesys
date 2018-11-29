import React from 'react'
import { connect } from 'react-redux'
import { CharacterSelectModal } from 'src/components'
import { CharacterSelectModalProps } from 'src/components/character/CharacterSelectModal'
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

export default connect(mapStateToProps)(CharacterSelectModalContainer)

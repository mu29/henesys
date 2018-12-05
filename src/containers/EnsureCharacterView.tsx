import React from 'react'
import { connect } from 'react-redux'
import { EnsureCharacterView } from 'src/components'
import { EnsureCharacterViewProps } from 'src/components/character/EnsureCharacterView'
import { AppState } from 'src/store/selectors'

const EnsureCharacterViewContainer: React.FunctionComponent<EnsureCharacterViewProps> = props => (
  <EnsureCharacterView { ...props } />
)

const mapStateToProps = (state: AppState) => ({
  hasCharacter: state.character.characters.length > 0,
})

export default connect(mapStateToProps)(EnsureCharacterViewContainer)

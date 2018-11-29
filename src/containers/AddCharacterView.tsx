import React from 'react'
import { Dispatch, Action } from 'redux'
import { connect } from 'react-redux'
import { AddCharacterView } from 'src/components'
import { AddCharacterViewProps } from 'src/components/character/AddCharacterView'
import { searchCharacterInfoActions } from 'src/store/actions'
import { AppState } from 'src/store/selectors'

const AddCharacterViewContainer: React.SFC<AddCharacterViewProps> = props => <AddCharacterView { ...props } />

const mapStateToProps = (state: AppState) => ({
  imageUrl: state.character.candidate.imageUrl,
})

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  search: (name: string) => dispatch(searchCharacterInfoActions.request({ name })),
})

export default connect(mapStateToProps, mapDispatchToProps)(AddCharacterViewContainer)

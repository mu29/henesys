import React from 'react'
import { Dispatch, Action } from 'redux'
import { connect } from 'react-redux'
import { AddCharacterView } from 'src/components'
import { AddCharacterViewProps } from 'src/components/character/AddCharacterView'
import {
  searchCharacterInfoActions,
  elevateCandidateAction,
  getCharacterInfoActions,
} from 'src/store/actions'
import { AppState } from 'src/store/selectors'

const AddCharacterViewContainer: React.SFC<AddCharacterViewProps> = props => <AddCharacterView { ...props } />

const mapStateToProps = (state: AppState) => ({
  candidate: state.character.candidate.name,
  imageUrl: state.character.candidate.imageUrl,
})

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  search: (name: string) => dispatch(searchCharacterInfoActions.request({ name })),
  confirm: (name: string) => {
    dispatch(elevateCandidateAction({ name }))
    dispatch(getCharacterInfoActions.request({ name }))
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  (stateProps, dispatchProps, ownProps) => ({
    ...stateProps,
    ...dispatchProps,
    ...ownProps,
    confirm: () => {
      if (stateProps.candidate) {
        dispatchProps.confirm(stateProps.candidate)
      }
    },
  }),
)(AddCharacterViewContainer)

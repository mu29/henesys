import React from 'react'
import { Dispatch, Action } from 'redux'
import { connect } from 'react-redux'
import { AddCharacterView } from 'src/components'
import { AddCharacterViewProps } from 'src/components/character/AddCharacterView'
import {
  searchCharacterInfoActions,
  elevateCandidateAction,
  fillTodoAction,
  getCharacterInfoActions,
} from 'src/store/actions'
import {
  AppState,
  getIsLoading,
} from 'src/store/selectors'
import { today } from 'src/utils'

const AddCharacterViewContainer: React.FunctionComponent<AddCharacterViewProps> = props => (
  <AddCharacterView { ...props } />
)

const mapStateToProps = (state: AppState) => ({
  characters: state.character.characters,
  candidate: state.character.candidate.name,
  imageUrl: state.character.candidate.imageUrl,
  isLoading: getIsLoading(state.loading, searchCharacterInfoActions.type),
})

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  search: (name: string) => dispatch(searchCharacterInfoActions.request({ name })),
  confirm: (name: string) => {
    dispatch(elevateCandidateAction({ name }))
    dispatch(fillTodoAction({ to: today() }))
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
      if (stateProps.candidate && !stateProps.characters.includes(stateProps.candidate)) {
        dispatchProps.confirm(stateProps.candidate)
      }
    },
  }),
)(AddCharacterViewContainer)

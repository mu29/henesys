import React from 'react'
import { Action, Dispatch } from 'redux'
import { connect } from 'react-redux'
import { SelectableCharacterInfo } from 'src/components'
import { SelectableCharacterInfoProps } from 'src/components/character/SelectableCharacterInfo'
import {
  selectCharacterAction,
  hideModalAction,
} from 'src/store/actions'
import { AppState } from 'src/store/selectors'

export interface SelectableCharacterInfoContainerProps {
  name: string,
}

const SelectableCharacterInfoContainer: React.FunctionComponent<SelectableCharacterInfoProps> = props => (
  <SelectableCharacterInfo { ...props } />
)

const mapStateToProps = (state: AppState, { name }: SelectableCharacterInfoContainerProps) => ({
  selected: state.character.selected === name,
})

const mapDispatchToProps = (dispatch: Dispatch<Action>, { name }: SelectableCharacterInfoContainerProps) => ({
  onSelect: () => {
    dispatch(selectCharacterAction({ name }))
    dispatch(hideModalAction({ modal: 'CharacterSelect' }))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(SelectableCharacterInfoContainer)

import React from 'react'
import { Action, Dispatch } from 'redux'
import { connect } from 'react-redux'
import { IconButton } from 'src/components'
import { showModalAction } from 'src/store/actions'

export interface SwapButtonContainerProps {
  onPress: () => void,
}

const SwapButtonContainer: React.FunctionComponent<SwapButtonContainerProps> = props => (
  <IconButton icon="md-swap" size={22} { ...props } />
)

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  onPress: () => dispatch(showModalAction({ modal: 'CharacterSelect' })),
})

export default connect(null, mapDispatchToProps)(SwapButtonContainer)

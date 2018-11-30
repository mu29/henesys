import React from 'react'
import { Action, Dispatch } from 'redux'
import { connect } from 'react-redux'
import { IconButton } from 'src/components'
import { showModalAction } from 'src/store/actions'

export interface SwapButtonContainerProps {
  onPress: () => void,
}

const SwapButtonContainer: React.FunctionComponent<SwapButtonContainerProps> = ({
  children,
  ...props
}) => (
  <IconButton icon="md-swap" size={22} width={32} height={44} { ...props } />
)

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  onPress: () => dispatch(showModalAction({ modal: 'CharacterSelect' })),
})

export default connect(null, mapDispatchToProps)(SwapButtonContainer)

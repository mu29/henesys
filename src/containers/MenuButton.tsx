import React from 'react'
import { Action, Dispatch } from 'redux'
import { connect } from 'react-redux'
import { IconButton } from 'src/components'
import { showModalAction } from 'src/store/actions'

export interface MenuButtonContainerProps {
  onPress: () => void,
}

const MenuButtonContainer: React.FunctionComponent<MenuButtonContainerProps> = ({
  children,
  ...props
}) => (
  <IconButton icon="md-swap" size={22} width={32} height={44} { ...props } />
)

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  onPress: () => dispatch(showModalAction({ modal: 'MenuSelect' })),
})

export default connect(null, mapDispatchToProps)(MenuButtonContainer)

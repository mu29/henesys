import React from 'react'
import { Action, Dispatch } from 'redux'
import { connect } from 'react-redux'
import { SwapButton } from 'src/components'
import { SwapButtonProps } from 'src/components/common/SwapButton'
import { showModalAction } from 'src/store/actions'

const SwapButtonContainer: React.SFC<SwapButtonProps> = props => (
  <SwapButton { ...props } />
)

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  onPress: () => dispatch(showModalAction({ modal: 'CharacterSelect' })),
})

export default connect(null, mapDispatchToProps)(SwapButtonContainer)

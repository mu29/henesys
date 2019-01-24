import React from 'react'
import { Action, Dispatch } from 'redux'
import { connect } from 'react-redux'
import { MenuSelectModal } from 'src/components'
import { MenuSelectModalProps } from 'src/components/article/MenuSelectModal'
import { hideModalAction } from 'src/store/actions'
import {
  AppState,
  isModalVisible,
} from 'src/store/selectors'

const MenuSelectModalContainer: React.FunctionComponent<MenuSelectModalProps> = props => (
  <MenuSelectModal { ...props } />
)

const mapStateToProps = (state: AppState) => ({
  isVisible: isModalVisible(state, 'MenuSelect'),
})

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  close: () => dispatch(hideModalAction({ modal: 'MenuSelect' })),
})

export default connect(mapStateToProps, mapDispatchToProps)(MenuSelectModalContainer)

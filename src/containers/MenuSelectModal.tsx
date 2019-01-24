import React from 'react'
import { Action, Dispatch } from 'redux'
import { connect } from 'react-redux'
import { MenuSelectModal } from 'src/components'
import { MenuSelectModalProps } from 'src/components/menu/MenuSelectModal'
import {
  hideModalAction,
  switchGroupAction,
  switchMenuAction,
} from 'src/store/actions'
import {
  AppState,
  isModalVisible,
  Menu,
} from 'src/store/selectors'

const MenuSelectModalContainer: React.FunctionComponent<MenuSelectModalProps> = props => (
  <MenuSelectModal { ...props } />
)

const mapStateToProps = (state: AppState) => ({
  isVisible: isModalVisible(state, 'MenuSelect'),
  group: state.menu.group,
  menu: state.menu.current,
})

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  switchGroup: (group: string) => dispatch(switchGroupAction({ group })),
  switchMenu: (menu: Menu) => dispatch(switchMenuAction({ menu })),
  close: () => dispatch(hideModalAction({ modal: 'MenuSelect' })),
})

export default connect(mapStateToProps, mapDispatchToProps)(MenuSelectModalContainer)

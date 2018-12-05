import React from 'react'
import { Action, Dispatch } from 'redux'
import { connect } from 'react-redux'
import { SettingsList } from 'src/components'
import { SettingsListProps } from 'src/components/settings/SettingsList'
import {
  enableUrusNotificationActions,
  disableUrusNotificationActions,
} from 'src/store/actions'
import { AppState } from 'src/store/selectors'

const SettingsListContainer: React.FunctionComponent<SettingsListProps> = props => (
  <SettingsList { ...props } />
)

const mapStateToProps = (state: AppState) => ({
  urusNotification: state.account.urusNotification,
})

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  enableUrusNotification: () => dispatch(enableUrusNotificationActions.request()),
  disableUrusNotification: () => dispatch(disableUrusNotificationActions.request()),
})

export default connect(mapStateToProps, mapDispatchToProps)(SettingsListContainer)

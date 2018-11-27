import React from 'react'
import { Action, Dispatch } from 'redux'
import { connect } from 'react-redux'
import { UserInfo } from 'src/components'
import { UserInfoProps } from 'src/components/user/UserInfo'
import {
  getUserInfoActions,
  GetUserInfoParams,
} from 'src/store/actions'
import {
  AppState,
  getDailyProgress,
  getIsLoading,
} from 'src/store/selectors'
import { today } from 'src/utils'

const DailyUserInfoContainer: React.SFC<UserInfoProps> = props => <UserInfo { ...props } />

const mapStateToProps = (state: AppState) => ({
  name: state.user.name,
  level: state.user.level,
  job: state.user.job,
  imageUrl: state.user.imageUrl,
  progress: getDailyProgress(state, today()),
  isLoading: getIsLoading(state.loading, getUserInfoActions.type),
})

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  getUserInfo: (params: GetUserInfoParams) => dispatch(getUserInfoActions.request(params)),
})

export default connect(mapStateToProps, mapDispatchToProps)(DailyUserInfoContainer)

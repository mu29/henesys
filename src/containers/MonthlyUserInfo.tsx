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
  getMonthlyProgress,
  getIsLoading,
} from 'src/store/selectors'

const MonthlyUserInfoContainer: React.SFC<UserInfoProps> = props => <UserInfo { ...props } />

const mapStateToProps = ({ user, mission, loading }: AppState) => ({
  name: user.name,
  level: user.level,
  job: user.job,
  imageUrl: user.imageUrl,
  progress: getMonthlyProgress(mission),
  isLoading: getIsLoading(loading, getUserInfoActions.type),
})

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  getUserInfo: (params: GetUserInfoParams) => dispatch(getUserInfoActions.request(params)),
})

export default connect(mapStateToProps, mapDispatchToProps)(MonthlyUserInfoContainer)

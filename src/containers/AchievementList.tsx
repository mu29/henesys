import React from 'react'
import { connect } from 'react-redux'
import { AchievementList } from 'src/components'
import { AchievementListProps } from 'src/components/stats/AchievementList'
import {
  AppState,
  getCompleteDays,
  getAlmostCompleteDays,
  getIncompleteDays,
} from 'src/store/selectors'

const AchievementListContainer: React.SFC<AchievementListProps> = props => <AchievementList { ...props } />

const mapStateToProps = (state: AppState) => ({
  completes: getCompleteDays(state, 0),
  almostCompletes: getAlmostCompleteDays(state, 0),
  incompletes: getIncompleteDays(state, 0),
})

export default connect(mapStateToProps)(AchievementListContainer)

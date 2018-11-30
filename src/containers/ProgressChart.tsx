import React from 'react'
import { connect } from 'react-redux'
import { ProgressChart } from 'src/components'
import { ProgressChartProps } from 'src/components/stats/ProgressChart'
import {
  AppState,
  getDailyProgress,
  getPeriodCompletes,
  getPeriodProgress,
} from 'src/store/selectors'
import { lastMonth, today, datesBetween } from 'src/utils'

const ProgressChartContainer: React.FunctionComponent<ProgressChartProps> = props => <ProgressChart { ...props } />

const mapStateToProps = (state: AppState) => ({
  completes: getPeriodCompletes(state, 30),
  monthlyProgress: getPeriodProgress(state, 30),
  progressList: datesBetween(lastMonth(), today()).map(day => getDailyProgress(state, day)),
})

export default connect(mapStateToProps)(ProgressChartContainer)

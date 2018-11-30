import React from 'react'
import moment from 'moment'
import { Dispatch, Action } from 'redux'
import { connect } from 'react-redux'
import { Calendar } from 'src/components'
import { CalendarProps } from 'src/components/stats/Calendar'
import { changeDateAction } from 'src/store/actions'
import {
  AppState,
  getDailyProgress,
} from 'src/store/selectors'
import { datesBetween, today } from 'src/utils'

const CalendarContainer: React.FunctionComponent<CalendarProps> = props => <Calendar { ...props } />

const mapStateToProps = (state: AppState) => {
  const firstDay = moment(state.mission.date).startOf('month').format('YYYY-MM-DD')
  const dates = [firstDay, ...datesBetween(firstDay, today())]
  return {
    current: state.mission.date,
    progressList: dates.map(day => getDailyProgress(state, day)),
  }
}

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  changeDate: (date: string) => dispatch(changeDateAction({ date })),
})

export default connect(mapStateToProps, mapDispatchToProps)(CalendarContainer)

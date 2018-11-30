import React from 'react'
import moment from 'moment'
import { connect } from 'react-redux'
import { Calendar } from 'src/components'
import { CalendarProps } from 'src/components/stats/Calendar'
import {
  AppState,
  getDailyProgress,
} from 'src/store/selectors'
import { datesBetween, today } from 'src/utils'

export interface CalendarContainerProps {
  month?: string,
}

const CalendarContainer: React.FunctionComponent<CalendarProps> = props => <Calendar { ...props } />

const mapStateToProps = (state: AppState, { month }: CalendarContainerProps) => {
  const firstDay = `${month || moment().format('YYYY-MM')}-01`
  const dates = [firstDay, ...datesBetween(firstDay, today())]
  return {
    progressList: dates.map(day => getDailyProgress(state, day)),
  }
}

export default connect(mapStateToProps)(CalendarContainer)

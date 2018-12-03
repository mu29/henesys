import React from 'react'
import { connect } from 'react-redux'
import { SwipableCalendar } from 'src/components'
import { SwipableCalendarProps } from 'src/components/stats/SwipableCalendar'
import {
  AppState,
  getFirstDate,
} from 'src/store/selectors'

const SwipableCalendarContainer: React.FunctionComponent<SwipableCalendarProps> = props => (
  <SwipableCalendar { ...props } />
)

const mapStateToProps = (state: AppState) => ({
  startMonth: getFirstDate(state),
})

export default connect(mapStateToProps)(SwipableCalendarContainer)

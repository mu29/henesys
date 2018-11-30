import React from 'react'
import { connect } from 'react-redux'
import { Streaks } from 'src/components'
import { StreaksProps } from 'src/components/stats/Streaks'
import {
  AppState,
  getCurrentStreaks,
  getLongestStreaks,
} from 'src/store/selectors'

const StreaksContainer: React.FunctionComponent<StreaksProps> = props => <Streaks { ...props } />

const mapStateToProps = (state: AppState) => ({
  current: getCurrentStreaks(state, 0),
  longest: getLongestStreaks(state, 0),
})

export default connect(mapStateToProps)(StreaksContainer)

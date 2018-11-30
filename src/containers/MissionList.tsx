import React from 'react'
import { connect } from 'react-redux'
import { MissionList } from 'src/components'
import { MissionListProps } from 'src/components/mission/MissionList'
import {
  AppState,
  getCurrentDate,
  getRecordOfDate,
} from 'src/store/selectors'
import { contents, boss, quest, symbol } from 'src/constants/missions'

const MissionListContainer: React.FunctionComponent<MissionListProps> = props => <MissionList { ...props } />

const mapStateToProps = (state: AppState) => {
  const missions = Object.keys(getRecordOfDate(state, getCurrentDate(state)))
  return {
    missions: [{
      ...contents,
      items: contents.items.filter(i => missions.includes(i.key)),
    }, {
      ...boss,
      items: boss.items.filter(i => missions.includes(i.key)),
    }, {
      ...quest,
      items: quest.items.filter(i => missions.includes(i.key)),
    }, {
      ...symbol,
      items: symbol.items.filter(i => missions.includes(i.key)),
    }],
  }
}

export default connect(mapStateToProps)(MissionListContainer)

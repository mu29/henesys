import React from 'react'
import { connect } from 'react-redux'
import { MissionList } from 'src/components'
import { MissionListProps } from 'src/components/mission/MissionList'
import { AppState } from 'src/store/selectors'
import { contents, boss, quest, symbol, hardBoss } from 'src/constants/missions'
import { today } from 'src/utils'

const MissionListContainer: React.SFC<MissionListProps> = props => <MissionList { ...props } />

const mapStateToProps = ({ mission }: AppState) => {
  const missions = Object.keys(mission.records[today()] || {})
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
    }, {
      ...hardBoss,
      items: hardBoss.items.filter(i => missions.includes(i.key)),
    }],
  }
}

export default connect(mapStateToProps)(MissionListContainer)

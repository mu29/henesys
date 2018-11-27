import React from 'react'
import { Action, Dispatch } from 'redux'
import { connect } from 'react-redux'
import { MissionItem } from 'src/components'
import { MissionItemProps } from 'src/components/mission/MissionItem'
import { toggleTodoAction } from 'src/store/actions'
import { AppState } from 'src/store/selectors'
import { today } from 'src/utils'

const MissionItemContainer: React.SFC<MissionItemProps> = props => <MissionItem { ...props } />

const mapStateToProps = ({ mission }: AppState, { name }: MissionItemProps) => ({
  closed: mission.records[today()][name],
})

const mapDispatchToProps = (dispatch: Dispatch<Action>, { name }: MissionItemProps) => ({
  onPress: () => dispatch(toggleTodoAction({ name })),
})

export default connect(mapStateToProps, mapDispatchToProps)(MissionItemContainer)

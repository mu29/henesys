import React from 'react'
import {
  View,
  ScrollView,
  StyleSheet,
} from 'react-native'
import { Section } from 'src/components'
import { withTopDivider } from 'src/wrappers'
import {
  MonthlyCharacterStatus,
  SwipableCalendar,
  Streaks,
  ProgressChart,
  AchievementList,
} from 'src/containers'
import { thisMonth } from 'src/utils'

const DividedScrollView = withTopDivider(ScrollView)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export interface StatsViewProps {}

export interface StatsViewState {
  month: string,
}

class StatsView extends React.PureComponent<StatsViewProps, StatsViewState> {
  state = {
    month: thisMonth(),
  }

  _onUpdate = (month: string) => this.setState({ month })

  render() {
    const { month } = this.state
    return (
      <DividedScrollView
        showsVerticalScrollIndicator={false}
        style={styles.container}
      >
        <View>
          <MonthlyCharacterStatus month={month} />
          <SwipableCalendar onUpdate={this._onUpdate} />
          <Section title="연속 달성" />
          <Streaks />
          <Section title="최근 30일" />
          <ProgressChart />
          <Section title="누적 기록" />
          <AchievementList />
        </View>
      </DividedScrollView>
    )
  }
}

export default StatsView

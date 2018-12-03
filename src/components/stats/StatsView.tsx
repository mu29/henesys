import React from 'react'
import {
  View,
  StyleSheet,
} from 'react-native'
import {
  Section,
  DividedScrollView,
} from 'src/components'
import {
  MonthlyCharacterStatus,
  Calendar,
  SwipableCalendar,
  Streaks,
  ProgressChart,
  AchievementList,
} from 'src/containers'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export interface StatsViewProps {}

const StatsView: React.FunctionComponent<StatsViewProps> = () => (
  <DividedScrollView
    showsVerticalScrollIndicator={false}
    style={styles.container}
  >
    <View>
      <MonthlyCharacterStatus month="2018-12" />
      <SwipableCalendar />
      <Section title="연속 달성" />
      <Streaks />
      <Section title="최근 30일" />
      <ProgressChart />
      <Section title="누적 기록" />
      <AchievementList />
    </View>
  </DividedScrollView>
)

export default React.memo(StatsView)

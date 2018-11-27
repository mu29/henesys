import React from 'react'
import {
  View,
  StyleSheet,
} from 'react-native'
import {
  Section,
  Calendar,
  Streaks,
  ProgressChart,
  DividedScrollView,
} from 'src/components'
import {
  MonthlyUserInfo,
  AchievementList,
} from 'src/containers'
import { palette } from 'src/styles'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

const progressList = [
  1, 0.2, 0.4, 0.5, 0.2, 0.1, 1, 0.7, 0.9, 0, 0.1, 0, 1, 1, 0.7,
  1, 0.2, 0.4, 0.5, 0.2, 0.1, 1, 0.7, 0.9, 0, 0.1, 0, 1, 1, 0.7,
]

export interface StatsViewProps {}

const StatsView: React.SFC<StatsViewProps> = () => (
  <DividedScrollView
    showsVerticalScrollIndicator={false}
    style={styles.container}
  >
    <View>
      <MonthlyUserInfo />
      <Calendar progressList={progressList} />
      <Section title="연속 달성" />
      <Streaks current={12} most={86} />
      <Section title="최근 30일" />
      <ProgressChart progressList={progressList.map(p => p * 10)} />
      <Section title="누적 기록" />
      <AchievementList />
    </View>
  </DividedScrollView>
)

export default React.memo(StatsView)
